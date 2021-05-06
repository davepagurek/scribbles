export const zip = (arrays) => {
  const result = [];
  const n = Math.max(...arrays.map(a => a.length));
  for (let i = 0; i < n; i++) {
    result.push(arrays.map(a => a[i]));
  }
  return result;
};

export const pick = (array) =>
  array[Math.floor(Math.random() * array.length)];
