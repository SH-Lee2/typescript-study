{
	/**
	 * Type Aliases
	 * 내 맘데로 타입 만든다
	 */
	type Text = string;
	const name: Text = "sihyeong";
	const address: Text = "Ulsan";

	type Num = number;
	type Student = {
		name: string;
		age: number;
	};

	const student: Student = {
		name: "sihyeong",
		age: 26,
	};

	/**
	 * String Literal Types
	 * 대신 변경 불가능
	 */
	type Name = "sihyeong";
	let realName: Name;
}
