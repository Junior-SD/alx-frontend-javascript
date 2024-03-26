export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const res = listStudents.filter((x) => x.location === city);

  const newResult = res.map((items) => {
    const grades = newGrades.find((g) => g.studentId === items.id);
    return { ...items, grade: grades ? grades.grade : 'N/A' };
  });

  return newResult;
}
