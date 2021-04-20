class BinarySearchTree {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	dfs(values = []) {
		// traverse the nodes, adding them to values array

    // if left branch exists, recursively search the nodes there
    // then add the value at the current node to the array
		if (this.left) {
			values = this.left.dfs(values);
		}
		values.push(this.value);

    // recursively search the right branch
		if (this.right) {
			values = this.right.dfs(values);
		}
		return values;
	}
}
