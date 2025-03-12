//컨택트 박스
document.querySelector('.contact_box').addEventListener('click', function () {
    this.classList.toggle('active_contact');
  });
  
//디자인 갤러리 스와이퍼
var hobby_swiper = new Swiper(".slideSwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
    breakpoints: {
      768: {
        slidesPerView: 6.5,
        spaceBetween: 20.
      }
    }
});
  
//프로젝트
var hobby_swiper = new Swiper(".projectSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
  });
  
