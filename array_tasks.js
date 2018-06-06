var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var res = [];
		arr.forEach(function(num) {
			res.push(num**2);
		});
		return res;
	},

	sum: function (arr) {
		var sum = arr.reduce(function(a, b) {
			return a + b;
		}, 0)
		return sum;
	},

	findDuplicates: function (arr) {
		var res = [];
		arr.forEach(function(num, index) {
			if (arr.indexOf(num, index + 1) > -1) {
				if (res.indexOf(num) === -1) {
					res.push(num);
				}
			}
		});
		return res;
	},

	removeAndClone: function (arr, valueToRemove) {
		var res = [];
		arr.forEach(function(num) {
			if (num !== valueToRemove) {
				res.push(num);
			}
		});
		return res;
	},

	findIndexesOf: function (arr, itemToFind) {
		var res = [];

		arr.forEach(function(num, index) {
			if (num === itemToFind) {
				res.push(index);
			}
		})
		return res;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var res = 0;
		arr.forEach(function(num) {
			if (num % 2 === 0) {
				res += num**2;
			}
		})
		return res;
	}

}

module.exports = arrayTasks
