//function declare step-1
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);



//function declare step-1
// const doubleIt = function(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);



//function declaration es6 arrow function
// const doubleIt = num => num * 2;
// const result = doubleIt(50);
// console.log(result);



//function declaration es6
//2 pera meter
// const add = (x,y) => x + y;
// const result = add(50,500);
// console.log(result);

// //without pera meter
// const give5 = () => 5;
// const resultTwo = give5();
// console.log(resultTwo)


//function
const doubleIt = num => num * 2;
const add = (x,y) => x + y;
const give5 = () => 5;
const doMath = (x,y) => {

    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = add(50,500);
const result2 = give5();
const result3 = doMath(7,5);
console.log(result3);