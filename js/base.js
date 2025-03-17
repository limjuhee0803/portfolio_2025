//부드러운 스크롤
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768 && !window.lenisInstance) {
      const lenis = new Lenis({
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
  
      window.lenisInstance = lenis;
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }
});

// header
let prevScroll = window.scrollY;

$(window).on('scroll', () => {
  let currentScroll = window.scrollY;

  if (prevScroll > currentScroll) {
    $('header').css({ top: 0 });
  } else {
    $('header').css({ top: '-70px' });
  }

  prevScroll = currentScroll;
});

//up 버튼
document.addEventListener("DOMContentLoaded", function () {
  const upButtons = document.querySelectorAll('.up');

  upButtons.forEach(function(upButton) {
    upButton.addEventListener('click', function () {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { duration: 2 });
      }
    });
  });
});


//스크롤 이벤트
const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      fadeUpObserver.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.5,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade_up').forEach(el => fadeUpObserver.observe(el));

