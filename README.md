# 🚲 Stranger Things: The Experience – Landing Page

"Descubra os seus poderes e vire o herói de sua própria aventura!"

Uma Landing Page imersiva e interativa desenvolvida para promover a experiência Stranger Things: The Experience.
O projeto foca em design responsivo, animações fluidas de alto nível e uma experiência de usuário (UX) envolvente, incluindo áudio ambiente temático.

## 🚀 Funcionalidades
🎬 Animações Avançadas (GSAP)

ScrollSmoother: Rolagem suave para uma navegação elegante.

ScrollTrigger: Elementos surgem conforme o usuário rola a página (fade-in, blur).

SplitText: Animações sofisticadas de texto para títulos e chamadas.

Preloader SVG: Animação de carregamento personalizada com o logo da Netflix.

## 🎧 Áudio Ambiente Controlável

Trilha sonora temática reproduzida em segundo plano.

Controle inteligente: respeita políticas de autoplay dos navegadores (inicia após a primeira interação).

Botão Toggle: ícone no header para mutar/desmutar o som a qualquer momento.

## 📱 Design Responsivo

Layout totalmente adaptável para Desktop, Tablet e Mobile.

## 🎨 Estética Temática

Tipografia Benguiat.

Paleta de cores e imagens alinhadas à identidade visual da série.

## 🛠️ Tecnologias Utilizadas

HTML5: Estrutura semântica.

CSS3: Flexbox, Media Queries e importação de fontes.

JavaScript (ES6+): Manipulação do DOM e controle de áudio.

GSAP (GreenSock Animation Platform):

ScrollTrigger

ScrollSmoother

SplitText

## 📂 Estrutura do Projeto
/
├── index.html          # Estrutura principal
├── css/
│   └── style.css       # Estilos globais e responsividade
├── js/
│   └── script.js       # Configuração do GSAP e lógica de áudio
└── assets/
    ├── audio/          # Arquivos de música (theme.mp3)
    ├── fonts/          # Fontes personalizadas (Benguiat)
    ├── icon/           # Ícones SVG (Netflix, Social, Sound On/Off)
    └── img/            # Imagens e backgrounds

## 🎧 Implementação de Áudio

O projeto inclui uma solução robusta para áudio em navegadores modernos:

O áudio é carregado via tag <audio> HTML5.

Um script detecta o primeiro clique do usuário para iniciar a reprodução (contornando bloqueios de autoplay).

O ícone no cabeçalho alterna dinamicamente entre Som Ligado e Som Desligado.

## 🔧 Como Executar

Clone este repositório:

git clone https://github.com/Nadson-Cutrim/Stranger-Things.git


Navegue até a pasta do projeto.

Abra o arquivo index.html no seu navegador.

## 💡 Dica:
Para que o ScrollSmoother do GSAP funcione perfeitamente, recomenda-se utilizar um servidor local, como o Live Server do VS Code.

## 🎨 Créditos e Recursos

Design: Inspirado na identidade visual de Stranger Things (Netflix).

Biblioteca: GSAP.

Desenvolvedor: Nadson Rodrigues Cutrim Junior.

Feito com 🩸, suor e código por Nadson Cutrim 🚀