console.clear();

let interval;

function arrayFromNodeList(nodelist) {
  return [].slice.call(nodelist);
};

function rotateCards(cards) {
  cards.forEach((card) => {
    const classes = card.classList;
    if (classes.contains('right')) {
      classes.remove('right');
    } else if (classes.contains('left')) {
      classes.remove('left');
      classes.add('right');
    } else {
      classes.add('left');
    }
  });
}

function playAnimation(cardcarousel) {
  cardcarousel.classList.remove('paused');
  const cards = arrayFromNodeList(cardcarousel.querySelectorAll('.card'));
  rotateCards(cards);
  clearInterval(interval);
  return interval = setInterval(() => {
    rotateCards(cards);
  }, 5000);
}

function stopAnimation(cardcarousel) {
  console.log('stop', interval);
  cardcarousel.classList.add('paused');
  return clearInterval(interval);
}

function toggleAnimation(cardcarousel) {
  console.log('toggle', interval);
  if (cardcarousel.classList.contains('paused')) {
    return playAnimation(cardcarousel);
  }
  return stopAnimation(cardcarousel);
}

const cardcarousel = document.querySelector('.cardcarousel');
playAnimation(cardcarousel);

cardcarousel.addEventListener('click', function (e) {
    console.log('click on button');
    toggleAnimation(cardcarousel);
});