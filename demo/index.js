import { scribbleTarget, setAttrs, style, pick } from '../src'

const scribbler = scribbleTarget('#character path');
const DELAY = 5;

const makeCharacter = () => setAttrs(scribbler.fitCurve(100), {
  fill: 'none',
  stroke: pick(['#3881f5', '#f59d38', '#db3535', '#d145ae', '#2ab091']),
  'stroke-width': '1',
  pathLength: 1,
  style: style({
    'stroke-dasharray': 1,
    'animation-name': 'dash',
    'animation-timing-function': 'linear',
    'animation-iteration-count': 1,
    'animation-direction': 'normal',
    'animation-duration': `${DELAY}s`,
    'animation-fill-mode': 'forwards'
  })
});

const canvas = document.getElementById('canvas');
let lastCharacter;
const makeAndScheduleCharacter = () => {
  if (lastCharacter) {
    lastCharacter.remove();
  }
  lastCharacter = makeCharacter();
  canvas.appendChild(lastCharacter);
  setTimeout(makeAndScheduleCharacter, DELAY * 1000 + 200);
};
makeAndScheduleCharacter();
