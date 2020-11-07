//step-1
// function add(num1,num2){
//     return num1 + num2;
// }
// const total = add(20,10)
// console.log(total);


//step-2
// function add(num1,num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = add(20)
// console.log(total);

//step-3
// function add(num1,num2){
//    num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(20)
// console.log(total);


//step-4
// function add(num1,num2){
//     num2 = num2 || 20;
//      return num1 + num2;
//  }
//  const total = add(20)
//  console.log(total);


//step-5
// function add(num1,num2 = 20){
//     num2 = num2 || 20;
//      return num1 + num2;
//  }
//  const total = add(20)
//  console.log(total);

//step-6
 function add(num1,num2 = 20){
    num2 = num2 || 20;
     return num1 + num2;
 }
 const total = add(20,5)
 console.log(total);