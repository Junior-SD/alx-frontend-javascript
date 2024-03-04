export default function createIteratorObject(report) {
  /* eslint-disable */
  const departments = Object.values(report);

  let index = 0;
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];

      if (currentEmployeeIndex >= currentDepartment.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const currentEmployee = currentDepartment[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: currentEmployee, done: false };
    }
  };
}

export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let employee = reportWithIterator.next();

  while (!employee.done) {
    result += employee.value + '|';
    employee = reportWithIterator.next();
  }

  // Remove the trailing '|'
  result = result.slice(0, -1);

  return result;
}
