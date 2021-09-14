function sumSalary(obj) {
  let sum = 0;
  for (let salary of Object.values(obj)) {
    if (typeof salary === "number" && Number.isFinite(salary)) {
      sum += salary;
    }
  }
  return sum;
}
