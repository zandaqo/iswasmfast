function merge(left, right) {
  const sorted = [];
  while (left && left.length > 0 && right && right.length > 0) {
    sorted.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return sorted.concat(left, right);
}

function mergesort(arr) {
  const list = Array.from(arr);
  if (list.length <= 1) { return list; }

  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid, list.length);

  return merge(mergesort(left), mergesort(right));
}

module.exports = mergesort;
