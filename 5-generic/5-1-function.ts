{
	// 제네릭 어떤 타입이든 사용가능, 그것을 사용할때 타입을 받는다
	function checkNotNull<T>(arg: T | null): T {
		if (arg === null) throw new Error("not valid number!");
		return arg;
	}

	const number = checkNotNull(123); // number
	const str = checkNotNull("hello"); // string
	const boal = checkNotNull(false); // boolean
}
