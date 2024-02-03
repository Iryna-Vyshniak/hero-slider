let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let carousel = document.querySelector('.carousel');
let Slider = carousel.querySelector('.list');
let thumbnailBorder = document.querySelector('.thumbnail');
let thumbnailItems = thumbnailBorder.querySelectorAll('.thumbnail-item');
let time = document.querySelector('.time');

thumbnailBorder.appendChild(thumbnailItems[0]);

nextBtn.addEventListener('click', () => {
  showSlider('next');
});

prevBtn.addEventListener('click', () => {
  showSlider('prev');
});

let runTimeOut;
let timeRunning = 3000;
let timeAutoNext = 6000;

let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

function showSlider(type) {
  let SliderItems = Slider.querySelectorAll('.item');

  if (type === 'next') {
    Slider.appendChild(SliderItems[0]);
    thumbnailBorder.appendChild(thumbnailItems[0]);
    carousel.classList.add('next');
  } else {
    Slider.prepend(SliderItems[SliderItems.length - 1]);
    thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(runTimeOut);

  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);

  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
