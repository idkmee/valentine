const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const body = document.body;

// Laser effect function
function createLaser() {
  const laser = document.createElement('div');
  laser.classList.add('laser');
  body.appendChild(laser);

  setTimeout(() => {
    laser.remove();
  }, 500); // Laser duration
}

// When "Yes" is clicked
yesButton.addEventListener('click', () => {
  // Fade out all elements except the response message
  document.querySelector('.container').style.opacity = '0';
  document.querySelector('.buttons').style.opacity = '0';
  document.querySelector('h1').style.opacity = '0';
  document.querySelector('p').style.opacity = '0';

  // Show the response message and highlight it
  response.classList.remove('hidden');
  response.style.opacity = '1';
  
  // Change the background to a vibrant gradient
  document.body.style.background = 'linear-gradient(135deg, #ff6f61, #ffcccb)';
  
  // Create laser animation
  createLaser();
});

// When mouse hovers over "No", it moves around randomly
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
