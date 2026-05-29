// CÓDIGO PARA O FADE DAS SEÇÕES
const fadeSections = document.querySelectorAll(".fade-section");

function showSectionsOnScroll() {
  fadeSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showSectionsOnScroll);

showSectionsOnScroll();
// FIM DO CÓDIGO PARA O FADE DAS SEÇÕES

// CÓDIGO DA SEÇÃO CARROSEL
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: -5,
    stretch: -50,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  initialSlide: 5,
});
// FIM DO CÓDIGO DA SEÇÃO CARROSEL

let lastScrollTop = 0;
const cabecalho = document.getElementById("cabecalho");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    cabecalho.style.top = "-100px"; // esconde
  } else {
    // Rolando para cima
    cabecalho.style.top = "0"; // mostra
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evita valores negativos
});



function menuHamburguer() {
  const menu = document.getElementById("menuNavegacao");
  menu.classList.toggle("ativo");
}

    const links = document.querySelectorAll('.copy-link');
    const notification = document.getElementById('notification');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const text = this.getAttribute('data-text');

        // Copia para a área de transferência
        navigator.clipboard.writeText(text).then(() => {
          // Mostra notificação
          notification.classList.add('show');

          // Esconde após 2 segundos
          setTimeout(() => {
            notification.classList.remove('show');
          }, 2000);
        });
      });
    });
