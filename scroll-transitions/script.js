document.querySelector('#progressbar').animate(
  {
    backgroundColor: ['coral', 'magenta'],
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    duration: 2500,
    fill: 'forwards',
    easing: 'linear',
   }
);