// 논리연산자의 단축 평가

// A || B, A && B -> 연산의 값을 결정한 피연산자를 return

//           OR    AND
// ---------------------
//  0   0     0     0
//  0   1     1     0
//  1   0     1     0
//  1   1     1     1


console.log('cat' || 'dog');  // cat
console.log('cat' && 'dog');  // dog 
console.log(true || 'dog');   // true
console.log(0 || undefined);  // undefined
console.log(false && 'dog');  // false
