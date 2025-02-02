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

  // Fade out all elements
  container.style.transition = "opacity 1s ease-out";
  buttons.style.transition = "opacity 1s ease-out";
  h1.style.transition = "opacity 1s ease-out";
  p.style.transition = "opacity 1s ease-out";

  container.style.opacity = '0';
  buttons.style.opacity = '0';
  h1.style.opacity = '0';
  p.style.opacity = '0';

  // Show the response message with a fade-in effect after 1 second
  setTimeout(() => {
    response.classList.remove('hidden');
    response.style.opacity = '1';  // Make the response visible
    document.body.style.background = 'linear-gradient(135deg, #ff6f61, #ffcccb)'; // Change the background color
  }, 1000);  // Wait 1 second for the fade-out effect
});

// When mouse hovers over "No", it moves randomly
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
