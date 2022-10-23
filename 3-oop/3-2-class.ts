{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// 생성하는 instance 마다 새로 생성하지 않고 class level에서 관리하고 싶을때는 static 사용
	class CoffeeMaker {
		static BEANS_GRAMM_PER_SHOT = 7; // class level : instance 마다 생성되지 않아서 메모리 낭비가 없다.
		coffeeBeans: number = 0; // instance (object) level : instance 마다 새로 생성됨 (맴버변수)
		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		/** constructor를 사용하지 않고 새로운 CoffeeMaker를 만들고 싶을때 사용*/
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT)
				throw new Error("not enough coffee beans!");
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

			return {
				shots,
				hasMilk: false,
			};
		}
	}

	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(14);
	console.log(maker2);
	const maker3 = CoffeeMaker.makeMachine(3);
}
