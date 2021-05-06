export const add = (p1, p2) => ({ x: p1.x + p2.x, y: p1.y + p2.y });
export const mul = (p, k) => ({ x: k * p.x, y: k * p.y });
export const sub = (p1, p2) => add(p1, mul(p2, -1));
export const norm = ({ x, y }) => Math.hypot(x, y);
export const normalize = (p) => mul(p, 1 / Math.max(1e-4, norm(p)));
export const dist = (p1, p2) => norm(sub(p1, p2));
export const dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y;
