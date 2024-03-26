export default function hasValuesFromArray(set, array) {
  let value = true;

  array.forEach((e) => {
    if (!set.has(e)) {
      value = false;
    }
  });

  return value;
}
