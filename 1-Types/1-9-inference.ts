{
	/**
	 * Type Inference 타입 추론
	 */

	let text = "hello"; // string
	// text = 1 // Type 'number' is not assignable to type 'string'

	//파라미터의 타입을 명시하지 않으면 자동으로 any 타입이 부여되기 때문에 인자의 타입은 주는게 좋다. 물론 리턴값도!!!!
	function print(message = "hello") {
		// 자동 string
		console.log(message);
	}
}
