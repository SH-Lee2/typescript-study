{
	/**
	 * Type Assertions 💩
	 * 강제 , 타입 단언
	 * result as string
	 * <string> result
	 * 만약 result 가 number | undefined일때 result! 하면 무조건 number가 된다.
	 */

	function jsStrFunc(): any {
		return "hello";
	}
	const result = jsStrFunc(); // result 는 any
	//console.log(result.length) // result는 any 타입이기때문에 문자열 api를 사용할 수 없다.
	console.log((result as string).length);
}
