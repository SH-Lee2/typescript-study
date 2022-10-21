{
	// Array
	const fruits: Array<string> = ["토마토", "바나나"];
	const scroes: number[] = [1, 2, 3];

	// Array<string> , string[] 의 차이는 readonly를 사용할때 나타나고 string[]만 사용가능
	function printArray(fruits: readonly string[]) {
		console.log("fruits 배열의 불변성을 지켜준다 => 수정 불가능");
	}

	// Tuple 서로 다른 타입을 배열에서 함께 가질수 있음
	// 데이터에 접근할떄 인덱스로 접근하는것은 피하는게 좋다. 그렇기 때문에 Tuple는 사용하지 마라~~ 대신 object를 사용 => interface, type alias, class
	let student: [string, number] = ["sihyeong", 26];
	student[0]; // sihyeong
	student[1]; // 26
}
