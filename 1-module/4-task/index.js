function checkSpam(str) {
  newStr = str.toLowerCase();
  if (
    newStr.includes("1xBet".toLowerCase()) ||
    newStr.includes("XXX".toLowerCase())
  ) {
    return true;
  } else return false;
}
