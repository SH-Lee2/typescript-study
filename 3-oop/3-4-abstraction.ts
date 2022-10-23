{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// 이러한 행동을 할수 있다고 정의
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	// CoffeeMachine 는 CoffeeMaker, CommerCialCoffeeMaker 에 정의되어 있는 행동만 할 수 있다.
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level

		private constructor(private coffeeBeans: number = 0) {}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
		}

		clean() {
			console.log("cleaning the machine...🧼");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}

	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(45);
			this.machine.clean();
		}
	}

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	const amateur = new AmateurUser(maker);
	const pro = new ProBarista(maker);
	pro.makeCoffee();

	const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(16);
}
