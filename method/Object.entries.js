const person = {
  name: "Kim",
  address: "Seoul",
  __proto__: { age: 30 },
};

console.log(Object.entries(person)); // [["name", "Kim"], ["address", "Seoul"]]

Object.entries(person).forEach(([Key, value]) => {
  console.log(Key, value);
});
/* 
name Kim
address Seoul
*/
