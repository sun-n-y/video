const slider = document.querySelector('.slider');
const control = document.querySelector('.control');
const video = document.querySelector('.video');

control.addEventListener('click', () => {
  if (!slider.classList.contains('slide')) {
    slider.classList.add('slide');
    video.pause();
  } else {
    slider.classList.remove('slide');
    video.play();
  }
});
