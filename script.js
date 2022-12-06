const panels = document.querySelectorAll('.panel');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// EXPANDING CARDS CODE
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// PROGRESS BAR CODE
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
  // console.log(currentActive);
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
  // console.log(currentActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  let barFill = ((actives.length - 1) / (circles.length - 1)) * 100;
  barFill -= 100 / (circles.length - 1);
  // console.log(barFill);
  progress.style.width = barFill + '%';

  if (currentActive === 1) {
    progress.style.width = 0;
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
