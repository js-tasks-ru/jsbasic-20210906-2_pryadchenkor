function showSalary(users, age) {
  return users
    .filter((user) => user.age <= age)
    .map((user, index) => index ? `${user.name}, ${user.balance}` : `${user.name}, ${user.balance}` )   
    .join("\n");
}
