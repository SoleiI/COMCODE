'use strict';

// Array
// 여러 개의 값을 순차적으로 나열한 자료구조
// object data type

// JS에서는 배열에 여러 가지 자료형을 넣을 수 있음 -> 권장하지 않음
// -> 다른 언어에서처럼 1가지 자료형으로 통일해서 넣기



// 1. Declaration
// 1) 배열 리터럴 : 0개 이상의 요소를 쉼표로 구분해서 대괄호로 묶기
const arr1 = [1, 2, 3];
console.log(arr1);

// 2) Array 생성자 함수 -> new 키워드 이용
const arr2 = new Array(3);
console.log(arr2);

// 3) Array.of (added in ES6)
const arr3 = Array.of(1, 2);
console.log(arr3);



// 2. length property
// 배열의 가장 큰 특징 -> data에 index로 바로 접근할 수 있다. => 삽입/삭제가 편리하다.
// array.length

console.log([].length);
console.log([1, 2, 3, 4].length);
console.log(arr1.length);

// cf) 희소 배열 : 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열

const sparse = [1, , 3, 4];
console.log(sparse);
console.log(sparse.length);

// 희소 배열의 length > 배열에 실제로 있는 요소의 개수



// 3. Index position
const fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[3]);
console.log(sparse[1]);
console.log(fruits[fruits.length - 1]);



// 4. Looping over an array
// 1) for 문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2) for of
for (let fruit of fruits) {
  console.log(fruit);
}

// 3) forEach
// array 안에 있는 각 value마다 callback 함수 수행
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));


console.clear();
// 5. Array Methods

// 1) Addition, deletion, copy

// push : array 끝에 요소 삽입
fruits.push('melon');
console.log(`push -> ${fruits}`);

// pop : array 끝에 있는 요소 삭제
fruits.pop();
console.log(`pop -> ${fruits}`);

// unshift : array 앞에 요소 삽입
fruits.unshift('lemon');
console.log(`unshift -> ${fruits}`);

// shift : array 앞에 있는 요소 삭제
fruits.shift();
console.log(`shift -> ${fruits}`);

// cf) push, pop vs unshift, shift
// push, pop => 권장
// unshift, shift

// splice : index부터 특정 개수의 요소 삭제
fruits.push('melon', 'lemon', 'peach');
console.log(`fruits : ${fruits}`);
fruits.splice(1, 3);
console.log(`splice -> ${fruits}`);
fruits.splice(1, 1, 'grape');
fruits.splice(2, 0, 'mango');
console.log(`splice -> ${fruits}`);

// concat : 두 개의 array 결합
const fruits2 = ['kiwi', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(`concat -> ${newFruits}`);


console.clear();
// 2) Searching

// indexOf : index 찾기
console.log(`fruits : ${fruits}`);
console.log(`index of 'apple' : ${fruits.indexOf('apple')}`);
console.log(`index of 'mango' : ${fruits.indexOf('mango')}`);
console.log(`index of 'lemon' : ${fruits.indexOf('lemon')}`);

// includes : 배열에 있는지 없는지 여부 -> boolean type
console.log(`apple? : ${fruits.includes('apple')}`);
console.log(`kiwi? : ${fruits.includes('kiwi')}`);

// lastIndexOf : 인자로 들어온 원소 중 가장 마지막 원소 출력
fruits.push('apple');
console.log(`fruits : ${fruits}`);
console.log(`index of 'apple' : ${fruits.indexOf('apple')}`);
console.log(`last index of 'apple' : ${fruits.lastIndexOf('apple')}`);



console.clear();
// 6. Array Methods (실습)

// Q1. 배열을 하나의 문자열로 변환하기
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits);
  //'apple,banana,orange'

  const result = fruits.join('|');
  console.log(result);
}


// Q2. 문자열을 배열로 변환하기
{
  const fruits = 'apple, banana, orange, melon, lemon'
  console.log(fruits);

  const result = fruits.split(', ', 2);
  console.log(result);
}

// Q3. 배열의 요소 순서를 거꾸로 바꾸기
{
  const array = [1, 2, 3, 4, 5];
  console.log(array);

  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. 처음 두 요소를 제외한 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  console.log(array);
  
  // 1) slice()
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);

  // 2) splice()
  const result2 = array.splice(0, 2);
  console.log(result2);
  console.log(array);
}


// Q5 ~ Q11
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 22, true, 45),
  new Student('B', 20, false, 80),
  new Student('C', 24, true, 90),
  new Student('D', 21, false, 65),
  new Student('E', 22, true, 85)
];

//hint! object에 접근하기 -> students[i].name, students[i].age 등

console.clear();
// Q5. score가 90인 student 찾기
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. enrolled인 student의 배열 만들기
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. students의 score만 포함한 배열 만들기
{
  const result = students.map((student) => student.score);
  console.log(result);
  
  const result2 = students.map((student) => 100 - student.score);
  console.log(result2);
}

// Q8. score가 50보다 낮은 학생이 있는지 확인하기
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. 학생들의 평균 score 구하기
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. students의 score만 포함한 문자열 만들기
{
  const result = students.map((student) => student.score).join();
  console.log(result);

  const result2 = students.map((student) => student.score)
    .filter((score) => score > 70)
    .join();
  console.log(result2);
}

// Q11. students의 score만 포함한 정렬된 문자열 만들기
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}