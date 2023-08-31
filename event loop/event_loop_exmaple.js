// EX1
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

// EX2
const func1 = () => setTimeout(() => console.log("First Running"), 100);
const func2 = () => console.log("1");
const func3 = () => console.log("2");
const func4 = () => console.log("3");
const func5 = () => console.log("4");
const func6 = () => console.log("5");
const func7 = () => console.log("6");
const func8 = () => console.log("7");
const func9 = () => console.log("8");
const func10 = () => console.log("9");
const func11 = () => console.log("10");

func1();
func2();
func3();
func4();
func5();
func6();
func7();
func8();
func9();
func10();
func11();
