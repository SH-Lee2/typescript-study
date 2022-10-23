interface Stack {
	readonly size: number;
	push(value: string): void;
	pop(): string;
}

type StackNode = {
	readonly value: string;
	readonly next?: StackNode;
};

class StackImpl implements Stack {
	private _size: number = 0; // 내부 외부 같이 사용하는 이름은 '_' 붙여줌
	private head?: StackNode;

	get size(): number {
		return this._size;
	}

	constructor(private capacity: number) {}

	push(value: string) {
		if (this.capacity === this._size) throw new Error("스택 용량 초과!");
		const node: StackNode = { value, next: this.head };
		this.head = node;
		this._size++;
	}

	pop(): string {
		if (this.head == null) throw new Error("스택이 비어있습니다!");
		const node = this.head;
		this.head = node.next;
		this._size--;
		return node.value;
	}
}

const stack = new StackImpl(10);
stack.push("sihyeong 1");
stack.push("sihyeong 2");
stack.push("sihyeong 3");

while (stack.size !== 0) {
	stack.pop();
}
