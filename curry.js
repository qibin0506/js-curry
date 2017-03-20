var curry = function(fn, length) {
	length = length || fn.length;
	return function() {
		if (arguments.length < length) {
			var combined = [fn].concat(Array.prototype.slice.call(arguments, 0));
			return curry(curry_once.apply(this, combined), length - arguments.length);
		} else {
			return fn.apply(this, arguments);
		}
	};
};

var curry_once = function(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
	};
};
