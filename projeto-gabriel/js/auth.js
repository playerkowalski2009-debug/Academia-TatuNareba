(function () {
  // Define as chaves usadas no Local Storage para armazenar usuários, sessão, assinatura e perfil.
  const USERS_KEY = 'tatu_nareba_users';
  const AUTH_KEY = 'tatu_nareba_auth';
  const SUBSCRIPTION_KEY = 'tatu_nareba_subscription';
  const PENDING_PLAN_KEY = 'tatu_nareba_pending_plan';
  const PROFILE_KEY = 'tatu_nareba_profile';

  // Busca a lista de usuários cadastrados no armazenamento local.
  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  // Salva a lista de usuários no armazenamento local.
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  // Retorna os dados do usuário atualmente autenticado.
  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY));
    } catch (error) {
      return null;
    }
  }

  // Define o usuário atual na sessão do navegador.
  function setCurrentUser(user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }

  // Remove a sessão atual do usuário.
  function clearCurrentUser() {
    localStorage.removeItem(AUTH_KEY);
  }

  // Verifica se existe um usuário logado no momento.
  function isLoggedIn() {
    return Boolean(getCurrentUser());
  }

  // Recupera o plano que o usuário escolheu antes de confirmar o pagamento.
  function getPendingPlan() {
    return localStorage.getItem(PENDING_PLAN_KEY) || 'Básico';
  }

  // Guarda o plano escolhido para usar no fluxo de pagamento.
  function setPendingPlan(plan) {
    localStorage.setItem(PENDING_PLAN_KEY, plan);
  }

  // Limpa o plano pendente após a assinatura ser ativada.
  function clearPendingPlan() {
    localStorage.removeItem(PENDING_PLAN_KEY);
  }

  // Busca os dados da assinatura salvo no navegador.
  function getSubscription() {
    try {
      return JSON.parse(localStorage.getItem(SUBSCRIPTION_KEY));
    } catch (error) {
      return null;
    }
  }

  // Salva os dados da assinatura no armazenamento local.
  function setSubscription(subscription) {
    localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(subscription));
  }

  // Verifica se a assinatura atual está ativa.
  function isSubscriptionActive() {
    const subscription = getSubscription();
    return Boolean(subscription && subscription.active);
  }

  // Define para onde o usuário deve voltar após login ou cadastro.
  function getRedirectTarget(defaultPage = 'index.html') {
    const params = new URLSearchParams(window.location.search);
    const next = params.get('next');
    return next || defaultPage;
  }

  // Recupera o plano escolhido a partir da URL, assinatura atual ou armazenamento local.
  function getSelectedPlanFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const planFromUrl = params.get('plan');
    if (planFromUrl) {
      return planFromUrl;
    }

    const activeSubscription = getSubscription();
    if (activeSubscription?.plan) {
      return activeSubscription.plan;
    }

    return getPendingPlan();
  }

  // Retorna os preços disponíveis para os planos.
  function getPlanPrices() {
    return {
      Básico: 'R$ 4,90',
      Plus: 'R$ 9,90',
      Premium: 'R$ 14,90'
    };
  }

  // Atualiza a interface de pagamento com o plano selecionado.
  function updatePlanSelection(plan) {
    const selectedPlan = document.getElementById('selected-plan');
    const planPrice = document.getElementById('plan-price');
    const planButtons = document.querySelectorAll('[data-plan-option]');

    if (selectedPlan) {
      selectedPlan.textContent = plan;
    }

    if (planPrice) {
      planPrice.textContent = getPlanPrices()[plan] || 'R$ 4,90';
    }

    planButtons.forEach((button) => {
      const isActive = button.getAttribute('data-plan-option') === plan;
      button.classList.toggle('border-orange-500', isActive);
      button.classList.toggle('bg-orange-500', isActive);
      button.classList.toggle('text-white', isActive);
      button.classList.toggle('bg-white', !isActive);
      button.classList.toggle('text-slate-700', !isActive);
    });

    setPendingPlan(plan);
  }

  // Realiza o login do usuário verificando e-mail e senha.
  function login(email, password) {
    const users = getUsers();
    const user = users.find((item) => item.email.toLowerCase() === String(email).trim().toLowerCase() && item.password === password);

    if (!user) {
      return { success: false, message: 'E-mail ou senha inválidos.' };
    }

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    setCurrentUser(safeUser);
    return { success: true, user: safeUser };
  }

  // Cadastra um novo usuário e já inicia a sessão.
  function register(name, email, password) {
    const users = getUsers();
    const alreadyExists = users.some((item) => item.email.toLowerCase() === String(email).trim().toLowerCase());

    if (alreadyExists) {
      return { success: false, message: 'Este e-mail já está cadastrado.' };
    }

    const newUser = {
      id: Date.now(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      password
    };

    users.push(newUser);
    saveUsers(users);
    setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });

    return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } };
  }

  // Ativa a assinatura para o plano selecionado.
  function activateSubscription(plan) {
    setSubscription({
      active: true,
      plan,
      activatedAt: new Date().toISOString()
    });
    clearPendingPlan();
    return true;
  }

  // Redireciona o usuário para a página de pagamento ou login conforme a situação.
  function handleSubscribeClick(plan) {
    setPendingPlan(plan);

    if (!isLoggedIn()) {
      window.location.href = `login.html?next=pagamento.html`;
      return;
    }

    window.location.href = `pagamento.html?plan=${encodeURIComponent(plan)}`;
  }

  // Gera uma chave específica para o perfil com base no id do usuário atual.
  function getProfileStorageKey() {
    const currentUser = getCurrentUser();
    return currentUser ? `${PROFILE_KEY}_${currentUser.id}` : PROFILE_KEY;
  }

  // Busca os dados do perfil salvos para o usuário autenticado.
  function getProfile() {
    try {
      return JSON.parse(localStorage.getItem(getProfileStorageKey())) || {};
    } catch (error) {
      return {};
    }
  }

  // Salva os dados do perfil do usuário atual no armazenamento local.
  function saveProfile(profileData) {
    const currentUser = getCurrentUser();
    const nextProfile = {
      ...getProfile(),
      ...profileData,
      email: currentUser?.email || profileData.email || ''
    };

    localStorage.setItem(getProfileStorageKey(), JSON.stringify(nextProfile));
    return nextProfile;
  }

  // Encerra a sessão e limpa a assinatura do usuário.
  function logout() {
    clearCurrentUser();
    localStorage.removeItem(SUBSCRIPTION_KEY);
    window.location.href = 'index.html';
  }

  // Expõe as funções principais para o restante do site e para outros scripts.
  window.authFlow = {
    getCurrentUser,
    isLoggedIn,
    login,
    register,
    activateSubscription,
    handleSubscribeClick,
    getPendingPlan,
    getSubscription,
    isSubscriptionActive,
    getRedirectTarget,
    logout,
    getProfile,
    saveProfile
  };

  // Inicializa os eventos das páginas após o carregamento do DOM.
  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const paymentButton = document.getElementById('payment-confirm');
    const logoutButton = document.getElementById('logout-button');
    const messageBox = document.getElementById('message-box');
    const profileForm = document.getElementById('profile-form');
    const profileMessage = document.getElementById('profile-message');

    // Trata o submit do formulário de login.
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email')?.value || '';
        const password = document.getElementById('password')?.value || '';
        const result = login(email, password);

        if (result.success) {
          window.location.href = getRedirectTarget('pagamento.html');
        } else if (messageBox) {
          messageBox.textContent = result.message;
          messageBox.className = 'mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700';
        }
      });
    }

    // Trata o submit do formulário de cadastro.
    if (registerForm) {
      registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const password = document.getElementById('password')?.value || '';
        const confirmation = document.getElementById('password-confirmation')?.value || '';

        if (password !== confirmation) {
          if (messageBox) {
            messageBox.textContent = 'As senhas não coincidem.';
            messageBox.className = 'mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700';
          }
          return;
        }

        const result = register(name, email, password);

        if (result.success) {
          window.location.href = getRedirectTarget('pagamento.html');
        } else if (messageBox) {
          messageBox.textContent = result.message;
          messageBox.className = 'mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700';
        }
      });
    }

    // Ativa a assinatura ao clicar no botão de confirmação do pagamento.
    if (paymentButton) {
      paymentButton.addEventListener('click', function () {
        const selectedPlan = document.getElementById('selected-plan')?.textContent || getPendingPlan();
        activateSubscription(selectedPlan);
        window.location.href = 'exercicios.html?status=active';
      });
    }

    // Chama a função de logout ao clicar no botão correspondente.
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        logout();
      });
    }

    // Preenche os dados de nome e e-mail do usuário na interface, quando disponíveis.
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const currentUser = getCurrentUser();

    if (userName && currentUser) {
      userName.textContent = currentUser.name;
    }

    if (userEmail && currentUser) {
      userEmail.textContent = currentUser.email;
    }

    // Atualiza o estado de acesso para mostrar se a assinatura está liberada.
    const accessState = document.getElementById('access-state');
    if (accessState) {
      accessState.textContent = isSubscriptionActive() ? 'Acesso liberado' : 'Aguardando pagamento';
    }

    // Mostra o plano selecionado na página de pagamento e permite trocar a opção.
    const initialPlan = getSelectedPlanFromUrl();
    updatePlanSelection(initialPlan);

    document.querySelectorAll('[data-plan-option]').forEach((button) => {
      button.addEventListener('click', function () {
        updatePlanSelection(this.getAttribute('data-plan-option'));
      });
    });

    // Redireciona para o login caso o usuário tente entrar na página de pagamento sem sessão.
    if (!isLoggedIn() && window.location.pathname.includes('pagamento.html')) {
      window.location.href = `login.html?next=pagamento.html`;
    }

    // Redireciona para a página de login se o usuário tentar abrir o perfil sem estar autenticado.
    if (window.location.pathname.includes('perfil.html') && !isLoggedIn()) {
      window.location.href = 'login.html?next=perfil.html';
      return;
    }

    // Preenche e controla o formulário de perfil quando a página for a de perfil.
    if (window.location.pathname.includes('perfil.html')) {
      const photoInput = document.getElementById('profile-photo');
      const photoPreview = document.getElementById('profile-photo-preview');
      const summaryPhoto = document.getElementById('profile-summary-photo');
      const profileEmail = document.getElementById('profile-email');
      const profileAge = document.getElementById('profile-age');
      const profileWeight = document.getElementById('profile-weight');
      const profileHeight = document.getElementById('profile-height');
      const summaryName = document.getElementById('profile-summary-name');
      const summaryEmail = document.getElementById('profile-summary-email');
      const summaryAge = document.getElementById('profile-summary-age');
      const summaryWeight = document.getElementById('profile-summary-weight');
      const summaryHeight = document.getElementById('profile-summary-height');
      const profileForm = document.getElementById('profile-form');
      const profileMessage = document.getElementById('profile-message');

      const currentProfileUser = getCurrentUser();
      const profile = getProfile();

      if (currentProfileUser) {
        if (profileEmail) profileEmail.value = currentProfileUser.email;
        if (summaryName) summaryName.textContent = currentProfileUser.name;
        if (summaryEmail) summaryEmail.textContent = currentProfileUser.email;
      }

      if (profile && Object.keys(profile).length) {
        if (profileAge) profileAge.value = profile.age || '';
        if (profileWeight) profileWeight.value = profile.weight || '';
        if (profileHeight) profileHeight.value = profile.height || '';
        if (summaryAge) summaryAge.textContent = profile.age ? `${profile.age} anos` : '—';
        if (summaryWeight) summaryWeight.textContent = profile.weight ? `${profile.weight} kg` : '—';
        if (summaryHeight) summaryHeight.textContent = profile.height ? `${profile.height} cm` : '—';
        if (profile.photo && photoPreview) photoPreview.src = profile.photo;
        if (profile.photo && summaryPhoto) summaryPhoto.src = profile.photo;
      }

      if (photoInput) {
        photoInput.addEventListener('change', function (event) {
          const file = event.target.files && event.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = function () {
            const imageData = reader.result;
            if (photoPreview) photoPreview.src = imageData;
            if (summaryPhoto) summaryPhoto.src = imageData;
          };
          reader.readAsDataURL(file);
        });
      }

      if (profileForm) {
        profileForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const photo = photoPreview?.src || '';
          const age = document.getElementById('profile-age')?.value || '';
          const weight = document.getElementById('profile-weight')?.value || '';
          const height = document.getElementById('profile-height')?.value || '';

          const savedProfile = saveProfile({ photo, age, weight, height });

          if (profileMessage) {
            profileMessage.textContent = 'Perfil atualizado com sucesso!';
            profileMessage.className = 'rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700';
          }

          if (summaryAge) summaryAge.textContent = savedProfile.age ? `${savedProfile.age} anos` : '—';
          if (summaryWeight) summaryWeight.textContent = savedProfile.weight ? `${savedProfile.weight} kg` : '—';
          if (summaryHeight) summaryHeight.textContent = savedProfile.height ? `${savedProfile.height} cm` : '—';
        });
      }
    }

    if (window.location.pathname.includes('exercicios.html') && !isSubscriptionActive()) {
      window.location.href = 'pagamento.html';
    }
  });
})();
