// ----(1)

var a = 1;
function outer() {
    function inner() {
        console.log(a); // undefined
        var a = 3;
    }
    inner(); // ----(2)
    
}