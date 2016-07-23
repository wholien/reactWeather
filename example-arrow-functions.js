function add (a, b) {
	return a + b;
}

//addStatement
var addStatement = (a, b) => {
	return a + b;
}

// addExpression
var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(5, 6));
console.log(addStatement(7, 4));

console.log(addExpression(1, 2));
console.log(addExpression(7, 8));