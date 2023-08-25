/* 
push
배열의 끝에 하나 이상의 요소를 추가하고, 추가된 배열의 전체 길이를 반환하는 메소드.

pop
배열의 마지막 요소를 제거하고 그 요소를 반환하는 메소드.
*/

// push
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(animals, count); // ['pigs', 'goats', 'sheep', 'cows'];, 4

// pop
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // "tomato"
