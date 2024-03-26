export const weakMap = new WeakMap();

const MAXIMUM_CALLS = 5;

export function queryAPI(arg) {
  if (!weakMap.has(arg)) {
    weakMap.set(arg, 0);
  }
  weakMap.set(arg, weakMap.get(arg) + 1);
  if (weakMap.get(arg) >= MAXIMUM_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
