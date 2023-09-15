var extendClass = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;

  SubClass.prototype.super = function (propName) {
    var self = this;
    if (!propName)
      return function () {
        SuperClass.apply(self, arguments);
      };

    var prop = SuperClass.prototype[propName];

    if (typeof prop !== "function") {
      // prop 의 타입이 함수가 아닌 경우
      console.log(prop, 1);
      return prop;
    }

    return function () {
      return prop.apply(self, arguments);
    };
  };
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

var Square = extendClass(
  Rectangle,
  function (width) {
    this.super()(width, width);
  },
  {
    getArea: function () {
      console.log("size is :", this.super("getArea")); //size is : 100
    },
  }
);

var sq = new Square(10);
sq.getArea();
console.log(sq.super("getArea")()); // 100
