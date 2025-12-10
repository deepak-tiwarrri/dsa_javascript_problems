function dynamicArray(arr) {
  arr.push(5);
  console.log(arr);
  arr.unshift(15);
  return arr;
}
const arr = [1];
dynamicArray(arr);
