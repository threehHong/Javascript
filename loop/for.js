/* 
for
*/
let str = '';
for(let i = 0; i < 9; i++) {
    str += i;
}
console.log(str); // 012345678
console.log('\n');



/* 
for of
배열에 대한 반복문
*/
const fruits = ['apple', 'banana', 'orange'];

for(fruit of fruits) {
    console.log(fruit);
}
console.log('\n');
// apple
// banana
// orange



/* 
for in 
객체에 대한 반복문
*/
const car = {
    maker: "BMW",
    color: "red",
    year: "2010",
}

for(prop in car) {
    console.log(prop, car[prop]);
}
// maker BMW
// color red
// year 2010
