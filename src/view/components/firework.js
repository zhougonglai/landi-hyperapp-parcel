import {h} from 'hyperapp';
import anime from 'animejs';

const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

const render = (ctx, el) => 
  anime({
    duration: Infinity,
    update() {
      ctx.clearRect(0, 0, el.width, el.height);
    }
  })

function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  }
}


const updateCoords = e => ({
  pointerX : e.clientX || e.touches[0].clientX,
  pointerY : e.clientY || e.touches[0].clientY
})

const createParticule = (ctx, x, y) => {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  return p;
}

const createCircle = (ctx,x,y) => {
  const p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = .5;
  p.lineWidth = 6;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

const animateParticules = (ctx, x,y) => {
  const circle = createCircle(ctx, x, y);
  const particules = [];
  for (let i = 0; i < 30; i++) {
    particules.push(createParticule(ctx, x, y));
  }

  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  })
  .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),  
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

const fireworks = el => {
  let ctx = el.getContext('2d');
  el.width = window.innerWidth * 2;
  el.height = window.innerHeight * 2;
  el.style.width = window.innerWidth + 'px';
  el.style.height = window.innerHeight + 'px';
  ctx.scale(2, 2);
  document.addEventListener('touchstart', ev =>{
    const coords = updateCoords(ev);
    render(ctx, el).play();
    animateParticules(ctx, coords.pointerX, coords.pointerY);
  }, false);
}

export const FireWork = () => 
  <canvas class="fireworks" oncreate={fireworks}></canvas>