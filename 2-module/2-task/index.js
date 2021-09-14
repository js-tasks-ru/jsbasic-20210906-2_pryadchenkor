function isEmpty(obj) {
  // for (let data in obj) {
  //   if (obj.hasOwnProperty(data)) {
  //     return false;
  //   }
  // }
  // return true;
  return Object.keys(obj).length === 0
    && obj.constructor === Object;
}
