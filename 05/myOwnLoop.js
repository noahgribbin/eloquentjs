// Your code here.
function loop(val, test, body, update){
	for(let i = val; test(i); i = body(i)){
    	update(i)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
