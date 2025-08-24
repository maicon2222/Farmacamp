// ============================================
// Carrossel de Banners
// ============================================

let currentIndex = 0; // Índice do banner atualmente exibido

// Função para mover o carrossel na direção específica (1 para próximo, -1 para anterior)
function moveCarousel(direction) {
    const banners = document.querySelectorAll('.banner'); // Seleciona todos os banners
    currentIndex += direction; // Atualiza o índice atual com a direção escolhida
    
    // Se o índice for menor que 0, volta para o último banner
    if (currentIndex < 0) {
        currentIndex = banners.length - 1;
    }
    // Se o índice for maior ou igual ao número de banners, volta para o primeiro
    else if (currentIndex >= banners.length) {
        currentIndex = 0;
    }

    updateCarousel();  // Atualiza o carrossel para exibir o banner correto
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const carrossel = document.querySelector('.carrossel'); // Seleciona o container do carrossel
    const offset = currentIndex * 100; // Calcula 100% das laterais do banner quando ele é deslocado
    carrossel.style.transform = `translateX(-${offset}%)`; // Aplica a transformação para mover o carrossel
}

// Função que faz o carrossel se mover automaticamente a cada 5 segundos
function autoMoveCarousel() {
    setInterval(() => {
        moveCarousel(1); // Move para o próximo banner
    }, 5000); // Chama a função a cada 5 segundos (5000 milissegundos)
}

// Inicia a transição automática
autoMoveCarousel();

// ============================================
// Contagem Regressiva Black Friday
// ============================================

// Definir a data de término (24 horas a partir do momento atual)
let countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 horas

// Atualizar a contagem a cada 1 segundo
let x = setInterval(function() {
  
  // Obter a data e hora atuais
  let now = new Date().getTime();
  
  // Calcular a diferença entre agora e a data de término
  let distance = countdownDate - now;
  
  // Calcular horas, minutos e segundos restantes
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Exibir a contagem regressiva no elemento
  document.getElementById("countdown-timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  
  // Se a contagem terminar
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Promoção encerrada!";
  }
}, 1000);

// ============================================
// Plugin de Cookie
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner"); // Seleciona o banner de cookies
    let aceitou = localStorage.getItem("cookiesAceitos"); // Verifica se o usuário já aceitou os cookies

    if (!aceitou && banner) {
        banner.style.display = "flex"; // Exibe o banner se os cookies não foram aceitos
    }

    window.aceitarCookies = function() {
        localStorage.setItem("cookiesAceitos", "true"); // Armazena a aceitação dos cookies
        if (banner) {
            banner.style.display = "none"; // Esconde o banner após a aceitação
        }
    };
});

// ============================================
// Banner Slider
// ============================================

// Banner Slider
const sliderTrack = document.querySelector('.slider-track');
const sliderBanners = document.querySelectorAll('.slider-banner');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const sliderIndicators = document.querySelector('.slider-indicators');
let sliderIndex = 0;

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;
  document.querySelectorAll('.slider-indicators button').forEach((btn, i) => {
    btn.classList.toggle('active', i === sliderIndex);
  });
}

function createSliderIndicators() {
  sliderIndicators.innerHTML = '';
  for (let i = 0; i < sliderBanners.length; i++) {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Banner ${i+1}`);
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      sliderIndex = i;
      updateSlider();
    });
    sliderIndicators.appendChild(btn);
  }
}

if (sliderTrack && sliderBanners.length) {
  createSliderIndicators();
  updateSlider();
  prevBtn.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + sliderBanners.length) % sliderBanners.length;
    updateSlider();
  });
  nextBtn.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % sliderBanners.length;
    updateSlider();
  });
  // Auto-slide
  setInterval(() => {
    sliderIndex = (sliderIndex + 1) % sliderBanners.length;
    updateSlider();
  }, 6000);
}

// ============================================
// Depoimentos Slider
// ============================================

// Depoimentos Slider
const depoSlides = document.querySelectorAll('.depoimento-slide');
const depoPrev = document.querySelector('.depoimento-btn.prev');
const depoNext = document.querySelector('.depoimento-btn.next');
const depoIndicators = document.querySelector('.depoimento-indicators');
let depoIndex = 0;

function updateDepoSlider() {
  depoSlides.forEach((slide, i) => {
    slide.classList.toggle('ativo', i === depoIndex);
  });
  if (depoIndicators) {
    depoIndicators.innerHTML = '';
    for (let i = 0; i < depoSlides.length; i++) {
      const btn = document.createElement('button');
      btn.setAttribute('aria-label', `Depoimento ${i+1}`);
      if (i === depoIndex) btn.classList.add('active');
      btn.addEventListener('click', () => {
        depoIndex = i;
        updateDepoSlider();
      });
      depoIndicators.appendChild(btn);
    }
  }
}
if (depoSlides.length) {
  updateDepoSlider();
  if (depoPrev && depoNext) {
    depoPrev.addEventListener('click', () => {
      depoIndex = (depoIndex - 1 + depoSlides.length) % depoSlides.length;
      updateDepoSlider();
    });
    depoNext.addEventListener('click', () => {
      depoIndex = (depoIndex + 1) % depoSlides.length;
      updateDepoSlider();
    });
  }
  setInterval(() => {
    depoIndex = (depoIndex + 1) % depoSlides.length;
    updateDepoSlider();
  }, 8000);
}

// ============================================
// Animação de digitação no hero
// ============================================

// Animação de digitação no hero
const keywords = ['confiança', 'segurança', 'preço justo', 'entrega rápida', 'farmacêuticos online', 'bem-estar'];
const typedSpan = document.querySelector('.typed-keywords');
let kwIndex = 0, charIndex = 0, typing = true;
function typeKeyword() {
  if (!typedSpan) return;
  if (typing) {
    if (charIndex < keywords[kwIndex].length) {
      typedSpan.textContent += keywords[kwIndex][charIndex++];
      setTimeout(typeKeyword, 80);
    } else {
      typing = false;
      setTimeout(typeKeyword, 1200);
    }
  } else {
    if (charIndex > 0) {
      typedSpan.textContent = keywords[kwIndex].slice(0, --charIndex);
      setTimeout(typeKeyword, 40);
    } else {
      typing = true;
      kwIndex = (kwIndex + 1) % keywords.length;
      setTimeout(typeKeyword, 400);
    }
  }
}
typeKeyword();

// ============================================
// Botão voltar ao topo
// ============================================

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Dark mode automático
// ============================================

// Dark mode automático
function setDarkModeAuto() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
setDarkModeAuto();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkModeAuto);

// ============================================
// Acessibilidade: navegação por teclado
// ============================================

// Acessibilidade: navegação por teclado
const focusableElements = 'a, button, input, [tabindex]:not([tabindex="-1"])';
document.body.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});
document.body.addEventListener('mousedown', function() {
  document.body.classList.remove('user-is-tabbing');
});
