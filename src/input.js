import {
  normalize,
  add,
  sub,
  dist,
  mul,
} from './utils/linalg';
import { element, d } from './utils/html'
import { orderPoints } from './ordering';

export class Input {
  constructor(selector) {
    this.pathsByLength =
      [ ...document.querySelectorAll(selector) ]
        .map(path => ({ path, length: path.getTotalLength() }));
    this.totalLength = this.pathsByLength
      .reduce((total, { length }) => total + length, 0);
  }

  fitCurve(numPoints) {
    const points = this.sampleAndOrder(numPoints);
    const instructions = this.fitCurveToPoints(points);
    const path = element('path', {
      d: d(instructions),
      fill: 'none',
      stroke: 'black',
      'stroke-width': '1',
    });

    return path
  }

  fitCurveToPoints(points) {
    const controlPoints = [];
    points.forEach(({ point, tangent }, i) => {
      if (i > 0) {
        const d = dist(point, points[i - 1].point);
        controlPoints.push(sub(point, mul(tangent, d / 3)));
      }
      controlPoints.push(point);
      if (i < points.length - 1) {
        const d = dist(point, points[i + 1].point);
        controlPoints.push(add(point, mul(tangent, d / 3)));
      }
    });
    
    const instructions = [
      ['M', controlPoints[0]]
    ];
    for (let i = 1; i < controlPoints.length; i += 3) {
      instructions.push(['C', ...controlPoints.slice(i, i + 3)]);
    }
    
    return instructions;
  }

  sampleAndOrder(numPoints, orderOptions) {
    const samples = [];
    for (let i = 0; i < numPoints; i++) {
      samples.push(this.getSample());
    }
    return orderPoints(samples, orderOptions)
  }

  getSample() {
    const { totalLength } = this
    const dt = 0.001;
    const globalT = Math.random() * totalLength;
    const { t, path } = this.toLocalPath(globalT);
    
    const p1 = path.getPointAtLength(t);
    const p2 = path.getPointAtLength(Math.min(t + dt, path.getTotalLength()));
    const tangent = normalize(sub(p2, p1));
    return { point: p1, tangent, path };
  };

  toLocalPath(length) {
    const { pathsByLength } = this
    let localPath = pathsByLength[0].path;
    let remaining = length;
    for (const { path, length } of pathsByLength) {
      if (remaining < length) {
        localPath = path;
        break;
      }
      remaining -= length;
    }
    return { t: remaining, path: localPath };
  }
}
