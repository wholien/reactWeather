// function getTempCallBack(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallBack('Philadelphia', function(err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err); 
// })

//challengeArea
function addPromise(a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		}
		reject("These are not both numbers");
	});
}

addPromise(1, 1).then(function (sum) {
	console.log(sum);
}, function (err) {
	console.log("These are not both numbers");
});

addPromise(1, "lol").then(function (a, b) {
	console.log(a);
	console.log(b);
	var sum = a + b;
	console.log(sum);
}, function (err) {
	console.log("These are not both numbers");
});