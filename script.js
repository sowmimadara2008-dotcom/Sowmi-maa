// script.js
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const arrow = document.getElementById('arrow');
  const waveOverlay = document.getElementById('wave-overlay');
  
  const sceneArrow = document.getElementById('scene-arrow');
  const sceneGreeting = document.getElementById('scene-greeting');
  const sceneSorry = document.getElementById('scene-sorry');
  const sceneCake = document.getElementById('scene-cake');
  const sceneGallery = document.getElementById('scene-gallery');
  const sceneLetter = document.getElementById('scene-letter');
  const sceneLove = document.getElementById('scene-love');

  const btnToSorry = document.getElementById('btn-to-sorry');
  const btnToCake = document.getElementById('btn-to-cake');
  const btnToGallery = document.getElementById('btn-to-gallery');
  const btnToLetter = document.getElementById('btn-to-letter');
  const btnToLove = document.getElementById('btn-to-love');
  const blowCandleBtn = document.getElementById('blow-candle-btn');
  const flame = document.getElementById('flame');
  const musicToggle = document.getElementById('music-toggle');

  let holdTimer;

  arrow.addEventListener('mousedown', startHold);
  arrow.addEventListener('touchstart', startHold);
  arrow.addEventListener('mouseup', releaseHold);
  arrow.addEventListener('touchend', releaseHold);

  function startHold() {
    holdTimer = setTimeout(() => {
      triggerWaveAnimation();
    }, 800);
  }

  function releaseHold() {
    clearTimeout(holdTimer);
  }

  function triggerWaveAnimation() {
    bgMusic.play().catch(() => console.log('Audio autoplay blocked'));
    waveOverlay.classList.add('active');

    setTimeout(() => {
      sceneArrow.classList.remove('active');
      sceneGreeting.classList.add('active');
      waveOverlay.classList.remove('active');
    }, 1200);
  }

  btnToSorry.addEventListener('click', () => {
    sceneGreeting.classList.remove('active');
    sceneSorry.classList.add('active');
  });

  btnToCake.addEventListener('click', () => {
    sceneSorry.classList.remove('active');
    sceneCake.classList.add('active');
  });

  blowCandleBtn.addEventListener('click', () => {
    flame.classList.add('off');
    blowCandleBtn.classList.add('hidden');
    btnToGallery.classList.remove('hidden');
  });

  btnToGallery.addEventListener('click', () => {
    sceneCake.classList.remove('active');
    sceneGallery.classList.add('active');
  });

  btnToLetter.addEventListener('click', () => {
    sceneGallery.classList.remove('active');
    sceneLetter.classList.add('active');
  });

  btnToLove.addEventListener('click', () => {
    sceneLetter.classList.remove('active');
    sceneLove.classList.add('active');
  });

  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  });
});
