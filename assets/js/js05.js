console.log(`問題一`);
let a1 = 1;
let b1 = 2;
let c1 = "1";
console.log(a1 > b1); // false
console.log(a1 == c1); // true
console.log(a1 != b1); // true
console.log(a1 !== c1); // true
console.log(a1 >= c1); // true
console.log(`問題二`);
let a2 = true || false;
let b2 = 1 && 0;
let c2 = 4 > 3 && 2 >= 2;
let d2 = !(4 > 3);
let e2 = true && 1 > 2;
console.log(a2, b2, c2, d2, e2); //
// true 0 true false false
console.log(`問題三`);
let a3 = 1;
let b3 = "1";
let c3 = a3 === b3 && a3 !== b3;
console.log(c3); // false
let e3 = "123";
let f3 = 456;
let g3 = e3 + f3 === "123456";
console.log(g3); // true
let h3 = true;
let i3 = false;
let j3 = 1 == h3;
let k3 = h3 || i3;
console.log(j3); // true
console.log(k3); // true
