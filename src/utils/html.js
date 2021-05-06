export const ns = 'http://www.w3.org/2000/svg';

export const element = (type, attrs) =>
  setAttrs(document.createElementNS(ns, type), attrs);

export const style = (attrs) => Object.keys(attrs)
  .map(k => `${k}: ${attrs[k]};`)
  .join(' ');

export const d = (instructions) =>
  instructions
    .map(([type, ...pts]) => type + pts.map(pt => ` ${pt.x.toFixed(4)} ${pt.y.toFixed(4)}`).join(''))
    .join(' ');

export const setAttrs = (el, attrs) => {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
}
