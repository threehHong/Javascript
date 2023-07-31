/* 
상속(inheritance)
기존에 정의된 클래스 내용을 가져오는 것 

규칙
class 새로운 클래스명(자식 클래스) extends 상속 받고자 하는 클래스명(부모 클래스)
super() - 상속 받고자하는 부모 클래스의 constructor 함수를 호출.

overriding
자식과 부모의 클래스가 똑같은 이름의 메소드를 가지고 있을 때 자식 클래스의 메소드가 불리게 하는 것.
*/
'use strict'

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    addCityInfo(_city) {
        this.city = _city
    }

    isOlderThan(_value) {
        if(this.age >= _value) {
            return true;
        } else {
            return false;
        }
    }
    
    showInfo() {
        console.log(`나의 이름은 ${this.name}이고, 나이는 ${this.age}입니다. ${this.city}에 살고 있습니다.`);
    }
}

// 상속
class Student extends Person {
    constructor(_name, _age, _dream) {
        // super() - Person의 constructor 함수를 호출.
        super(_name, _age);
        this.dream = _dream;
    }

    showInfo() {
        super.showInfo();
        console.log(`장래희망은 ${this.dream}입니다.`);
    }
}

const b = new Student('Sam', 22, 'teacher');
// super를 통해 Person에 입력된 내용을 전부 상속 받았기 때문에 사용 가능.
b.addCityInfo('Busan');
b.showInfo();