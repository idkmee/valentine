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

  // Now remove the 'hidden' class after the fade out (1s delay)
  setTimeout(() => {
