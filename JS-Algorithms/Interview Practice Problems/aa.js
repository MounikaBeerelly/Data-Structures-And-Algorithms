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

var x=1;
var output = (function() {
    delete x;
return x;
})();
console.log(output);

let arr = [1,2,3,4];
delete arr[3];
console.log(arr.length);


let name = "Mark";
let user = {
    name:"john",
    hi() { return this.name}
};

let hi =user.hi;
let username = hi();
console.log(username);

Promise.resolve(1)
   .then((x) => x+1)
   .then((x) => {throw new Error('My error')})
   .catch(() => 1)
   .then((x) => x+1)
   .then((x) => console.log(x))
   .catch(console.error);


   function test1() {
       return new Promise(function(resolve,reject) {
           throw new Error('Whoops');
       }).catch(function(error) {
           console.log('Error detected');
       }).then(function() {
           console.log('Next..');
       })

   }
   test1().then(function() {
       console.log('Promise execution complete');
   });

   const a ="" -1+0;
   const b =true+false;
   console.log(a/b);



   (function() {
       var A = {
           foo : 'foo',
           bar : 'bar'
       };
       var B = {
        foo : 'foo',
        bar : 'bar'
    };
    console.log(A == B);
    console.log(A === B);
   }());
let z,y,w;
   console.log(typeof(z));


   console.log(3>2>1);
   console.log(1<2<2);
   console.log([] === []);
   console.log({} == {});
   console.log(typeof null === 'object');


function arrayy(s) {
    const counta = (s) => s.split('')
    .filter(c => c == 'a')
    .length;
   return counta(s);
}
console.log(arrayy('aaaaaabaa'));