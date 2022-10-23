{
	interface Stack<T> {
		readonly size: number;
		push(value: T): void;
		pop(): T;
	}

	type StackNode<T> = {
		readonly value: T;
		readonly next?: StackNode<T>;
	};

	class StackImpl<T> implements Stack<T> {
		private _size: number = 0; // 내부 외부 같이 사용하는 이름은 '_' 붙여줌
		private head?: StackNode<T>;

		get size(): number {
			return this._size;
		}

		constructor(private capacity: number) {}

		push(value: T) {
			if (this.capacity === this._size) throw new Error("스택 용량 초과!");
			const node = { value, next: this.head };
			this.head = node;
			this._size++;
		}

		pop(): T {
			if (this.head == null) throw new Error("스택이 비어있습니다!");
			const node = this.head;
			this.head = node.next;
			this._size--;
			return node.value;
		}
	}

	const stack = new StackImpl<string>(10);
	stack.push("sihyeong 1");
	stack.push("sihyeong 2");
	stack.push("sihyeong 3");

	while (stack.size !== 0) {
		stack.pop();
	}
}
