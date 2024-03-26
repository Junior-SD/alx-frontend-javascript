export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, ids) => accumulator + ids.id, 0);
}
