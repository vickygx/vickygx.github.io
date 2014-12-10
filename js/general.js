/*	Functional to create a new length-'count' array,
	by calling a function that many times, each time passing 
	it the current index.
*/
Array.create = function(f, count) {
    var arr = [];
    for (var i = 0; i < count; ++i) {
        arr.push(f(i));
    }
    return arr;
}

/*	Functional to create a new length-(2 * count - 1) array,
	This works like Array.create, but creates an array with elements
	in between every element as given back by the function g applied
	to the index i.
*/
Array.createWithDelimeters = function(f, g, count){
	var arr = [];
    for (var i = 0; i < count - 1; ++i) {
        arr.push(f(i));
        arr.push(g(i));
    }
    arr.push(f(count - 1));
    return arr;
}

/*	Applies a function f to each element
	in an array
*/
Array.prototype.each = function(f) {
    for (var i = 0; i < this.length; i += 1) {
        f(this[i]);
    }
};

/*	Applies a function f to each index i and each element
	in an array
*/
Array.prototype.eachi = function(f) {
    for (var i = 0; i < this.length; i += 1) {
        f(i, this[i]);
    }
};