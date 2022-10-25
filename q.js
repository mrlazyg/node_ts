let str = 'abbbcdeffffffffghhhhhh';
let start = 0;
let map = new Map();
let maxLength = 0;
let newString = '';

for (curIndex = 0; curIndex < str.length; curIndex++) {
  if (map.has(str[curIndex])) {
    map.set(str[curIndex], map.get(str[curIndex]) + 1);
    start = Math.max(start, map.get(str[curIndex]));
  }
  if (maxLength < curIndex - start + 1) {
    maxLength = curIndex - start + 1;
    newString = str.slice(start, curIndex + 1);
  }
  map.set(str[curIndex], curIndex);
}
console.log(newString);


/* let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

for (let i = 0; i < 5; i++) {
   setTimeout((i) => console.log(i), 500);
} */

let obj = {
  name: 'xm',
  phone: 248279847987,
};

let obj1 = { ...obj };

const { name1 } = obj;

function a(a) {
  function b(z) {
    console.log(a + z);
  }
}

let arr = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
let flatArr = [];

function addElement(arr, flatArr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      addElement(arr[i], flatArr);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log(addElement(arr, []));
