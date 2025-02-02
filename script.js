const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

// When "Yes" is clicked
yesButton.addEventListener('click', () => {
  // Fade out all elements except for the response message
  const container = document.querySelector('.container');
  const buttons = document.querySelector('.buttons');
  const h1 = document.querySelector('h1');
  const p = document.querySelector('p');

  // Apply fade out transition
  container.style.transition = "opacity 1s ease-out";
  buttons.style.transition = "opacity 1s ease-out";
  h1.style.transition = "opacity 1s ease-out";
  p.style.transition = "opacity 1s ease-out";

  // Fade out all elements
  container.style.opacity = '0';
  buttons.style.opacity = '0';
  h1.style.opacity = '0';
  p.style.opacity = '0';

  // Fade in the response message
  setTimeout(() => {
    response.classList.remove('hidden');
    response.style.opacity = '1';  // Make the response visible with fade-in effect

    // Change the background to a vibrant gradient
    document.body.style.background = 'linear-gradient(135deg, #ff6f61, #ffcccb)';
  }, 1000);  // Delay to let the fading out happen first
});

// When mouse hovers over "No", it moves around randomly
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
