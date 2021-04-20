class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);

		if (this.first === null) {
			this.first = node;
		}

		if (this.last) {
			this.last.next = node;
		}

		// make the new node the last item on the queue
		this.last = node;
		this.size++;
	}

	dequeue() {
		// if queue is empty, there is nothing to remove
		if (this.first === null) {
			return;
		}
		const node = this.first;
		this.first = this.first.next;

		// if this is the last item in the queue
		if (node === this.last) {
			this.last = null;
		}
		this.size--;
		return node.value;
	}

	bfs(tree, values = []) {
		// Assuming a Queue is implemented
		const queue = new Queue();
		const node = tree.root;
		queue.enqueue(node);
		while (queue.length) {
			const node = queue.dequeue(); //remove from the queue
			values.push(node.value); // add that value from the queue to an array

			if (node.left) {
				queue.enqueue(node.left); //add left child to the queue
			}

			if (node.right) {
				queue.enqueue(node.right); // add right child to the queue
			}
		}

		return values;
	}
}
