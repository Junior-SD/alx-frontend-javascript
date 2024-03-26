/* returns an array of objects who are located in a specific city */

export default function getStudentsByLocation(students, locations) {
  return students.filter((x) => x.location === locations);
}
