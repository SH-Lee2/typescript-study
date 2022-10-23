{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// public -> default  외부에서 모두 접근가능하며 수정가능
	// private 외부에서는 보이지 않음 접근 불가
	// protected 외부 접근은 안되지만 이 클래스를 상속한 자식 클래스는 접근 가능함
	class CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT = 7;
		private coffeeBeans: number = 0;

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		// static을 사용하여 instance를 만들수 있는 함수가 있다면 보통은 constructor를 통해 만드는것 보다 이 함수를 통해 만드는것을 권장할때도 사용한다.
		// 그래서 이때는 constructor에 private를 주어 makeMachine를 통해서만 instance를 생성할 수 있게 한다.
		// factory method 패턴
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		fillCoffeeBeans(coffeeBeans: number): void {
			if (coffeeBeans < 0)
				throw new Error("value for coffeeBeans should be greater than 0");
			this.coffeeBeans += coffeeBeans;
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

	const maker = CoffeeMaker.makeMachine(32);
	maker.fillCoffeeBeans(32);

	/**
	 * constructor에서 한번 할당하면 그 값이 변하지 않는다.
	 * 그렇기 때문에 get 을 사용하여 fullName을 받아온다 ( 호출할때의 first, last name을 받아옴)
	 */
	class User {
		private internalAge = 0;

		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		set age(num: number) {
			if (num < 0) throw new Error("value for age should be greater than 0");
			this.internalAge = num;
		}

		get age(): number {
			return this.internalAge;
		}

		// 인자에 private, public , protected를 설정해주면 자동으로 맴버변수가 된다 (this.firstName)
		constructor(private firstName: string, private lastName: string) {}
	}
	const user = new User("Steve", "Jobs");
	user.age = 6;
	console.log(user.fullName, user.age);
}
