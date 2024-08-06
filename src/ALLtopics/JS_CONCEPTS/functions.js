// function data(add,sub) {
//     console.log(add+sub);
// }
// data(2,3)                          //named function


//______________________________________________________ 


// function data(add,sub,mul=3) {
//     console.log(add+sub+mul);
// }
// data(2,3)                            //default function

//______________________________________________________ 

// const greed=function(add,sub,mul){
//     console.log(add+sub-mul);
// }
// greed(3,6,2)                        //anonymous function 

//______________________________________________________ 

// const greed=(add,sub,mul)=>{
//     console.log(add+sub*mul);
// }
// greed(3,5,7)                         //arrow function

//______________________________________________________ 

// (function data(add,sub) {
//     setTimeout(()=>{
//         console.log("Addition : ",add);
//         console.log("Subtraction : ",sub);

//     },1000)
    
// })(2,5)                                //IIFE function (immediately invoked function expression)  



//______________________________________________________ 

// function add(){
//     console.log("my self ");
// }
// function sub(call){
//     call()
// }
// sub(add)                           //call back function