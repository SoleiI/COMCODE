'use strict';

// class : 관련있는 변수나 함수를 묶어놓은 것
// 캡슐화, 상속, 다형성

// class와 object의 관계
// class : data가 없이 틀만 정의
// object : class(틀)를 토대로 data를 넣은 것

// class -> 틀
// -> 1번만 선언

// object -> 틀에 맞춘 data
// -> 여러 개 생성 가능



// 1. Class declarations
// constructor : 생성자 -> object를 만들 때 필요한 data를 전달 => 초기화

class Person {
  constructor(name, age){
    //fields(속성)
    this.name = name;
    this.age = age;
  }

  //methods(함수)
  speak() {
    console.log(`${this.name}, hello!`);
  }
}

// object 생성 -> new 키워드
const comcode = new Person('comcode', 20);
console.log(comcode.name);
console.log(comcode.age);
comcode.speak();



// 2. Getter and Setter
// getter : 무언가를 취득할 때 사용
// setter : 무언가를 property에 할당할 때 사용

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter
  get age() {   // this.age에서 호출
    return this._age;
  }

  // setter
  set age(value) {   // = age에서 호출
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -20);
// getter와 setter는 비상식적인 입력을 상식적으로 바꿔주는 역할
console.log(user1.age);



// 3. Fields (public, private)
// ES11에 추가 -> 아직 브라우저에서는 적용 X
// 생성자를 쓰지 않고도 Field 정의 가능

// default -> public : 외부에서 접근 가능
// #field -> private : class 내부에서만 접근/변경 가능

class Test {
  publicField = 2;
  #privateField = 0;

  accessPrivate() {
    return this.#privateField + 1;
  }
}

const test = new Test();
console.log(test.publicField);
console.log(test.privateField);
console.log(test.accessPrivate());



// 4. Static properties and methods
// fields, methods -> 새로운 object를 만들 때마다 복제되어 값만 할당된 값으로 변경
// object, data에 상관없이 class가 가진 고유의 값, 동일하게 반복적으로 사용되는 method
// -> static으로 지정 -> object에 상관없이 class에 연결
// => 메모리 사용량 절약 가능

class University {
  static univName = 'Sookmyung';
  constructor(univNumber) {
    this.univNumber = univNumber;
  }

  static printPublisher() {
    console.log(University.univName);
  }
}

const univ1 = new University(1);
const univ2 = new University(2);
console.log(univ1.univName);
console.log(University.univName);
University.printPublisher();



// 5. Inheritance(상속)

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

class Trianlge extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }

  getArea() {   // overriding => 다형성
    return this.width * this.height / 2;
  }

  toString() {
    return `Triangle: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Trianlge(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



// 6. instanceOf
// object가 class의 instance인지 확인 -> boolean return

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(rectangle.toString());
console.log(triangle.toString());