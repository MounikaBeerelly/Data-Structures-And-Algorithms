function test() {
    console.log(a);
    console.log(foo());

    var a =1;
    function foo() {
        return 2;
    }
}
test();


let arr = [1,2,3,4,5];
arr.forEach((num) => {
    console.log(num);
    if(num === 4) {
      //  break;
    }
})

var  arr1 = [10,20,30];
for(var i = 0; i< arr1.length; i++ ){
    setTimeout(function() {
        console.log('Index' + i + ', element: ' + arr1[i]);
    },3000);
}

var x=1;
var output = (function() {
    delete x;
return x;
})();
console.log(output);


function test() {
    console.log('one');
}
function test(a) {
    console.log(a);
}
function test(a,b) {
    console.log(a,b);
}
test();
test(1);
test(1,2);
test(1,2,3,4);