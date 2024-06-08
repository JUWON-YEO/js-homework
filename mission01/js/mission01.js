// 문제 1

function getValueAtObject(obj, key) {
  let value = obj[key];
  // value가 참인 경우 값을 리턴, 아닌 경우 에러 출력
  if (value) {
    return value;
  } else if (!value) {
    throw new Error("키가 존재하지 않습니다");
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age')); // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !

// 문제 2
function getNumberAtArray(arr, index) {
  //isArray로 배열이 맞는지 확인. 배열이 아닐 경우 에러 출력
  if (!Array.isArray(arr)) {
    throw new Error("배열이 아님!");
  }
  // index값이 0보다 크거나 같고 배열의 길이보다 작은 경우 배열의 인덱스 값을 출력, 아닐 경우 에러를 출력
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    throw new Error("유효한 인덱스가 아님!");
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
