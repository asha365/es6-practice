// const ages = [21, 20, 25, 29, 24];
// const ages2 = [25, 55, 29, 15];
// //3 array add
// const ages3 = [33,30, 40, 20, 10];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

//spread operator
// const ages = [21, 20, 25, 29, 24];
// const ages2 = [25, 55, 29, 15];

// const ages3 = [33,30, 40, 20, 10];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);


//spread operator
// const ages = [21, 20, 25, 29, 24];
// const ages2 = [25, 55, 29, 15];

// const ages3 = [33,30, 40, 20, 10];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [...ages, ...ages2, 5, ...ages3];
// //console.log(allAges2);

// const business = 650;
// const minister = 550;
// const sochib = 350;

// const maximum = Math.max(business,minister,sochib);
// console.log(maximum);


//step-3
const ages = [21, 20, 25, 29, 24];
const ages2 = [25, 55, 29, 15];

const ages3 = [33,30, 40, 20, 10];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 550;
const sochib = 350;

const takaPoisa = [650,550,350];
const maximum = Math.max(...takaPoisa);
console.log(maximum);