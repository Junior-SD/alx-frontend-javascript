export default function cleanSet(set, startString) {
  const slice = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const x of set.values()) {
    if (typeof x === 'string' && x.startsWith(startString)) {
      const result = x.substring(startString.length);
      if (result && result !== x) {
        slice.push(result);
      }
    }
  }

  return slice.join('-');
}
