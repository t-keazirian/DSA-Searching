function indexOf(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] == value) {
			return i;
		}
	}
	return -1;
}

const array = [1, 2, 3, 4, 5];
value = 6;
console.log(indexOf(array, value));


