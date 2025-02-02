const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.classList.remove('hidden');
  document.body.style.background = 'linear-gradient(135deg, #ff6f61, #ffcccb)';
});

noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
// Existing JavaScript code
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.classList.remove('hidden');
  document.body.style.background = 'linear-gradient(135deg, #ff6f61, #ffcccb)';
});

noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Add new JavaScript code here (if needed)
