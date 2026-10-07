// Lista de exercícios disponíveis na biblioteca, com dados para exibição no catálogo e na página de detalhes.
const exercises = [
  {
  id: 'elevacao-lateral',
  name: 'Elevação lateral',
  bodyPart: 'Superior',
  category: 'Força',
  image: '../exercicios_img/elevacao-lateral.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IwWvZ0rlNXs?si=H_-e4GqDS7UBfGS5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Fortalece os ombros e melhora a estabilidade da articulação.',
  description: 'Excelente exercício para desenvolver os músculos dos ombros com controle do movimento.',
  benefits: ['Fortalece ombros', 'Melhora estabilidade', 'Desenvolve força'],
  steps: [
    'Segure um halter em cada mão.',
    'Eleve os braços lateralmente até a altura dos ombros.',
    'Retorne lentamente à posição inicial.'
  ]
},
{
  id: 'afundo',
  name: 'Afundo',
  bodyPart: 'Inferior',
  category: 'Força',
  image: '../exercicios_img/afundo.webp',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6Zz_RG0EHFE?si=cOH4K3WaZ0J6LScn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Fortalece pernas, glúteos e melhora o equilíbrio.',
  description: 'Movimento funcional que trabalha força e coordenação dos membros inferiores.',
  benefits: ['Fortalece pernas', 'Ativa glúteos', 'Melhora equilíbrio'],
  steps: [
    'Dê um passo à frente.',
    'Flexione os dois joelhos até aproximadamente 90 graus.',
    'Retorne à posição inicial e repita.'
  ]
},
{
  id: 'ponte-gluteo',
  name: 'Ponte de glúteo',
  bodyPart: 'Inferior',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR30Ym12xXKwKyoFJzVdGBjqLzZIHW--ANsaOx6bTbn9Cvh2nnWO16X8&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OUgsJ8-Vi0E?si=dlR7pi3hICxlrmop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Fortalece glúteos e lombar de forma segura.',
  description: 'Muito utilizado para melhorar estabilidade do quadril e fortalecer a cadeia posterior.',
  benefits: ['Fortalece glúteos', 'Protege lombar', 'Melhora estabilidade'],
  steps: [
    'Deite de costas com os joelhos flexionados.',
    'Eleve o quadril contraindo os glúteos.',
    'Desça lentamente.'
  ]
},
{
  id: 'bird-dog',
  name: 'Bird Dog',
  bodyPart: 'Core',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDUfwiwWfqBqpuXsTX4iFDZHKWnSekJqRdA1uwTAyqr4T10IUt-8Yc0KE&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdAHe9_HeEw?si=DdI5FAG3_rk8L3GW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Melhora equilíbrio, coordenação e estabilidade do core.',
  description: 'Exercício muito utilizado para fortalecer abdômen e lombar.',
  benefits: ['Fortalece core', 'Melhora equilíbrio', 'Protege lombar'],
  steps: [
    'Fique na posição de quatro apoios.',
    'Estenda um braço e a perna oposta.',
    'Retorne lentamente e alterne os lados.'
  ]
},
{
  id: 'superman',
  name: 'Superman',
  bodyPart: 'Superior',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEc60RhuBtwOzwsR80z2Gz0BTcWxbeDCrg9IhM4PA6S0wkdBu7tjtCyfQc&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J9zXkxUAfUA?si=8HzT3hdccEPukO7W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Fortalece a musculatura das costas.',
  description: 'Excelente para melhorar a resistência da região lombar.',
  benefits: ['Fortalece lombar', 'Melhora postura', 'Aumenta resistência'],
  steps: [
    'Deite de barriga para baixo.',
    'Eleve braços e pernas simultaneamente.',
    'Segure por alguns segundos e retorne.'
  ]
},
{
  id: 'polichinelo',
  name: 'Polichinelo',
  bodyPart: 'Corpo inteiro',
  category: 'Cardio',
  image: 'https://image.tuasaude.com/media/article/dj/ro/polichinelo_62842.jpg',
  video: 'https://www.youtube.com/embed/YJbkVbNNops?si=t4f3MMwMJJl7SVtC',
  shortDescription: 'Excelente exercício cardiovascular para aquecimento.',
  description: 'Ativa todo o corpo e aumenta rapidamente a frequência cardíaca.',
  benefits: ['Melhora condicionamento', 'Aquece o corpo', 'Queima calorias'],
  steps: [
    'Comece com os pés unidos.',
    'Salte abrindo pernas e braços.',
    'Retorne à posição inicial continuamente.'
  ]
},
{
  id: 'elevacao-joelhos',
  name: 'Elevação de joelhos',
  bodyPart: 'Core',
  category: 'Cardio',
  image: 'https://media-manager.noticiasaominuto.com/960/naom_6605b7e1a49b5.webp?crop_params=eyJwb3J0cmFpdCI6eyJjcm9wV2lkdGgiOjgzMSwiY3JvcEhlaWdodCI6MTQ3NywiY3JvcFgiOjQ4MiwiY3JvcFkiOjEzNn19',
  video: 'https://youtube.com/shorts/vXv9daV_pKA?si=JFOExHLfB5rQSsc9',
  shortDescription: 'Combina fortalecimento abdominal com condicionamento.',
  description: 'Excelente para ativar o core e elevar a frequência cardíaca.',
  benefits: ['Fortalece abdômen', 'Melhora coordenação', 'Aumenta resistência'],
  steps: [
    'Fique em pé.',
    'Eleve alternadamente os joelhos até a altura da cintura.',
    'Mantenha o ritmo constante.'
  ]
},
{
  id: 'alongamento-posterior',
  name: 'Alongamento posterior de pernas',
  bodyPart: 'Inferior',
  category: 'Mobilidade',
  image: 'https://f.i.uol.com.br/fotografia/2019/07/19/15635623945d32119a69d50_1563562394_3x2_rt.jpg',
  video: 'https://www.youtube.com/embed/vhLbp8ibmEE',
  shortDescription: 'Melhora a flexibilidade da parte posterior das pernas.',
  description: 'Ajuda a reduzir a rigidez muscular e aumentar a amplitude de movimento.',
  benefits: ['Aumenta flexibilidade', 'Reduz tensão', 'Melhora mobilidade'],
  steps: [
    'Estenda uma perna à frente.',
    'Incline o tronco mantendo a coluna reta.',
    'Segure por alguns segundos.'
  ]
},
{
  id: 'rotacao-tronco',
  name: 'Rotação de tronco',
  bodyPart: 'Superior',
  category: 'Mobilidade',
  image: 'https://thumbs.dreamstime.com/b/povos-que-exercitam-rota%C3%A7%C3%A3o-do-torso-no-gym-mulher-com-os-na-treinamento-fundo-usando-o-equipamento-152513113.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AURt5-N1w10?si=f8O6whrt6gzqZ4nj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Melhora a mobilidade da coluna torácica.',
  description: 'Ideal para aliviar rigidez causada por longos períodos sentado.',
  benefits: ['Melhora mobilidade', 'Alivia tensão', 'Favorece postura'],
  steps: [
    'Fique em pé com os braços cruzados.',
    'Gire lentamente o tronco para um lado.',
    'Retorne ao centro e repita para o outro lado.'
  ]
},
{
  id: 'prancha',
  name: 'Prancha',
  bodyPart: 'Abdômen',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vIWMaqm7JCQpsMGFV1N06p6yiRtVs9n5HBRHEcoWpw&s=10://images.unsplash.com/photo-2OgqFKHwF5Q?auto=format&fit=crop&w=900&q=80',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qNRqGqESAWU?si=PjUmg_-_6CpQo_jp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Um dos melhores exercícios para fortalecer todo o core e a estabilidade do abdômen.',
  description: 'Exercício isométrico clássico que trabalha os músculos abdominais, oblíquos e a região lombar de forma segura e eficiente.',
  benefits: [
    'Fortalece todo o abdômen e core',
    'Melhora a estabilidade e o equilíbrio',
    'Aumenta a resistência muscular',
    'Contribui para melhor postura'
  ],
  steps: [
    'Apoie os antebraços no chão com os cotovelos alinhados aos ombros e estenda as pernas para trás, apoiando nas pontas dos pés.',
    'Mantenha o corpo completamente reto como uma prancha, contraindo o abdômen e os glúteos.',
    'Segure a posição pelo tempo determinado (comece com 20-30 segundos), respirando de forma controlada sem deixar o quadril subir ou cair.'
  ]
},
{
  id: 'crunch-abdominal',
  name: 'Crunch Abdominal',
  bodyPart: 'Abdômen',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11iApbpwsz5JGSwpKSlYuc0pOLqO_ZIqynIdiMfSmFA&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fR_KzGyKW3w?si=IwtI4bVmUEB_LEs6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Clássico exercício para fortalecer a parte superior do abdômen.',
  description: 'Movimento controlado que foca nos músculos retos do abdômen. Ideal para iniciantes e intermediários.',
  benefits: [
    'Fortalece o abdômen superior',
    'Melhora a definição e força do core',
    'Fácil de fazer em casa'
  ],
  steps: [
    'Deite-se de costas com os joelhos dobrados e pés apoiados no chão.',
    'Coloque as mãos levemente atrás da cabeça sem puxar o pescoço.',
    'Eleve os ombros do chão contraindo o abdômen e desça de forma controlada.'
  ]
},
{
  id: 'prancha-lateral',
  name: 'Prancha Lateral',
  bodyPart: 'Abdômen',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ueWy9PzUvCUH7lsBGttD581GYuai0-WQPxu_v4hYNA&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9fcbFlPaFGg?si=YCG-bSVjgg8j2Sn-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente para trabalhar os oblíquos e a estabilidade lateral do core.',
  description: 'Exercício isométrico que fortalece os músculos laterais do abdômen e melhora o equilíbrio.',
  benefits: [
    'Fortalece os oblíquos (laterais do abdômen)',
    'Melhora a estabilidade e equilíbrio',
    'Ajuda na prevenção de lesões na lombar'
  ],
  steps: [
    'Deite-se de lado e apoie o antebraço no chão, com o cotovelo embaixo do ombro.',
    'Eleve o quadril mantendo o corpo reto em linha (apoie no antebraço e no lado do pé).',
    'Segure a posição pelo tempo desejado e troque de lado.'
  ]
},
{
  id: 'abdominal-infra',
  name: 'Abdominal Infra',
  bodyPart: 'Abdômen',
  category: 'Força',
  image: 'https://saude.abril.com.br/wp-content/uploads/2025/07/abdominal-infra.jpg?crop=1&resize=1212,909',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lsfYFbfE45o?si=pI-tSMFlJpdPifLO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Focado na parte inferior do abdômen (lower abs).',
  description: 'Movimento que ativa especificamente a região inferior do abdômen de forma segura e eficaz.',
  benefits: [
    'Trabalha a parte inferior do abdômen',
    'Melhora o controle e força do core',
    'Menos estresse na coluna que o crunch tradicional'
  ],
  steps: [
    'Deite-se de costas com os braços ao lado do corpo e pernas flexionadas.',
    'Eleve os joelhos em direção ao peito, levantando o quadril usando a força do abdômen.',
    'Desça devagar e controlado, sem deixar os pés tocarem completamente o chão.'
  ]
},
{
  id: 'agachamento',
  name: 'Agachamento',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/exercicio-de-agachamento-livre.jpg?w=1024-0',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ufh39C5cMfU?si=example" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício fundamental para desenvolver força e massa muscular nas pernas e glúteos.',
  description: 'O agachamento é um movimento composto que trabalha vários músculos ao mesmo tempo e é essencial para qualquer programa de treino de força.',
  benefits: [
    'Fortalece quadríceps, glúteos e posteriores de coxa',
    'Melhora a força funcional e o equilíbrio',
    'Aumenta a potência e a hipertrofia muscular'
  ],
  steps: [
    'Fique em pé com os pés afastados na largura dos ombros e as pontas dos pés levemente viradas para fora.',
    'Mantenha o peito erguido, ombros para trás e core contraído.',
    'Inicie o movimento flexionando os quadris e joelhos, empurrando o quadril para trás como se fosse sentar em uma cadeira invisível.',
    'Desça até as coxas ficarem paralelas ao chão (ou o mais profundo que conseguir com boa postura).',
    'Empurre o chão com os calcanhares para retornar à posição inicial.'
  ]
},
{
  id: 'supino-reto',
  name: 'Supino Reto',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTgNpKOlk-fnjpnmomIMK-2uTBVCVAeRk-xpiaij4nbpeFShz0spzL_Uc&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fG_03xSzT2s?si=PzjHGMLJPXaWqwuF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Clássico exercício para desenvolver o peitoral, ombros e tríceps.',
  description: 'O supino reto é um dos exercícios mais eficazes para ganho de força e volume na parte superior do corpo.',
  benefits: [
    'Fortalece peitoral maior, deltoides e tríceps',
    'Melhora a força de empurrão',
    'Essencial para hipertrofia do peito'
  ],
  steps: [
    'Deite-se no banco com os pés firmes no chão.',
    'Segure a barra com as mãos um pouco mais largas que a largura dos ombros.',
    'Retire a barra do suporte e posicione-a acima do peito com os braços estendidos.',
    'Desça a barra controladamente até tocar levemente o peito.',
    'Empurre a barra para cima até estender completamente os braços.'
  ]
},
{
  id: 'rosca-biceps',
  name: 'Rosca Bíceps',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEJkSFsLyc9hedSvExU7X_cb6G8GQedx1rv6-ERBFqD9-FaCOjd0Zh5k&s=10',
  video: 'https://youtube.com/shorts/0T7V5o9ypUw?si=CmmH9vUXBiZ_rLLu',
  shortDescription: 'Exercício clássico para hipertrofia e definição dos bíceps.',
  description: 'Movimento de isolamento que foca na flexão do cotovelo, ideal para aumentar o volume dos braços.',
  benefits: [
    'Fortalece e define os bíceps',
    'Melhora a força de puxada',
    'Fácil de executar e controlar a carga'
  ],
  steps: [
    'Fique em pé com os pés na largura dos ombros, segurando um halter em cada mão.',
    'Mantenha os cotovelos fixos ao lado do corpo.',
    'Flexione os cotovelos elevando os halteres até a altura dos ombros.',
    'Desça os halteres de forma controlada até os braços ficarem estendidos.'
  ]
},
{
  id: 'triceps-pulley',
  name: 'Tríceps na Polia',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://enciclopediafitness.com.br/wp-content/uploads/2025/12/Triceps-na-Polia-Ajuste-da-Altura-e-Inclinacao-que-Fara-Toda-Diferenca.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2-LAMcpzODU?si=example" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente exercício de isolamento para os tríceps.',
  description: 'Movimento de empurrão na polia que trabalha os três cabeças do tríceps de forma controlada.',
  benefits: [
    'Fortalece todos os feixes do tríceps',
    'Melhora a definição da parte posterior do braço',
    'Baixo impacto nas articulações'
  ],
  steps: [
    'Fique em pé de frente para a polia alta, segurando a barra ou corda.',
    'Mantenha os cotovelos fixos ao lado do corpo.',
    'Empurre a barra/corda para baixo até os braços ficarem completamente estendidos.',
    'Retorne lentamente à posição inicial controlando o movimento.'
  ]
},
{
  id: 'puxada-alta',
  name: 'Puxada Alta',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMTk_X9rF_8Pg2dvSpYBCTBKV8h7VX3byWLYfgLCXwAMQGNkrp4SByuc&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A7x84SDf77I?si=example" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Ótimo exercício para desenvolver as costas e a largura do dorso.',
  description: 'Movimento de puxada vertical que ativa principalmente o grande dorsal e os músculos das costas.',
  benefits: [
    'Fortalece o grande dorsal e as costas',
    'Melhora a postura e a força de puxada',
    'Ajuda a criar o formato em "V"'
  ],
  steps: [
    'Sente-se na máquina e ajuste o apoio das coxas.',
    'Segure a barra com pegada aberta (pronada).',
    'Puxe a barra até a parte superior do peito, contraindo as escápulas.',
    'Retorne lentamente à posição inicial estendendo os braços.'
  ]
},
{
  id: 'stiff',
  name: 'Stiff',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WgNTzjUABs7H0_c3onUciU35PxawpMNB21oc14ti0ZSHGrMOyEYR31Fl&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/u1E3_u2gJYE?si=L34IY8FO2VgCPBq_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente para fortalecer a cadeia posterior (glúteos e posteriores de coxa).',
  description: 'Movimento de dobradiça de quadril que trabalha intensamente os músculos posteriores das pernas e glúteos.',
  benefits: [
    'Fortalece glúteos e posteriores de coxa',
    'Melhora a força da cadeia posterior',
    'Ajuda na prevenção de lesões na lombar'
  ],
  steps: [
    'Fique em pé com os pés na largura dos ombros, segurando a barra ou halteres à frente das coxas.',
    'Mantenha as pernas quase estendidas (leve flexão nos joelhos).',
    'Incline o tronco para frente mantendo a coluna reta, empurrando o quadril para trás.',
    'Desça até sentir um alongamento nos posteriores.',
    'Retorne à posição inicial contraindo os glúteos e posteriores.'
  ]
},
{
  id: 'flexao-braco',
  name: 'Flexão de Braço',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0M2A-Ya032HAriT7HU0IZ0Uo17qCnkz1g2t64EbgawfK3R5nRpMp7z4&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_wDZhHvewGo?si=example" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício clássico de corpo inteiro que fortalece peito, ombros e tríceps.',
  description: 'A flexão de braço é um dos exercícios mais completos e acessíveis, ideal para ganhar força e resistência na parte superior do corpo.',
  benefits: [
    'Fortalece peitoral, ombros e tríceps',
    'Melhora força funcional e estabilidade do core',
    'Pode ser feito em qualquer lugar'
  ],
  steps: [
    'Apoie as mãos no chão um pouco mais largas que a largura dos ombros.',
    'Estenda as pernas para trás, mantendo o corpo reto como uma prancha.',
    'Desça o corpo flexionando os cotovelos até o peito quase tocar o chão.',
    'Empurre o chão com as mãos e volte à posição inicial.'
  ]
},
{
  id: 'desenvolvimento-ombros',
  name: 'Desenvolvimento de Ombros',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://blog.ciaathletica.com.br/wp-content/uploads/2023/10/Cia-Athletica-Nacional-Desenvolvimento-com-halteres-Autores-Grupo-S2-Marketing-Freepik-scaled.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q8qDFKSQ7xE?si=esRHMbu-Q9yAKb7G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente exercício para desenvolver força e volume nos ombros.',
  description: 'Também conhecido como Shoulder Press, trabalha principalmente os deltoides e tríceps.',
  benefits: [
    'Fortalece os ombros (deltoides)',
    'Melhora a força de empurrão para cima',
    'Ajuda na postura e estabilidade'
  ],
  steps: [
    'Sente-se ou fique em pé com os pés na largura dos ombros.',
    'Segure os halteres ou barra na altura dos ombros, palmas para frente.',
    'Empurre o peso para cima até os braços ficarem estendidos.',
    'Desça controladamente de volta à altura dos ombros.'
  ]
},
{
  id: 'mesa-flexora',
  name: 'Mesa Flexora',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://sportlife.com.br/wp-content/uploads/2023/09/mesa-flexora.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2-ULaRrQa7c?si=W9fxM8s8eArLeEOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isola e fortalece os músculos posteriores da coxa.',
  description: 'Exercício de isolamento na máquina que trabalha os isquiotibiais de forma segura e controlada.',
  benefits: [
    'Fortalece os posteriores de coxa',
    'Melhora o equilíbrio muscular das pernas',
    'Baixo impacto nas articulações'
  ],
  steps: [
    'Deite-se de barriga para baixo na mesa flexora.',
    'Ajuste o rolo almofadado logo acima dos calcanhares.',
    'Flexione os joelhos puxando o rolo em direção aos glúteos.',
    'Desça lentamente controlando o movimento.'
  ]
},
{
  id: 'cadeira-extensora',
  name: 'Cadeira Extensora',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2025/02/o-que-a-cadeira-extensora-trabalha.jpg?crop=1&resize=1212,909',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A1Cah1KDAlo?si=Lf-geJYDuGil05mt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isola e fortalece o quadríceps (frente da coxa).',
  description: 'Exercício de isolamento na máquina focado no quadríceps, ótimo para hipertrofia e reabilitação.',
  benefits: [
    'Fortalece o quadríceps',
    'Melhora a força de extensão do joelho',
    'Fácil de controlar a carga'
  ],
  steps: [
    'Sente-se na cadeira com as costas apoiadas e os joelhos alinhados com o eixo da máquina.',
    'Ajuste o rolo almofadado na frente dos tornozelos.',
    'Estenda os joelhos empurrando o rolo para cima.',
    'Desça lentamente controlando o movimento.'
  ]
},
{
  id: 'remada-sentada',
  name: 'Remada Sentada',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://i.ytimg.com/vi/WxkMoxuMSho/sddefault.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WxkMoxuMSho?si=hdwXwY0YZy4Z6t88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Ótimo exercício para engrossar as costas e melhorar a postura.',
  description: 'Movimento de puxada horizontal que trabalha o grande dorsal, romboides e trapézio.',
  benefits: [
    'Fortalece toda a musculatura das costas',
    'Melhora a postura e a força de puxada',
    'Ajuda a prevenir dores na coluna'
  ],
  steps: [
    'Sente-se na máquina com os pés apoiados e as costas retas.',
    'Segure a barra ou alça com as mãos na largura dos ombros.',
    'Puxe a barra em direção ao abdômen, contraindo as escápulas.',
    'Retorne lentamente estendendo os braços.'
  ]
},
{
  id: 'panturrilha-em-pe',
  name: 'Panturrilha em Pé',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://cdn.fisiculturismo.com.br/monthly_2021_01/panturrilha-em-pe-na-maquina-final.jpg.f4593e71d2b363fe9996773a417b8aec.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cklp_Xh5V8M?si=olwTOa6C7jQGr_9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Fortalece e define as panturrilhas (gastrocnêmio e sóleo).',
  description: 'Exercício simples e eficaz para trabalhar a parte inferior da perna.',
  benefits: [
    'Fortalece e define as panturrilhas',
    'Melhora a força de impulsão',
    'Fácil de executar em qualquer lugar'
  ],
  steps: [
    'Fique em pé com os pés na largura dos ombros, segurando halteres ou na máquina.',
    'Suba nas pontas dos pés o máximo que conseguir.',
    'Segure 1 segundo no topo contraindo as panturrilhas.',
    'Desça lentamente até os calcanhares quase tocarem o chão.'
  ]
},
{
  id: 'russian-twist',
  name: 'Russian Twist',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKI7hDlrRwKfszayBkeKKVCMie1vtxjs9FAwWp9YqSnD4ZaNffXET4xk&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/99T1EfpMwPA?si=gEQfb7lTitqjyF6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente exercício para fortalecer os oblíquos e o core rotacional.',
  description: 'Movimento de rotação que trabalha os músculos laterais do abdômen e melhora a estabilidade do tronco.',
  benefits: [
    'Fortalece os oblíquos (laterais do abdômen)',
    'Melhora a rotação e estabilidade do core',
    'Ótimo para definição da cintura'
  ],
  steps: [
    'Sente-se no chão com os joelhos flexionados e pés apoiados.',
    'Incline o tronco para trás cerca de 45 graus, mantendo as costas retas.',
    'Junte as mãos ou segure um peso e gire o tronco para um lado.',
    'Retorne ao centro e gire para o outro lado de forma controlada.'
  ]
},
{
  id: 'burpee',
  name: 'Burpee',
  bodyPart: 'Corpo inteiro',
  category: 'Cardio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57l3uYVqE30DTj7UG3NyaUXwgCcSOASug51xW_NEWrTHE9PCJiBwLB4w&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y_st2jhA9uM?si=9M-0aSnSkQxzzitN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício completo de corpo inteiro que queima muitas calorias.',
  description: 'Movimento explosivo que combina força, cardio e coordenação em um só exercício.',
  benefits: [
    'Queima muitas calorias em pouco tempo',
    'Trabalha todo o corpo (força + cardio)',
    'Melhora condicionamento físico e resistência'
  ],
  steps: [
    'Comece em pé, depois agache e coloque as mãos no chão.',
    'Salte os pés para trás ficando em posição de prancha.',
    'Faça uma flexão (ou toque o peito no chão).',
    'Salte os pés de volta para as mãos e pule para cima com os braços estendidos.'
  ]
},
{
  id: 'mountain-climbers',
  name: 'Mountain Climbers',
  bodyPart: 'Core',
  category: 'Cardio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMTtDLo8XtuL9tV96LHgMYa12ektKGHyE-Gk1xead0nUw3585JEna6UQ&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8wuUiihTbdw?si=ctZCIlkWVYjo2GKt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício dinâmico que trabalha core, cardio e coordenação.',
  description: 'Movimento rápido que simula corrida em posição de prancha, ótimo para queimar gordura e fortalecer o abdômen.',
  benefits: [
    'Fortalece o core e os ombros',
    'Aumenta a frequência cardíaca rapidamente',
    'Melhora agilidade e coordenação'
  ],
  steps: [
    'Fique na posição de prancha alta com os braços estendidos.',
    'Mantenha o core contraído e o corpo reto.',
    'Alternadamente, traga um joelho em direção ao peito em movimento rápido.',
    'Continue alternando os joelhos como se estivesse correndo no lugar.'
  ]
},
{
  id: 'triceps-testa',
  name: 'Tríceps Testa',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL89ab1u70J8Oq_Ko0D-mP_icqPZaZ7ARJ3kXKmxgep8xGXyfZbBJHrpPX&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C3Yd3G7vf_I?si=8C3Z4sOreP8t51HL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isola e fortalece os tríceps de forma eficiente.',
  description: 'Exercício clássico de isolamento que foca diretamente nos três feixes do tríceps.',
  benefits: [
    'Fortalece e define os tríceps',
    'Melhora a força de empurrão',
    'Baixo impacto nas articulações do ombro'
  ],
  steps: [
    'Deite-se em um banco com os pés apoiados no chão.',
    'Segure a barra ou halteres com as mãos na largura dos ombros.',
    'Estenda os braços para cima e abaixe o peso em direção à testa flexionando os cotovelos.',
    'Empurre o peso de volta à posição inicial estendendo os braços.'
  ]
},
{
  id: 'alongamento-quadril',
  name: 'Alongamento de Quadril',
  bodyPart: 'Inferior',
  category: 'Mobilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TIkU_9984TiMWnpKnxlZYnVHwYcGM5egsrHzX6d1y0z49bhebvBD1-KI&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LkEC8QO0ITk?si=E566dw7BcNTqoZEl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Melhora a mobilidade do quadril e reduz tensão na região lombar.',
  description: 'Alongamento essencial para quem fica muito tempo sentado ou treina força.',
  benefits: [
    'Aumenta a amplitude de movimento do quadril',
    'Reduz tensão na lombar e quadril',
    'Melhora a postura e previne lesões'
  ],
  steps: [
    'Fique em posição de afundo (um joelho no chão e o outro pé à frente).',
    'Mantenha o tronco ereto e empurre o quadril para frente.',
    'Sinta o alongamento na frente do quadril da perna de trás.',
    'Segure por 20-30 segundos e troque de lado.'
  ]
},
{
  id: 'abdominal-bicicleta',
  name: 'Abdominal Bicicleta',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://vitat.com.br/wp-content/uploads/2020/07/depositphotos_154034516_xl-2015.jpg',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente exercício focado nos músculos oblíquos.',
  description: 'Trabalha a região lateral do abdômen através de uma rotação dinâmica do tronco aliada ao movimento das pernas.',
  benefits: ['Fortalece os oblíquos', 'Melhora a coordenação motora', 'Alta ativação do reto abdominal'],
  steps: [
    'Deite-se de costas e posicione as mãos levemente apoiadas nas orelhas.',
    'Tire os ombros e os pés do chão flexionando os joelhos a 90 graus.',
    'Leve o cotovelo direito em direção ao joelho esquerdo enquanto estica a perna direita, alternando os lados continuamente.'
  ]
},
{
  id: 'perdigueiro',
  name: 'Perdigueiro (Bird Dog)',
  bodyPart: 'Core',
  category: 'Estabilidade',
  image: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2017/01/perdigueiro.jpg?quality=95&strip=info',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Estabilização cruzada essencial para a saúde da coluna.',
  description: 'Exercício de controle neuromuscular que trabalha a estabilidade estática do abdômen e a cadeia posterior de forma simultânea.',
  benefits: ['Fortalece o core profundo e a lombar', 'Melhora o equilíbrio e coordenação cruzada', 'Reduz dores e protege as articulações da coluna'],
  steps: [
    'Fique em posição de quatro apoios no colchonete (mãos sob ombros e joelhos sob quadris).',
    'Estenda o braço direito para a frente e a perna esquerda para trás ao mesmo tempo, mantendo o alinhamento.',
    'Sustente brevemente, retorne à posição inicial e alterne os lados sem oscilar o quadril.'
  ]
},
{
  id: 'pallof-press',
  name: 'Pallof Press na Polia',
  bodyPart: 'Core',
  category: 'Estabilidade',
  image: 'https://s3.eu-west-2.amazonaws.com/cdn.rb100.fitness/wp-content/uploads/2025/12/03154710/athlete-performing-Resistance-Band-Pallof-Press-Hold-1024x1024.webp',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício de antirotação altamente funcional para estabilidade profunda.',
  description: 'Usa a resistência lateral de um cabo ou elástico para desafiar os músculos abdominais a resistirem à rotação forçada.',
  benefits: ['Treina a força de antirotação do tronco', 'Protege a lombar contra forças cisalhantes', 'Alta ativação oblíqua'],
  steps: [
    'Fique em pé, posicionado de lado para a polia alta/média.',
    'Segure o puxador com as duas mãos junto ao centro do peito.',
    'Estenda os braços à frente sem deixar a carga puxar ou girar o seu tronco, segurando a posição estendida por 2 segundos antes de retornar.'
  ]
},
{
  id: 'dead-bug',
  name: 'Dead Bug (Inseto Morto)',
  bodyPart: 'Core',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqeDujuPHkRmZn59WM8c_a3JNrGfZNh_0Z4ZkwbM1V9yCxWNSKom7-sY&s=10',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Controle de estabilidade lombar com movimento coordenado dos membros.',
  description: 'Desafia o core a manter a coluna neutra e a lombar colada ao chão enquanto braços e pernas opostos se movimentam.',
  benefits: ['Melhora a coordenação e consciência corporal', 'Isola o abdômen sem tensionar o pescoço', 'Excelente para prevenção de dores'],
  steps: [
    'Deite-se de costas com os braços apontados para o teto e joelhos flexionados a 90 graus.',
    'Pressione firmemente a lombar contra o colchonete.',
    'Estenda o braço direito para trás e a perna esquerda para a frente simultaneamente, retornando à posição inicial de forma lenta para alternar.'
  ]
},
{
  id: 'abdominal-supra-polia',
  name: 'Abdominal Supra na Polia Alta',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://enciclopediafitness.com.br/wp-content/uploads/al_opt_content/IMAGE/enciclopediafitness.com.br/wp-content/uploads/2026/02/Abdominal-na-Polia-Alta-Como-Usar-Carga-Sem-Forcar-o-Pescoco.png.bv_resized_mobile.png.bv.webp?bv_host=enciclopediafitness.com.br',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente variação com sobrecarga mecânica progressiva.',
  description: 'Executado geralmente ajoelhado utilizando o cabo, permite ajustar cargas progressivas para o desenvolvimento muscular do reto abdominal.',
  benefits: ['Permite fácil progressão de carga', 'Tensão constante gerada pelos cabos da polia', 'Isolamento efetivo da flexão do tronco'],
  steps: [
    'Ajoelhe-se de frente ou de costas para a polia alta, segurando a corda atrás ou ao lado da cabeça.',
    'Flexione a coluna puxando o peso para baixo, aproximando o peito da região pubiana.',
    'Retorne estendendo o tronco devagar e controlando a subida da placa de peso.'
  ]
},
{
  id: 'abdominal-canivete',
  name: 'Abdominal Canivete (V-Up)',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2026/05/young-woman-working-out-home.jpg?quality=95&strip=info',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Movimento pliométrico avançado que exige força integrada.',
  description: 'Combina uma flexão simultânea de tronco e quadril, exigindo coordenação e força explosiva das partes superior e inferior do abdômen.',
  benefits: ['Ação integrada de toda a parede abdominal', 'Melhora da flexibilidade dinâmica', 'Alto gasto energético'],
  steps: [
    'Deite-se de costas no colchonete com braços e pernas totalmente estendidos no chão.',
    'Em um movimento sincronizado, eleve as pernas e o tronco ao mesmo tempo.',
    'Tente tocar os pés com as mãos no ponto mais alto, formando uma posição em "V", e retorne controlando a descida.'
  ]
},
{
  id: 'hollow-body-hold',
  name: 'Hollow Body Hold (Canoa)',
  bodyPart: 'Core',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Q7xgiEgyLIMBYLxJPBVcOpit3yXB6xJiNSQv8wCUijegU7-x7iFpFdk&s=10',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício isométrico clássico herdado da ginástica olímpica.',
  description: 'Uma das posições de sustentação estática mais desafiadoras, gerando altíssima tensão no cinturão pélvico e abdominal.',
  benefits: ['Desenvolve força isométrica extrema', 'Garante excelente transferência para movimentos calistênicos', 'Melhora o controle postural sob fadiga'],
  steps: [
    'Deite-se de barriga para cima com as pernas esticadas e braços estendidos acima da cabeça.',
    'Pressione firmemente a lombar contra o chão, garantindo que não haja vácuo sob as costas.',
    'Tire as escápulas e os calcanhares (cerca de 15 cm) do chão ao mesmo tempo, segurando o formato curvado como uma canoa.'
  ]
},
{
  id: 'crucifixo-inverso-maquina',
  name: 'Crucifixo Inverso na Máquina',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://blog.ciaathletica.com.br/wp-content/uploads/2026/03/crucifixo-inverso-capa-scaled.jpg',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Focado nos deltoides posteriores e melhora postural.',
  description: 'Atinge diretamente a musculatura de trás do ombro e escápulas, crucial para compensar desequilíbrios do treino de peito.',
  benefits: ['Fortalece o deltoide posterior', 'Excelente para correção postural', 'Estabilização das escápulas'],
  steps: [
    'Sente-se de frente para a máquina com o peito bem apoiado no estofado.',
    'Segure as manoplas mantendo os braços quase totalmente estendidos na linha dos ombros.',
    'Abra os braços empurrando para trás em um arco controlado até contrair as costas e retorne devagar.'
  ]
},
{
  id: 'remada-curvada-barra',
  name: 'Remada Curvada com Barra',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://blog.ciaathletica.com.br/wp-content/uploads/2023/05/Cia-Athletica-Remada-curvada-Autores-Grupo-S2-Marketing-Freepik.jpg',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente exercício composto focado na espessura das costas.',
  description: 'Trabalha de maneira integrada os grandes dorsais, trapézios e a estabilização lombar através da puxada horizontal.',
  benefits: ['Desenvolve a espessura das costas', 'Melhora o controle postural', 'Ativação vigorosa dos bíceps'],
  steps: [
    'Incline o tronco para a frente mantendo a coluna ereta e joelhos levemente flexionados.',
    'Segure a barra com os braços esticados apontando para o chão.',
    'Puxe a barra em direção à base do abdômen, retraindo as escápulas, e retorne devagar.'
  ]
},
{
  id: 'flexao-de-braco',
  name: 'Flexão de Braço Tradicional',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4q9vupzx0v4waWxPnElKNNCI7AG8ax1kbDGqz4zkfQ&s=10',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'O melhor exercício com peso corporal para o peitoral.',
  description: 'Movimento calistênico clássico que recruta o peito, tríceps e deltoides frontais de forma integrada.',
  benefits: ['Não exige equipamentos', 'Desenvolve o controle do próprio corpo', 'Ativação sinérgica do core'],
  steps: [
    'Posicione as mãos no chão em uma largura um pouco maior que os ombros.',
    'Mantenha o corpo totalmente alinhado da cabeça aos pés em posição de prancha alta.',
    'Desça flexionando os cotovelos até o peito quase tocar o chão e empurre de volta.'
  ]
},
{
  id: 'barra-fixa-pronada',
  name: 'Barra Fixa (Pull-Up)',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V5CPQOOm5jZ-Z851lyh40CNKXL3MgYVm2Shx1iSilANltT5x4Mkr-mkN&s=10',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício padrão ouro para força e amplitude das costas.',
  description: 'Movimento em suspensão vertical altamente desafiador que recruta de forma massiva as dorsais e os braços.',
  benefits: ['Aumento extremo de força funcional', 'Alarga a linha dorsal (formato em V)', 'Fortalecimento da pegada das mãos'],
  steps: [
    'Segure na barra fixa com as palmas voltadas para a frente (pegada pronada).',
    'Puxe o corpo para cima direcionando o peito para a barra e passando o queixo.',
    'Desça controladamente até estender os braços de maneira quase completa.'
  ]
},
{
  id: 'crossover-polia-alta',
  name: 'Crossover na Polia Alta',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2024/02/19/1302445560-istock-1282118991.jpg',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isolamento mecânico focado no miolo e porção inferior do peito.',
  description: 'Excelente variação usando cabos para manter o peitoral sob máxima tensão durante toda a adução dos braços.',
  benefits: ['Tensão contínua na contração muscular', 'Excelente para bombear sangue (pump)', 'Menor estresse nos tríceps comparado ao supino'],
  steps: [
    'Posicione-se no centro do crossover com um pé à frente para estabilizar o corpo.',
    'Segure os puxadores da polia alta com os braços ligeiramente flexionados.',
    'Traga as mãos para a frente e para baixo até se encontrarem na linha da cintura, espremendo o peito.'
  ]
},
{
  id: 'remada-baixa-triangulo',
  name: 'Remada Baixa com Triângulo na Polia',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/03/Remda-sentada-triangulo.webp',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Desenvolvimento controlado para a região central das costas.',
  description: 'Executado na máquina de cabos com pegada neutra (triângulo), focando no miolo das costas e romboides.',
  benefits: ['Fácil controle do padrão de movimento', 'Altamente seguro para iniciantes', 'Excelente estímulo para os dorsais inferiores'],
  steps: [
    'Sente-se na máquina com os pés apoiados e segure o triângulo mantendo a coluna reta.',
    'Puxe o acessório em direção à altura do umbigo, projetando os cotovelos para trás.',
    'Retorne estendendo totalmente os braços, abrindo as escápulas sem curvar a coluna.'
  ]
},
{
  id: 'triceps-frances-haltere',
  name: 'Tríceps Francês Unilateral com Haltere',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2023/02/triceps-frances.jpg?crop=1&resize=1212,909',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isolamento com foco na porção longa do tríceps.',
  description: 'Trabalha o tríceps em uma posição de estiramento acima da cabeça, ideal para focar na cabeça longa do músculo.',
  benefits: ['Excelente alongamento sob carga mecânica', 'Corrige assimetrias entre os braços', 'Grande amplitude de movimento'],
  steps: [
    'Sente-se ou fique em pé, elevando o braço com o halter totalmente acima da cabeça.',
    'Flexione apenas o cotovelo, descendo o peso por trás da cabeça de forma controlada.',
    'Estenda o braço novamente empurrando o peso para o teto, mantendo o cotovelo apontado para a frente.'
  ]
},
{
  id: 'pulldown-polia-alta',
  name: 'Pulldown na Polia Alta',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://cdn.fisiculturismo.com.br/monthly_2021_08/pulldown-na-polia-alta-intermediaria.webp.390702a216daca4d775bf1b72feb03b2.webp',
  video: '<iframe width="560" height="315" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Isolamento de dorsais com foco em amplitude e alongamento.',
  description: 'Exercício monoarticular executado em pé que isola a grande dorsal através da extensão de ombros, sem a participação ativa dos bíceps.',
  benefits: ['Isolamento eficiente das costas', 'Ótimo alongamento da grande dorsal', 'Excelente ativação de core para estabilização'],
  steps: [
    'Fique em pé de frente para a polia alta, segurando a barra ou corda com os braços quase totalmente estendidos.',
    'Incline o tronco levemente para a frente e puxe o peso para baixo em um arco até chegar à linha das coxas.',
    'Retorne controlando a subida da carga de forma lenta, sentindo o alongamento lateral das costas.'
  ]
},
{
  id: 'hip-thrust',
  name: 'Hip Thrust',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkW9bnePCVTIfMinihD8SJV8-_q_vYU2eYRUOkfCnihKNbpElyBEKq8Qw&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SEdqd1n0cvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Um dos melhores exercícios para hipertrofia e força dos glúteos.',
  description: 'Movimento de extensão de quadril que isola e ativa fortemente o glúteo máximo, com ótima sobrecarga progressiva.',
  benefits: [
    'Excelente para glúteos',
    'Melhora força de extensão de quadril',
    'Baixo estresse na coluna quando bem executado'
  ],
  steps: [
    'Sente-se no chão com a parte superior das costas apoiada em um banco.',
    'Posicione a barra sobre o quadril (use proteção) e pés firmes no chão.',
    'Empurre o quadril para cima contraindo os glúteos até o corpo formar uma linha reta.',
    'Desça controladamente e repita.'
  ]
},
{
  id: 'leg-press',
  name: 'Leg Press',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2023/11/leg-press.jpg?quality=70&strip=info&w=414&h=280&crop=1',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nDh_BlnLCGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Exercício de máquina seguro e eficiente para pernas e glúteos.',
  description: 'Permite trabalhar quadríceps, glúteos e posteriores com alta carga e boa amplitude, ideal para iniciantes e avançados.',
  benefits: [
    'Alto potencial de carga',
    'Baixo risco de lesão com boa técnica',
    'Fácil de ajustar a ênfase (pés altos ou baixos)'
  ],
  steps: [
    'Sente-se na máquina com as costas e glúteos bem apoiados.',
    'Posicione os pés na plataforma na largura dos ombros.',
    'Desça o peso controladamente até os joelhos formarem cerca de 90 graus.',
    'Empurre a plataforma de volta sem travar completamente os joelhos.'
  ]
},
{
  id: 'face-pull',
  name: 'Face Pull',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIUia-RkRe-aV80kievFlpkAhq96_ukU_6DMt0IwvawDoiaJdn9eTEPQ&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q18p2QtQAes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Excelente para deltoide posterior, trapézio e postura.',
  description: 'Exercício de puxada na polia alta que fortalece a parte de trás dos ombros e ajuda a equilibrar o treino de peito.',
  benefits: [
    'Fortalece deltoide posterior',
    'Melhora a postura e estabilidade do ombro',
    'Ajuda na prevenção de lesões'
  ],
  steps: [
    'Fique de frente para a polia alta com a corda.',
    'Puxe a corda em direção ao rosto, separando as mãos e abrindo os cotovelos para os lados.',
    'Contraia as escápulas no final do movimento.',
    'Retorne controladamente à posição inicial.'
  ]
},
{
  id: 'elevacao-pernas-barra',
  name: 'Elevação de Pernas na Barra',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsesK1L_xMZH1lqdThMoooGsKX7TS0xLuBegcszVt1ExWmJhpj8feK2NQS&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pr1ieGZ5atk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Um dos melhores exercícios para o abdômen inferior e core.',
  description: 'Exercício em suspensão que exige força e controle abdominal, ativando fortemente a região inferior do abdômen.',
  benefits: [
    'Fortalece o abdômen inferior',
    'Melhora a força de preensão e estabilidade',
    'Ótimo para progressão de core'
  ],
  steps: [
    'Pendure-se em uma barra fixa com os braços estendidos.',
    'Mantenha o corpo estável e eleve as pernas (retas ou semi-flexionadas) até a horizontal ou mais alto.',
    'Controle a descida sem balançar o corpo.',
    'Evite usar impulso excessivo.'
  ]
},
{
  id: 'afundo-bulgaro',
  name: 'Afundo Búlgaro',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://s2-ge.glbimg.com/WowT2ZOCk8fck4-0WfHdzFT5EVo=/0x0:2120x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/T/3/dBeAdvR1CLwtaax8CBxA/istock-2210800405.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2C-uNgKwPLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  shortDescription: 'Variação unilateral excelente para glúteos, quadríceps e equilíbrio.',
  description: 'Versão avançada do afundo com o pé de trás elevado, aumentando a exigência de estabilidade e ativação muscular.',
  benefits: [
    'Corrige assimetrias entre as pernas',
    'Alta ativação de glúteos e quadríceps',
    'Melhora equilíbrio e estabilidade'
  ],
  steps: [
    'Coloque o peito do pé de trás em um banco ou step.',
    'Dê um passo à frente com a outra perna e desça flexionando o joelho da frente.',
    'Mantenha o tronco ereto e desça até a coxa da frente ficar paralela ao chão.',
    'Empurre o chão com o pé da frente para voltar à posição inicial e alterne.'
  ]
},
{
  id: 'rosca-martelo',
  name: 'Rosca Martelo',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://totalpass.com/wp-content/uploads/2025/01/rosca-martelo.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0qkQy8V2FC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Trabalha bíceps e braquial com pegada neutra.',
  description: 'Excelente para aumentar a espessura dos braços e fortalecer o antebraço.',
  benefits: ['Fortalece bíceps e braquial', 'Melhora a pegada', 'Menos estresse no punho'],
  steps: ['Segure os halteres com pegada neutra (palmas para dentro).', 'Mantenha os cotovelos fixos ao lado do corpo.', 'Flexione os cotovelos elevando os pesos.', 'Desça de forma controlada.']
},
{
  id: 'elevacao-frontal',
  name: 'Elevação Frontal',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://totalpass.com/wp-content/uploads/2025/02/elevacao-frontal.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_ZQhDiONpZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Foca no deltoide anterior (frente do ombro).',
  description: 'Exercício de isolamento que ajuda a desenvolver a parte frontal dos ombros.',
  benefits: ['Fortalece deltoide anterior', 'Melhora definição dos ombros', 'Complementa o desenvolvimento'],
  steps: ['Segure os halteres ou anilha à frente das coxas.', 'Eleve os braços à frente até a altura dos ombros.', 'Mantenha leve flexão nos cotovelos.', 'Desça controladamente.']
},
{
  id: 'crucifixo-halteres',
  name: 'Crucifixo com Halteres',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://vedius.com.br/wp-content/uploads/2025/10/Crucifixo-Reto-com-Halter_-Execucao-Beneficios-e-Dicas.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6qSwM1xM5xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Isola o peitoral com ótimo alongamento.',
  description: 'Movimento de abertura que enfatiza a porção média e inferior do peito.',
  benefits: ['Alonga e contrai o peitoral', 'Bom para definição', 'Menos carga nos tríceps'],
  steps: ['Deite no banco com os braços estendidos acima do peito.', 'Abra os braços em arco lateral descendo os halteres.', 'Sinta o alongamento no peito.', 'Feche os braços contraindo o peitoral.']
},
{
  id: 'supino-inclinado',
  name: 'Supino Inclinado',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://totalpass.com/wp-content/uploads/2024/09/supino-inclinado.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WP1VLAt8hbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Foca na porção superior do peitoral.',
  description: 'Variação do supino com banco inclinado que prioriza a parte clavicular do peito.',
  benefits: ['Desenvolve o peito superior', 'Melhora o visual do peitoral', 'Bom complemento ao supino reto'],
  steps: ['Ajuste o banco entre 30 e 45 graus.', 'Segure a barra ou halteres acima do peito.', 'Desça controladamente até tocar o peito.', 'Empurre de volta à posição inicial.']
},
{
  id: 'afundo-lateral',
  name: 'Afundo Lateral',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/07/afundo.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DSnP02QQjUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Trabalha glúteos, adutores e equilíbrio no plano lateral.',
  description: 'Variação do afundo que enfatiza o trabalho unilateral e a estabilidade do quadril.',
  benefits: ['Ativa glúteos e adutores', 'Melhora equilíbrio', 'Corrige assimetrias'],
  steps: ['Fique em pé com os pés unidos.', 'Dê um passo lateral amplo e flexione o joelho da perna que avançou.', 'Mantenha a outra perna estendida.', 'Retorne à posição inicial e alterne.']
},
{
  id: 'step-up',
  name: 'Step-up',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9EGRNuP9UEIV_rc465OZipgYXJ1kYrEuRAQCE2ZzkTNGvYWC8F_b-rk&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CpKJ1B4iNwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Exercício unilateral excelente para glúteos e quadríceps.',
  description: 'Subida em banco ou step que desenvolve força e estabilidade de forma funcional.',
  benefits: ['Fortalece pernas e glúteos', 'Melhora equilíbrio', 'Baixo impacto'],
  steps: ['Coloque um pé completo em cima do banco.', 'Empurre o corpo para cima usando a perna de apoio.', 'Suba completamente e desça de forma controlada.', 'Complete as repetições e troque de lado.']
},
{
  id: 'kickback-gluteo',
  name: 'Kickback de Glúteo na Polia',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://i.ytimg.com/vi/rQ-yA6tCH_w/sddefault.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gMdEADKtMv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Isola o glúteo máximo com extensão de quadril.',
  description: 'Exercício na polia baixa que permite boa contração e alongamento do glúteo.',
  benefits: ['Ótimo isolamento de glúteo', 'Fácil de progressar carga', 'Baixo estresse na lombar'],
  steps: ['Prenda a tornozeleira na polia baixa.', 'Fique de frente para a máquina e incline levemente o tronco.', 'Estenda a perna para trás contraindo o glúteo.', 'Retorne controladamente.']
},
{
  id: 'good-morning',
  name: 'Good Morning',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWlnrM4k-HmIAdjC4GqTtimHNUP2XvPFVOA6ky9muMOS0fwHA99DQ0fA&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q4GZN3scJxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Trabalha cadeia posterior (glúteos e isquiotibiais).',
  description: 'Movimento de dobradiça de quadril com a barra sobre os ombros, excelente para a posterior de coxa.',
  benefits: ['Fortalece glúteos e posteriores', 'Melhora a mobilidade de quadril', 'Complementa o stiff'],
  steps: ['Coloque a barra sobre os trapézios.', 'Mantenha joelhos levemente flexionados.', 'Incline o tronco para frente empurrando o quadril para trás.', 'Retorne à posição ereta contraindo os glúteos.']
},
{
  id: 'abducao-quadril',
  name: 'Abdução de Quadril',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnOgmcV_ba9ddmibbVA-nNGf9QECK34daEUVekhBMy4_rx_mYG5WuWiOq&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Tq3QdYUuHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Foca nos glúteos médios e estabilidade pélvica.',
  description: 'Exercício de abertura lateral do quadril, muito importante para estabilidade e prevenção de lesões.',
  benefits: ['Fortalece glúteo médio', 'Melhora estabilidade do quadril', 'Ajuda na postura'],
  steps: ['Sente-se ou fique de lado na máquina de abdução.', 'Abra as pernas contra a resistência.', 'Controle a volta sem deixar as placas baterem.', 'Mantenha o tronco estável.']
},
{
  id: 'aducao-quadril',
  name: 'Adução de Quadril',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG_poSPSbcrxbLR7Nj-UkxiNO7AqE0qiNXkL6SVp_CmVzK20khw07Y4M&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2C-uNgKwPLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Trabalha a parte interna das coxas (adutores).',
  description: 'Exercício de fechamento das pernas que fortalece os adutores e melhora o equilíbrio muscular.',
  benefits: ['Fortalece adutores', 'Melhora estabilidade do joelho', 'Complementa o treino de pernas'],
  steps: ['Sente-se na máquina de adução.', 'Feche as pernas contra a resistência.', 'Controle o movimento de abertura.', 'Mantenha a postura ereta.']
},
{
  id: 'encolhimento-ombros',
  name: 'Encolhimento de Ombros',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://cdn.fisiculturismo.com.br/monthly_2021_11/encolhimento-de-ombros-com-a-barra-final-media.webp.1324401fb375bcd04eea4fe39e5ddd9a.webp',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/g6qbq4Lf1FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Isola o trapézio superior.',
  description: 'Movimento simples de elevação dos ombros que desenvolve o trapézio.',
  benefits: ['Fortalece trapézio', 'Melhora a postura', 'Fácil de executar'],
  steps: ['Segure a barra ou halteres ao lado do corpo.', 'Eleve os ombros em direção às orelhas.', 'Segure 1 segundo no topo.', 'Desça controladamente.']
},
{
  id: 'cadeira-parede',
  name: 'Cadeira na Parede (Wall Sit)',
  bodyPart: 'Inferior',
  category: 'Estabilidade',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV8F-sj2FvNLagwZXRbZqND9pHvMxwQ2qcDtwGLjt1jYQHZ99WT17_z8&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y-wV4Venusw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Exercício isométrico clássico para quadríceps.',
  description: 'Sustentação estática que fortalece as pernas e melhora a resistência muscular.',
  benefits: ['Fortalece quadríceps', 'Melhora resistência', 'Não precisa de equipamento'],
  steps: ['Encoste as costas na parede.', 'Deslize para baixo até as coxas ficarem paralelas ao chão.', 'Mantenha os joelhos a 90 graus.', 'Segure a posição pelo tempo determinado.']
},
{
  id: 'pullover',
  name: 'Pullover',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2023/07/Pullover.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FK4rHfWKWyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Trabalha peito, dorsais e serrátil.',
  description: 'Movimento de extensão dos braços sobre a cabeça que ativa peitoral e grande dorsal.',
  benefits: ['Alonga o peitoral e dorsais', 'Melhora mobilidade de ombro', 'Ativa o core'],
  steps: ['Deite no banco segurando um halter acima do peito.', 'Desça o peso atrás da cabeça com os cotovelos levemente flexionados.', 'Retorne à posição inicial contraindo peito e dorsais.']
},
{
  id: 'triceps-kickback',
  name: 'Tríceps Kickback',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dx84GtPcCRds8gbZ1dxyk-pJgNFZbz8_Svz74DzbwPpEZgbXBaWoA_YK&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6SS6K3lAwZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Isola o tríceps com boa contração no final.',
  description: 'Exercício unilateral que enfatiza a cabeça lateral e longa do tríceps.',
  benefits: ['Bom isolamento de tríceps', 'Fácil de controlar', 'Corrige assimetrias'],
  steps: ['Incline o tronco e apoie um joelho no banco.', 'Mantenha o cotovelo fixo ao lado do corpo.', 'Estenda o braço para trás até a completa extensão.', 'Retorne controladamente.']
},
{
  id: 'rosca-concentrada',
  name: 'Rosca Concentrada',
  bodyPart: 'Superior',
  category: 'Força',
  image: 'https://blog.vivatrue.com.br/wp-content/uploads/2024/04/senhora-fazendo-rosca-concentrada-1024x683.jpg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0AUGkch3tzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Isolamento máximo do bíceps.',
  description: 'Exercício clássico sentado que permite total foco no bíceps sem compensações.',
  benefits: ['Excelente isolamento', 'Melhora o pico do bíceps', 'Fácil de sentir a contração'],
  steps: ['Sente-se com a parte interna do cotovelo apoiada na coxa.', 'Flexione o cotovelo elevando o halter.', 'Contraia o bíceps no topo.', 'Desça de forma controlada.']
},
{
  id: 'agachamento-sumo',
  name: 'Agachamento Sumô',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://alexandrekusabara.com.br/wp-content/uploads/2024/07/agachamento-sumo.webp',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ufh39C5cMfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Variação com ênfase em glúteos e adutores.',
  description: 'Agachamento com base mais aberta e pés apontados para fora, priorizando glúteos e parte interna da coxa.',
  benefits: ['Maior ativação de glúteos', 'Trabalha adutores', 'Boa opção para quem tem mobilidade limitada'],
  steps: ['Abra as pernas além da largura dos ombros e aponte os pés para fora.', 'Desça empurrando o quadril para trás.', 'Mantenha o peito erguido.', 'Suba contraindo os glúteos.']
},
{
  id: 'panturrilha-sentado',
  name: 'Panturrilha Sentado',
  bodyPart: 'Inferior',
  category: 'Força',
  image: 'https://s2-ge.glbimg.com/d71ML187_fSuQb0YlaAx77f3QAo=/0x0:1280x1280/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/u/n/kaKNRXS4q2LoAJxoIeXA/waldyr-executa-elevacao-de-panturrilha-sentado-eu-atleta.jpeg',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JbyjNymZOt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Foca no sóleo (parte mais profunda da panturrilha).',
  description: 'Exercício sentado que enfatiza o músculo sóleo, complementando a panturrilha em pé.',
  benefits: ['Trabalha o sóleo', 'Melhora definição da panturrilha', 'Baixo impacto'],
  steps: ['Sente-se na máquina com as pontas dos pés na plataforma.', 'Eleve os calcanhares o máximo possível.', 'Segure 1 segundo no topo.', 'Desça controladamente.']
},
{
  id: 'box-jump',
  name: 'Box Jump',
  bodyPart: 'Inferior',
  category: 'Cardio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjhLRH9mBdQyavhU-KLu8HpPgdlxb_qypQAq-9J2cBuiaKSySwQ7xmgkv&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NBY9-kTuHEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Exercício pliométrico para potência e explosão.',
  description: 'Salto em caixa que desenvolve potência de pernas e coordenação.',
  benefits: ['Melhora potência', 'Queima calorias', 'Desenvolve explosão muscular'],
  steps: ['Fique em frente à caixa com os pés na largura dos ombros.', 'Agache levemente e salte sobre a caixa.', 'Aterrisse com os dois pés e suba completamente.', 'Desça com cuidado e repita.']
},
{
  id: 'jump-squat',
  name: 'Agachamento com Salto',
  bodyPart: 'Inferior',
  category: 'Cardio',
  image: 'https://www.oxygenmag.com/wp-content/uploads/2020/09/level-1.jpg?width=730',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A-cXgPmX2Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Combina força e cardio em um só movimento.',
  description: 'Agachamento explosivo com salto que eleva a frequência cardíaca e trabalha potência.',
  benefits: ['Melhora potência e condicionamento', 'Queima muitas calorias', 'Ativa todo o corpo inferior'],
  steps: ['Faça um agachamento normal.', 'No final da subida, salte o mais alto possível.', 'Aterrisse suavemente e já inicie o próximo agachamento.', 'Mantenha o core contraído.']
},
{
  id: 'abdominal-reverso',
  name: 'Abdominal Reverso',
  bodyPart: 'Core',
  category: 'Força',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Glwr3HpkCR8TAeETx_2Xkvygj6gs7VkmKGKnrm6vnWQexTdtPRtnNeQ&s=10',
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1fbU_MkV7NE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  shortDescription: 'Foca na parte inferior do abdômen com menos estresse no pescoço.',
  description: 'Variação em que se eleva o quadril em direção ao peito, priorizando o abdômen inferior.',
  benefits: ['Trabalha o abdômen inferior', 'Menos tensão no pescoço', 'Bom controle do core'],
  steps: ['Deite de costas com as mãos ao lado do corpo.', 'Eleve as pernas e o quadril em direção ao peito.', 'Controle a descida sem deixar os pés tocarem o chão.', 'Mantenha a lombar pressionada no chão.']
}
];
// Normaliza textos para facilitar a busca por nome, parte do corpo ou categoria.
function normalize(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[^\w\s]/g, '');
}

// Extrai o identificador do vídeo do YouTube a partir de diferentes formatos de URL.
function getYouTubeVideoId(video) {
  if (!video) return '';

  const trimmed = String(video).trim();
  const embedMatch = trimmed.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]+)/i);
  if (embedMatch) return embedMatch[1];

  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]+)/i);
  if (watchMatch) return watchMatch[1];

  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/i);
  if (shortsMatch) return shortsMatch[1];

  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/i);
  if (shortMatch) return shortMatch[1];

  return '';
}

// Gera a URL oficial do vídeo no YouTube para abrir em outra aba.
function getYouTubeWatchUrl(video) {
  const videoId = getYouTubeVideoId(video);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : '';
}

// Gera a imagem de capa do vídeo a partir do ID do YouTube.
function getYouTubeThumbnailUrl(video) {
  const videoId = getYouTubeVideoId(video);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
}

// Renderiza os cards de exercícios na página principal de catálogo, aplicando filtro e busca.
function renderExerciseCards() {
  const container = document.getElementById('exercise-list');
  const searchInput = document.getElementById('exercise-search');
  const filterSelect = document.getElementById('exercise-filter');

  if (!container) return;

  const searchValue = normalize(searchInput?.value || '');
  const selectedFilter = filterSelect?.value || 'Todos';

  // Filtra os exercícios com base no texto digitado e na parte do corpo escolhida.
  const filtered = exercises.filter((exercise) => {
    const matchesFilter = selectedFilter === 'Todos' || exercise.bodyPart === selectedFilter;
    const searchable = normalize(`${exercise.name} ${exercise.bodyPart} ${exercise.category}`);
    const matchesSearch = searchable.includes(searchValue);
    return matchesFilter && matchesSearch;
  });

  // Atualiza a contagem de exercícios encontrados.
  const count = document.getElementById('exercise-count');
  if (count) {
    count.textContent = `${filtered.length} exercício${filtered.length === 1 ? '' : 's'}`;
  }

  // Exibe uma mensagem quando não há exercícios compatíveis com a pesquisa.
  if (!filtered.length) {
    container.innerHTML = '<p class="text-center text-slate-500 col-span-full">Nenhum exercício encontrado para essa busca.</p>';
    return;
  }

  // Monta os cards HTML com as informações do exercício.
  container.innerHTML = filtered.map((exercise) => `
    <article class="bg-white rounded-3xl shadow overflow-hidden">
      <img src="${exercise.image}" alt="${exercise.name}" class="h-44 w-full object-cover" />
      <div class="p-6">
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-xl font-bold">${exercise.name}</h2>
          <span class="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">${exercise.bodyPart}</span>
        </div>
        <p class="mt-3 text-sm text-slate-600">${exercise.shortDescription}</p>
        <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">${exercise.category}</p>
        <a href="exercicio-detalhes.html?id=${exercise.id}" class="mt-5 inline-flex rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
          Ver com detalhes
        </a>
      </div>
    </article>
  `).join('');
}

// Renderiza o conteúdo completo de um exercício na página de detalhes.
function renderExerciseDetail() {
  const detailContainer = document.getElementById('exercise-detail');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const exerciseId = params.get('id');
  const exercise = exercises.find((item) => item.id === exerciseId);

  if (!exercise) {
    detailContainer.innerHTML = '<p class="text-slate-500">Exercício não encontrado.</p>';
    return;
  }

  const videoWatchUrl = getYouTubeWatchUrl(exercise.video);
  const thumbnailUrl = getYouTubeThumbnailUrl(exercise.video);

  // Monta a estrutura HTML da página com descrição, benefícios e instruções.
  detailContainer.innerHTML = `
    <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
      <div class="space-y-4">
        <img src="${exercise.image}" alt="${exercise.name}" class="w-full rounded-3xl object-cover shadow-xl" />
        ${videoWatchUrl ? `
          <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <a href="${videoWatchUrl}" target="_blank" rel="noreferrer" class="block">
              <div class="aspect-video overflow-hidden rounded-[1.1rem]">
                <img
                  src="${thumbnailUrl || exercise.image}"
                  alt="Capa do vídeo de ${exercise.name}"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="flex items-center justify-between gap-3 px-3 py-3">
                <div>
                  <p class="text-sm font-semibold text-slate-700">Assistir demonstração</p>
                  <p class="text-xs text-slate-500">Abrirá diretamente no YouTube</p>
                </div>
                <span class="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white">▶</span>
              </div>
            </a>
          </div>
        ` : ''}
      </div>
      <div>
        <p class="text-orange-500 font-semibold uppercase tracking-[0.2em]">${exercise.bodyPart}</p>
        <h1 class="mt-3 text-4xl font-bold">${exercise.name}</h1>
        <p class="mt-4 text-lg text-slate-600">${exercise.description}</p>
        <div class="mt-6">
          <h2 class="text-xl font-semibold">Benefícios</h2>
          <ul class="mt-3 space-y-2 text-slate-600">
            ${exercise.benefits.map((benefit) => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-orange-500"></i>${benefit}</li>`).join('')}
          </ul>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold">Como fazer</h2>
          <ol class="mt-3 space-y-2 text-slate-600 list-decimal list-inside">
            ${exercise.steps.map((step) => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;
}

// Liga eventos de busca e filtro após o carregamento da página.
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('exercise-search');
  const filterSelect = document.getElementById('exercise-filter');

  if (searchInput) {
    searchInput.addEventListener('input', renderExerciseCards);
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', renderExerciseCards);
  }

  renderExerciseCards();
  renderExerciseDetail();
});
