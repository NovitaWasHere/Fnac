document.addEventListener('DOMContentLoaded', () => {
  const rightBtn = document.querySelector('#scrolling-button-right');
  const leftBtn = document.querySelector('#scrolling-button-left');
  const rightBtn2 = document.querySelector('#scrolling-button-right2');
  const leftBtn2 = document.querySelector('#scrolling-button-left2');
  const rightBtn3 = document.querySelector('#scrolling-button-right3');
  const leftBtn3 = document.querySelector('#scrolling-button-left3');
  const content = document.querySelector('.scroll-container');
  const rightBtn4 = document.querySelector('#scrolling-button-right4');
  const leftBtn4 = document.querySelector('#scrolling-button-left4');
  const content4 = document.querySelector('.scroll-container5');
  const rightBtn5 = document.querySelector('#scrolling-button-right5');
  const leftBtn5 = document.querySelector('#scrolling-button-left5');
  const content5 = document.querySelector('.scroll-container6');
  const content2 = document.querySelector('.scroll-container3');
  const content3 = document.querySelector('.scroll-container4');

  rightBtn.addEventListener("click", () => {
    content.scrollLeft += 800;
  });

  leftBtn.addEventListener("click", () => {
    content.scrollLeft -= 800;
  });
  rightBtn2.addEventListener("click", () => {
    content2.scrollLeft += 800;
  });

  leftBtn2.addEventListener("click", () => {
    content2.scrollLeft -= 800;
  });
  rightBtn3.addEventListener("click", () => {
    content3.scrollLeft += 800;
  });

  leftBtn3.addEventListener("click", () => {
    content3.scrollLeft -= 800;
  });
  rightBtn4.addEventListener("click", () => {
    content4.scrollLeft += 800;
  });

  leftBtn4.addEventListener("click", () => {
    content4.scrollLeft -= 800;
  });
  rightBtn5.addEventListener("click", () => {
    content5.scrollLeft += 800;
  });

  leftBtn5.addEventListener("click", () => {
    content5.scrollLeft -= 800;
  });
});
