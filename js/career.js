//부드러운 스크롤
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768 && !window.lenisInstance) {
    const lenis = new Lenis({
      duration: 3,
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
/*
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
*/

//뒤로가기 버튼
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back");
  
    if (backButton) {
      backButton.addEventListener("click", function () {
        window.history.back(); // 이전 페이지로 이동
      });
    }
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

window.addEventListener('scroll', () => {
  const mainOt = document.querySelector('.main_ot');
  let scale = 1 + window.scrollY / 3000;

  if (scale > 1.6) {
    scale = 1.6;
  }
  mainOt.style.transform = `scale(${scale})`;
});
