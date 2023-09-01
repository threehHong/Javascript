// 화살표 함수

// 대괄호 없으면 return이 없어도 반환.
addEventListener("load", function (e) {
  const sum = (a, b) => a + b;

  const result = sum(1, 2);

  document.querySelector(".text").innerHTML = `결과 : ${result}`;
});
