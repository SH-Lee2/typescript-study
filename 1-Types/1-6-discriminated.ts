{
	/**
	 * 구분할수 있는 속성 값을 준다.
	 */

	type LoginState = Success | Fail;
	type Success = {
		result: "success";
		response: {
			body: string;
		};
	};
	type Fail = {
		result: "fail";
		reason: string;
	};

	// printLoginState(state) => console.log
	// success -> body에 성공
	// fail => reason 실패

	function pringLoginState(state: LoginState) {
		if (state.result === "success") {
			console.log("성공");
		} else {
			console.log("실패");
		}
	}
}
