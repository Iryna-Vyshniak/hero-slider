// slider

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const carousel = document.querySelector('.carousel');
const sliderItems = document.querySelectorAll('.carousel .list .item');
const thumbnailsItems = document.querySelectorAll('.thumbnail .thumbnail-item');

let countItem = sliderItems.length;
let itemActive = 0;

// buttons on click
nextBtn.addEventListener('click', () => {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }

  console.log('next');
  showSlider('next');
});

prevBtn.addEventListener('click', () => {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  console.log('prev');
  showSlider('prev');
});

// interval
let runTimeOut;
let timeRunning = 3000;
let timeAutoNext = 6000;

let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

// show slider
function showSlider(type = '') {
  console.log('type: ', type);
  const itemActiveOld = document.querySelector('.carousel .list .item.active');
  const thumbnailActiveOld = document.querySelector('.thumbnail .thumbnail-item.active');

  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  const activeImage = sliderItems[itemActive].querySelector('img');
  activeImage.classList.remove('show-animation');

  if (type === 'next') {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
  } else {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
  }

  sliderItems[itemActive].classList.add('active');
  thumbnailsItems[itemActive].classList.add('active');
  activeImage.classList.add('show-animation');

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

// click thumbnail

thumbnailsItems.forEach((thumbnail, idx) => {
  thumbnail.addEventListener('click', () => {
    itemActive = idx;
    showSlider();
  });
});
