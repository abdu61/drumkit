function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  //Background animation
// Function to create a span with random properties
function createSpan() {
    const span = document.createElement('span');
    const size = Math.random() * 15;

    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.borderRadius = `80%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";
    span.style.transition = 'all 0.7s ease-out'; 
    span.style.background = 'white';

    return span;
}

// Main animation function
function backgroundAnimation() {
    const section = document.querySelector('main');
    const span = createSpan();

    section.appendChild(span);
    setTimeout(() => {span.remove()}, Math.random() * 4000 + 3000);
}

setInterval(backgroundAnimation, 150);