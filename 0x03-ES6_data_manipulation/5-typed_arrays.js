export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  const dataView = new DataView(buffer);
  return dataView;
}
