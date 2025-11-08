const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const coverImage = document.getElementById('coverImage');

let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener('play', () => {
  isPlaying = true;
  playIcon.textContent = '⏸';
  coverImage.classList.add('spin');
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playIcon.textContent = '▶';
  coverImage.classList.remove('spin');
});
