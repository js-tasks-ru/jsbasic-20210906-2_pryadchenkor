function getMinMax(str) {
  let Numbers = str.split(" ").filter((item) => !isNaN(Number(item)));
  return {
    min: Math.min.apply(null, Numbers),
    max: Math.max.apply(null, Numbers),
  };
}
console.log(getMinMax("1 и -5.8 или 10 хотя 34 + -5.3 и 73"));
