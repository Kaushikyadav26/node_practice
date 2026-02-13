// const a =() =>{
//     b();
//     console.log("a")
// };
// const b=()=>{
//     console.log("b:b");
// };

// const { useCallback } = require("react");

// a();

// const a=()=>{
//     b();
//     console.log("a:");
// };
// const b=()=>{
//     console.log("init:");
//     setTimeout(()=>{
//         console.log("b process:")

//     },0);
//     console.log("ended:");

// };
// a();
// console.log("ended:");

//empty stack
//  a is pushed
//  b is pushedb is exevuted
//  registering Callback
//  b is  popped
// a is executed
// a is popped
// last line is pushed
// last line is pushed
// last line is executed
// last line is popped

// Stack overload 



// const crash =() =>{
//     crash();
// }
// crash();

const fetchData = (calBack) => {
    useCallback("Data fetched");
};

const fun1 = (data) => console.log(data);
fetchData(fun1);

//callback more than 2 level is callback hell
// async await came into play to avoid callback hell

const login = async () => {
    await authorization();
    await passwordCheck();
}






