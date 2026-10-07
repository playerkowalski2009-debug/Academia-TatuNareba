// ========================================
// JAVASCRIPT - Biblioteca TATU NAREBA
// ========================================

// Abre ou fecha o menu mobile quando o usuário clica no botão de hambúrguer.
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
    }
}

// Aplica o tema claro ou escuro no documento e atualiza o ícone do botão.
function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);

    const toggleButton = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-toggle-icon');
    const toggleText = document.getElementById('theme-toggle-text');

    if (toggleButton && toggleIcon && toggleText) {
        toggleButton.setAttribute('aria-pressed', String(isDark));
        toggleIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        toggleText.textContent = isDark ? 'Modo claro' : 'Modo escuro';
    }

    // Salva a escolha do tema no navegador para persistir entre visitas.
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Alterna entre o tema escuro e claro ao clicar no botão de tema.
function toggleTheme() {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
}

// Inicializa os eventos da página quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', function() {
    // Fecha o menu mobile quando o usuário clica em um link interno.
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('show');
            }
        });
    });

    // Fecha o menu mobile ao clicar fora dele.
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburger = document.querySelector('.md\\:hidden');

        if (mobileMenu && mobileMenu.classList.contains('show')) {
            if (!mobileMenu.contains(event.target) && hamburger && !hamburger.contains(event.target)) {
                mobileMenu.classList.remove('show');
            }
        }
    });

    // Liga o botão de tema à função de alternância.
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Recupera o tema salvo ou usa a preferência do sistema.
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

    // Faz o scroll suave para links âncora da página.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const offset = 80; // Altura da navbar para compensar o scroll.
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - bodyRect - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Simula o envio de um formulário para demonstração e feedback visual ao usuário.
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Enviando...';
        submitBtn.disabled = true;

        // Simula um envio assíncrono para mostrar uma resposta visual.
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }
}