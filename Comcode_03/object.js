'use strict';

// Objects
// primitive type을 제외한 나머지 값은 모두 object
// object : property(객체의 data)의 집합 -> key와 value로 구성
// object = { key : value }
// comcode = { name : 'comcode' }

// primitive type : 변수 1개당 value 1개 할당 -> 변경 불가능한 값
// object type :  primitive value 또는 다른 object를 하나의 단위로 구성 -> 변경 가능한 값



// 1. Literals and properties
// 1) object literal -> {} 이용
const obj1 = { name : 'object', age : '10' };
console.log(obj1);

// 2) object constructor -> new 이용
const obj2 = new Object();
console.log(obj2);

console.log(obj1.name);
console.log(obj1.age);

obj1.subject = 'JavaScript';
console.log(obj1.subject);
console.log(obj1);

delete obj1.subject;
console.log(obj1.subject);
console.log(obj1);



// 2. Computed properties
// key가 항상 string type

console.log(obj1['name']);
obj1['subject'] = 'JavaScript';
console.log(obj1.subject);
delete obj1['subject'];
console.log(obj1.subject);



// 3. Property value shorthand
// 함수를 이용해서 값을 전달해서 object 생성
const person1 = { name : 'bob', age : 20 };
const person2 = { name : 'steve', age : 30 };
const person3 = { name : 'comcode', age : 10 };

function makePerson(name, age) {
  return {name, age}; // key와 value 이름이 동일하면 생략할 수 있다
}
const person4 = makePerson('minseon', 22);
console.log(person4);



// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person('web', 5);
console.log(person5);



// 5. in operator
// key in object : property 존재 확인
console.log('name' in person1);
console.log('score' in person1);



// 6. for ... in
// for (key in object)
for (let key in person4) {
  console.log(key);
}



// 7. Fun cloning
const user = { name: 'comcode', age: 20 };
const user2 = user;
user2.name = 'JavaScript';
console.log(user2);
console.log(user);
// object type call by reference


// 1) for..in 이용
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

// 2) Object.assign
const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red', size: 'big' };
const fruit2 = { color: 'yellow' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);