# js-curry
currying function in javascript

Usage:
``` html
<script type="text/javascript">
var fn = curry(function(x, y, z) {
	return x + y + z;
});

var content = document.getElementById("content");
content.innerHTML = "fn(1)(2, 3) = " + fn(1)(2, 3);
content.innerHTML += "<br />fn(1, 2)(3) = " + fn(1, 2)(3);
content.innerHTML += "<br />fn(1, 2, 3) = " + fn(1, 2, 3);
content.innerHTML += "<br />fn(1)(2)(3) = " + fn(1)(2)(3);
</script>
```
