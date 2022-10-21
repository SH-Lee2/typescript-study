{
	let name = "hello"; // 재할당 가능 , es6에 도입됨
	name = "hi";

	/**
	 * Primitive (원시) : number, string, boolean, bigint (더 큰 숫자), null, undefined, symbol
	 * Object : function, object, array
	 */

	/**
	 * 타입스크립트에서는 한번 정의된 타입을 변경 불가능하다.
	 */

	// number
	const num: number = 10;
	const num2: number = 1.1;

	// string
	const str: string = "hello";

	//boolean
	const boal: boolean = true;
	const boal2: boolean = false;

	// undefined 값이 있는지 없는지 결정되지 않은
	let task: undefined; // undefined 라고 타입 선언을 하면 값을 할당 하지 못하기 때문에 이렇게 사용하지 않는다.
	let age: number | undefined; // 보통은 이렇게 사용한다, 유니온 타입으로
	age = 26;
	age = undefined;
	function find(): number | undefined {
		return undefined;
	}

	// null 값이 비었다! 라고 결정됨
	let person: null; // undefined와 마찬가지로 단독으로 사용하지 않는다, 단독 사용시 값을 할당하지 못한다.
	let person2: string | null;

	//unknown  어떤 종류의 타입이 할당될지 모른다!! 어떤 데이터 타입도 담을수 있다.
	// 가능하면 사용하지 마라, 자바스크립트 라이브러리를 사용해서 타입이 뭔지 모르는경우 사용
	let notSure: unknown = 0;
	notSure = "he";
	notSure = true;

	//any 가능하면 절대 사용하지마라, 어떤것이든 모두 가능
	let anything: any = 0;
	anything = "hello";

	//void 아무것도 리턴하지 않을때 사용하며 default로 적용되어 있다.
	function print() {
		console.log("This is default type void");
	}

	//never 아무것도 없다.(리턴) => throw new Error or 무한 루프
	function throwError(message: string): never {
		throw new Error(message);
		// return  리턴 불가
	}

	//object  : 원시타입 제외 모든것을 전달 가능하지만 가능하면 사용하지말고 object가 무슨타입인지 정확하게 기술하는게 좋다.
	let obj: object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: "sihyeong" });
	acceptSomeObject({ age: 26 });
}
