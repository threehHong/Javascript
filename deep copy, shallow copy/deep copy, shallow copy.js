// deep copy - 깊은 복사
let num1 = 1;
let num2 = num1;

num2 = 2;

console.log(num1, num2); // 1, 2  


// shallow copy - 얕은 복사
const student = {
    name: 'Tom',
    age: 25,
}

let studentCopy = student;

student.name = 'Mike';

console.log(studentCopy);