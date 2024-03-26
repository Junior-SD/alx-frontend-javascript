/* Returns an array of objects with attributes id, firstName and location */

export default function getListStudents() {
  const items = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return items;
}
