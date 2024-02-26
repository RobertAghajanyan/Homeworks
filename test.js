let person1 = {
  age: 5,
  invalid: false,
  veteran: false,
};
let person2 = {
  age: 22,
  invalid: true,
  veteran: false,
};
let person3 = {
  age: 85,
  invalid: false,
  veteran: true,
};

function priceCalc() {
  let price = 1000;
  if (this.age >= 65 || this.age <= 6) {
    price /= 2;
  }
  if (this.invalid === true || this.veteran === true) {
    price /= 3;
  }

  return price.toFixed(0);
}

console.log(priceCalc.call(person1));
console.log(priceCalc.call(person2));
console.log(priceCalc.call(person3));

let arr = new Array(20).fill(null);
arr = arr.map(function (item, index, arra) {
  return index + 1;
});
console.log(arr);
