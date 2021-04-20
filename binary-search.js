function binarySearch(array, value, start, end) {
	// if start/end indices are omitted, function uses the start and end of the array
	var start = start === undefined ? 0 : start;
	var end = end === undefined ? array.length : end;

	if (start > end) {
		return -1;
	}

	// pick an index in the middle of the start and end indices and check the item at that index
	console.log(`Start: ${start}, End: ${end}`);
	const index = Math.floor((start + end) / 2);
  console.log(`Index: ${index}`);
	const item = array[index];
  console.log(`Item: ${item}`);

	if (item == value) {
		return index;
	} else if (item < value) {
		return binarySearch(array, value, index + 1, end);
	} else if (item > value) {
		return binarySearch(array, value, start, index - 1);
	}
}

const array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const value = 16;
// const start = 0;
// const end = 5;

console.log(binarySearch(array, value));

/*

1. Searching for 8:
Start: 0, End: 10
Index: 5
Item: 12
Start: 0, End: 4
Index: 2
Item: 6
Start: 3, End: 4
Index: 3
Item: 8
3

2. Searching for 16:
Start: 0, End: 10
Index: 5
Item: 12
Start: 6, End: 10
Index: 8
Item: 17
Start: 6, End: 7
Index: 6
Item: 14
Start: 7, End: 7
Index: 7
Item: 15
-1
*/
