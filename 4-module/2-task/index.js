function makeDiagonalRed(table) {
  const tableRow = table.getElementsByTagName("tr");

  const trArr = [...tableRow];
  const newArr = [];
  for (let item of trArr) {
    const tableData = item.getElementsByTagName("td");
    const tdArr = [...tableData];
    newArr.push(tdArr);
  }

  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i][i].style.backgroundColor = "red";
  }
}
