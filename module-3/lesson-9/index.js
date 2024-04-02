"use strict";

// const id=("123abc");
// const index=Symbol("123abc");
// if(id===index){
//     console.log(true)
// }else{
//     console.log(false)
// }
// let num =BigInt(12);
// console.log(num);

// undefined
// null

// let isTrue=undefined;
// console.log(isTrue ?? "xa")
// state ?? "string".toString()
// undefined ?? "string
// "string"

// let a =+prompt("a=");
// let b = +prompt("b=");
// let sum = 0;

// if (a < b) {
//     for (let i=a+1; i < b; i++) {
//          sum += i;
//     }
//     console.log("=================")
//     console.log(`Yig'indi: ${sum}`);
//     console.log("=================")
// }

// let user=prompt('userjon ismini kiriting:');
// let ball=+prompt('ballni kiriting:');

// function aFun(ball, user){

//     if(ball>=120){
//       bFun(user)
//     }else{
//         console.log(`${user} failed : (`)
//     }
// }

// aFun(ball, user)

// function bFun(user){
//     console.log( `${user} cangrulations`)
// }

//   function summa(n){
//     let sum=0;
//     for(let i=1; i<n; i++) {
//         sum+=1/i;
//     }
//     console.log(sum)
//   }

//   summa(100)

//   let sum=0;
//      for(let i=1; i<n; i++) {
//          sum+=1/i;
//      }
//   console.log(sum)


function sumFun(n) {

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
        console.log(sum);
    }

}

sumFun(120);
