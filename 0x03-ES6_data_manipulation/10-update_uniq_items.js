/**
 * updateUniqueItems: returns an updated map for all items with initial
 * quantity at 1
 *
 * @param: {oldMap} - a map
 *
 * Return: a new map
 *
 * @author: Isaac <github.com/Bigizic>
 */

export default function updateUniqueItems(oldMap) {
  let updated = false;
  if (!(oldMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  oldMap.forEach((value, key) => {
    if (value === 1) {
      oldMap.set(key, 100);
      updated = true;
    }
  });

  if (!updated) {
    throw new Error('Cannot process');
  }

  return oldMap;
}
