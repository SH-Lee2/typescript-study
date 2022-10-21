{
	// JavaScript
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// TypeScript : 인자값과 리턴값에 되도록이면 타입을 선언해줘라
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript
	// function jsFetchNum(id) {
	// 	// code ...
	// 	// code ...
	// 	// code ...
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// TypeScript
	function FetchNum(id: string): Promise<number> {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100); // 숫자 리턴
		});
	}

	// TypeScript unique syntax
	// Optional parameter '?'
	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		lastName && console.log(lastName);
	}
	printName("sihyeong");
	printName("Lee");

	// Default parameter
	function printMessage(message: string = "Default Message") {
		console.log(message);
	}
	printMessage();

	// Rest parameter
	function printRest(...arg: Array<number>): number {
		return arg.reduce((a, b) => a + b, 0);
	}
	printRest(1, 2, 3, 4);
}
