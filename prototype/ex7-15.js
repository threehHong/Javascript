// 예제 7-15 ES5와 ES6의 클래스 문법 비교
// ES6 - Class 예제 설명 -> ES5 - 생성자 함수 설명.

/* 
1.
따로 할당하지 말고 
var ES5 = function (name) {
  this.name = name'
  여기에 statcMethod 함수 선언해보기
}
*/

// ES5 - 생성자 함수
var ES5 = function (name) {
  this.name = name;
};

// ES5가 생성자 함수이고 ES5.staticMethod를 해야 ES5에
ES5.staticMethod = function () {
  return this.name + " staticMethod";
};

ES5.prototype.method = function () {
  return this.name + " method";
};

var es5Instance = new ES5("es5");
console.log(ES5.staticMethod()); // es5 staticMethod
console.log(es5Instance.method()); // es5 method

// ES6 - Class
/* 
1. 
- ES6.prototype에 constructor, method가 정의되어 있다. 
- ES6의 인스턴스를 통해 ES6 클래스에서 정의한 내용들을 사용할 수 있다.
- constructor 내부에는 class의 constructor 함수에서 정의한 속성과 함수들 그리고 static으로 정의된 함수 등이 저장된다.

2. 
static으로 정의된 staticMethod 함수는 생성자 함수 내부에 정의 되어 있고
ES6.을 통해 인스턴스 없이 클래스로 바로 사용할 수 있다(인스턴스에서는 사용할 수 없다?).
*/

var ES6 = class {
  constructor(name) {
    this.name = name;
  }

  /* 
  static으로 함수를 정의할 경우 해당 클래스의 인스턴스로 접근하여 사용 할 수 없다(그런데 constructor에는 static으로 정의한 함수가 들어있다, 클래스.prototype으로 확인해보기).
  
  대신 클래스 자체에서 해당 함수에 접근하여 사용할 수 있다.
  */
  static staticMethod() {
    return this.name + " staticMethod";
  }

  method() {
    return this.name + " method";
  }
};

var es6Instance = new ES6("es6");
console.log(ES6.staticMethod()); // ES6 staticMethod
console.log(es6Instance.method()); // ES6 method
