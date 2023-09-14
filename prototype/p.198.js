// 예제 7-15 ES5와 ES6의 클래스 문법 비교

// ES5
var ES5 = function (name) {
  this.name = name;
};

ES5.staticMethod = function () {
  return this.name + "staticMethod";
};

ES5.prototype.method = function() {
    return this.name + ' method';
}

// ES6
