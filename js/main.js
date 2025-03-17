//컨택트 박스
document.querySelector('.contact_box').addEventListener('click', function () {
    this.classList.toggle('active_contact');
  });
  
  
//프로젝트
var hobby_swiper = new Swiper(".projectSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
  });
  
//스크롤 시 문어 커짐
window.addEventListener('scroll', () => {
  const mainOt = document.querySelector('.main_ot');
  let scale = 1 + window.scrollY / 3000;

  if (scale > 1.6) {
    scale = 1.6;
  }
  mainOt.style.transform = `scale(${scale})`;
});

// header 스크롤 이동 함수
function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (window.lenisInstance) {
    window.lenisInstance.scrollTo(target, { 
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  }
}

document.getElementById('work_scroll').addEventListener('click', function(event) {
  event.preventDefault(); 
  scrollToSection('work'); 
});

document.getElementById('about_scroll').addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection('about');
});