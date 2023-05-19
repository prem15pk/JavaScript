var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


 const array = document.querySelectorAll('.swiper-slide');

 //const one =  document.querySelector('.one');
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  element.addEventListener('click' , function(){

    this.style.color='red';
   })
}
