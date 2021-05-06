import {
  add,
  sub,
  norm,
  normalize,
  mul,
  dot,
  dist,
} from './utils/linalg'
import { zip } from './utils/array'

// options: {
//   numIts: optional number of optimization iterations
//   allowFlippedTangents: whether to also optimize tangent orientation
//
//   distWeight: weight of distance between samples
//   tangentWeight: weight of tangent incompatibility * distance between samples
//   strokeJoinPenalty: cost of connecting points from different strokes
// }
export const orderPoints = (points, options = {}) => {
  const samples = [...points];
  const n = samples.length;

  const numIts = options.numIts || 20 * n;
  const scores = pointScores(samples, options);
  for (let it = 0; it < numIts; it++) {
    const worstIdx = scores.indexOf(Math.max(...scores));
    scores.splice(worstIdx, 1);

    const [toInsert] = samples.splice(worstIdx, 1);
    const toInsertFlipped = {
      point: toInsert.point,
      tangent: mul(toInsert.tangent, -1)
    };

    const insertRegular = bestLocation(samples, toInsert, options);
    const insertFlipped = options.allowFlippedTangents
      ? bestLocation(samples, toInsertFlipped, options)
      : { minScore: Infinity };

    if (insertRegular.minScore < insertFlipped.minScore) {
      samples.splice(insertRegular.idx, 0, toInsert);
      scores.splice(
        insertRegular.idx,
        0,
        pointScoreAt(samples, insertRegular.idx)
      );
    } else {
      samples.splice(insertFlipped.idx, 0, toInsert);
      scores.splice(
        insertFlipped.idx,
        0,
        pointScoreAt(samples, insertFlipped.idx, options)
      );
    }
  }

  return samples;
};

const bestLocation = (points, toInsert, options) => {
  const locationScores = [];
  for (let i = 0; i <= points.length; i++) {
    if (i === 0) {
      locationScores.push(pairwiseScore(toInsert, points[0], options));
    } else if (i === points.length) {
      locationScores.push(pairwiseScore(points[points.length - 1], toInsert, options));
    } else {
      locationScores.push(
        (
          pairwiseScore(points[i - 1], toInsert, options) +
          pairwiseScore(toInsert, points[i], options)
        ) / 2
      );
    }
  }
  const minScore = Math.min(...locationScores);
  const idx = locationScores.indexOf(minScore);
  return { idx, minScore };
};

const pointScores = (points, options) => {
  const rawScores = [];
  for (let i = 1; i < points.length; i++) {
    rawScores.push(pairwiseScore(points[i - 1], points[i], options));
  }
  const scores = zip([
    [rawScores[0], ...rawScores],
    [...rawScores, rawScores[rawScores.length - 1]]
  ]).map(([l, r]) => (l + r) / 2);

  return scores;
};

const pointScoreAt = (points, i, options) => {
  let total = 0;
  let terms = 0;
  if (i > 0) {
    total += pairwiseScore(points[i - 1], points[i], options);
    terms++;
  }
  if (i < points.length - 1) {
    total += pairwiseScore(points[i], points[i + 1], options);
    terms++;
  }
  if (terms > 0) total /= terms;
  return total;
};

const pairwiseScore = (p1, p2, options = {}) => {
  const distWeight = options.distWeight ?? 0.0001;
  const tangentWeight = options.tangentWeight ?? 1;
  const strokeJoinPenalty = options.strokeJoinPenalty ?? 100000;

  let vec = sub(p2.point, p1.point);
  const dist = norm(vec);
  vec = mul(vec, 1 / Math.max(1e-4, dist));
  const t1 = p1.tangent;
  const t2 = p2.tangent;
  return dist * (
    distWeight + (
      tangentWeight * Math.acos(dot(t1, vec)) * Math.acos(dot(mul(t2, -1), vec))
    ) / (Math.PI * Math.PI)
  ) + (p1.path === p2.path ? 0 : strokeJoinPenalty);
}
