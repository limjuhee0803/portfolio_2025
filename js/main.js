//컨택트 박스
document.querySelector('.contact_box').addEventListener('click', function () {
    this.classList.toggle('active_contact');
  });
  
//프로젝트 스와이퍼
  var hobby_swiper = new Swiper(".slideSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    slideToClickedSlide : true,
    breakpoints: {
      768: {
        slidesPerView: 6.5,
        spaceBetween: 20.
      }
    }
  });
  