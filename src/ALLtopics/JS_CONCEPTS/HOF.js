function Add(){
    console.log(2+3);
}
function Sub(){
    console.log(2-3);
}
function Mul(){
    console.log(2*5);
}
function Div(){
    console.log(4/2);
}

function call(callback){
    callback()
}
call(Add)                        //   call(HOF) ,, Add(Callback)
