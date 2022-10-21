{
	/**
	 * Enum : 여러가지 상수의 값들을 한곳에 모아서 정의~!!
	 */

	// JavaScript
	const MAX_NUM = 6;
	const MONDAY = 0;
	const DAYS_ENUM = Object.freeze({ MON: 0, THU: 1 });

	// TypeScript

	enum Days {
		Monday, // 0   만약 1부터나 특정 숫자부터 시작 하고 싶으면 Monday = 1, 문자일경우 자동으로 다음값을 알수 없기 때문에 직접 모든 값을 정의해줘야함
		Tuesday, // 1
		Wendnesday, // 2
	}

	console.log(Days.Monday); // 0

	// 치명적인 단점, enum 값이외에 다른 어떠한 숫자값도 할당 가능하다. => 타입이 정확하게 보장되지 않는다
	// 대신 유니언 타입을 사용!!  type Days = 'Monday' | 'Tuesday' | 'Wendnesday'
	let day: Days = Days.Monday;
	day = 0;
	day = 10;
}
