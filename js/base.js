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
let prevScroll = window.scrollY;

$(window).on('scroll', () => {
  let currentScroll = window.scrollY;

  if (prevScroll > currentScroll) {
    // 스크롤을 올리면 헤더가 보이도록 설정
    $('header').css({ top: 0 });
  } else {
    // 스크롤을 내리면 헤더가 숨도록 설정
    $('header').css({ top: '-70px' }); // 헤더의 높이만큼 올라가게 설정
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

window.addEventListener('scroll', () => {
  const mainOt = document.querySelector('.main_ot');
  let scale = 1 + window.scrollY / 3000;

  if (scale > 1.6) {
    scale = 1.6;
  }
  mainOt.style.transform = `scale(${scale})`;
});


// 스크롤 애니메이션
window.addEventListener("scroll", function () {
  let waitScrollElement = document.querySelector(".wait_scroll"); // wait_scroll 요소 선택
  let rect = waitScrollElement.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  // wait_scroll 요소가 화면에 90% 이상 닿으면 active 클래스 추가
  if (rect < windowHeight * 0.7) {
    waitScrollElement.classList.add("active");
  }
});

//프로젝트 스와이퍼
var hobby_swiper = new Swiper(".slideSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  slideToClickedSlide : true,
  navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 6.5,
      spaceBetween: 20.
    }
  }
});
