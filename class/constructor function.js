// ex.1
function Student(name, age, major) {
  // 생략 - new 키워드를 붙여 호출시 자동으로 실행
  // this = {};

  this.name = name;
  this.age = age;
  this.major = major;
  this.sayMajor = function () {
    console.log(this.major);
  };

  // 생략 - new 키워드를 붙여 호출시 자동으로 실행
  // return this;
}

let mike = new Student("Mike", 30, "History"),
  tom = new Student("Tom", 29, "Chemical Engineering");

console.log(mike, tom);
mike.sayMajor();

// ex.2
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.showPrice = function () {
    console.log(`${name}의 가격은 ${price}원 입니다.`);
  };
}

const item1 = new Item("신발", 80000);
const item2 = new Item("가방", 50000);
const item3 = new Item("바지", 30000);

console.log(item1, item2, item3);
item1.showPrice();
