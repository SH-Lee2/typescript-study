{
	/**
	 * union과 반대로 모든 속성을 다 합함 : &
	 */
	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		empolyeeId: number;
		work: () => void;
	};

	function internWork(person: Student & Worker) {
		console.log(person.empolyeeId, person.score, person.work());
	}

	// 대신 값을 할당할떄는 모든 속성값을 다 할당해줘야함

	internWork({
		name: "sihyeong",
		score: 26,
		empolyeeId: 10,
		work: () => console.log("Hi"),
	});
}
