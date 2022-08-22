function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sum(array);
}

const array = [1, 2, 3, 4, 5, 6];
console.log(sum(array));
