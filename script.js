// Get elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const valentinePopup = document.getElementById('valentine-popup');
const loveMessagePopup = document.getElementById('love-message-popup');
const closePopup = document.getElementById('close-popup');
const loveSong = document.getElementById('love-song');

// When "Yes" is clicked, show the Valentine popup
yesBtn.addEventListener('click', () => {
  valentinePopup.style.display = 'flex';
});

// When "No" is hovered or clicked, move it randomly
noBtn.addEventListener('mouseover', () => {
  moveButtonRandomly(noBtn);
});

noBtn.addEventListener('touchstart', () => {
  moveButtonRandomly(noBtn);
});

noBtn.addEventListener('click', () => {
  moveButtonRandomly(noBtn);
});

// Function to move the button randomly
function moveButtonRandomly(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// When "Of Course!" is clicked, show the love message and play the song
closePopup.addEventListener('click', () => {
  valentinePopup.style.display = 'none';
  loveMessagePopup.style.display = 'flex';
  loveSong.play(); // Play the song after user interaction
});