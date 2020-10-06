const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (arr == []) return [];
	
	const array = [];

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "--discard-next":
        if (i == arr.length - 1) continue;
				i++;
				break;

			case "--discard-prev":
				if (i == 0) continue;
				if (arr[i - 2] === '--discard-next') continue;
				array.pop();
				break;

			case "--double-next":
				if (i == arr.length - 1) continue;
				array.push(arr[i + 1]);
				break;

			case "--double-prev":
        if (i == 0) continue;
				if (arr[i - 2] === '--discard-next') continue;
				array.push(arr[i - 1]);
				break;

			default: 
				array.push(arr[i]);
		}
	}
	return array;
};