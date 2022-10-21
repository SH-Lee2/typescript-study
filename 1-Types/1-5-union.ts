{
	/**
	 * Union Types: OR
	 */

	type Direction = "left" | "right" | "up" | "down";
	function move(direction: Direction) {
		console.log(direction);
	}

	move("down"); // 자동 완성 기능 제공

	type TileSize = 8 | 16 | 24; // 값들중 하나만 사용하게 하고 싶을때 자주 사용
	const tile: TileSize = 8;

	// function: login -> success, fail

	type LoginState = Success | Fail;
	type Success = {
		response: {
			body: string;
		};
	};
	type Fail = {
		reason: string;
	};

	function login(): LoginState {
		return {
			reason: "네트워크 오류 ",
		};
	}

	async function login2(id: string, password: string): Promise<LoginState> {
		return {
			reason: "실패",
		};
	}

	// printLoginState(state) => console.log
	// success -> body에 성공
	// fail => reason 실패

	function pringLoginState(state: LoginState) {
		if ("response" in state) {
			console.log("성공");
		} else {
			console.log("실패");
		}
	}
}
