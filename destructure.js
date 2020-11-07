// const Person = {name: 'Rafiqul Islam', age: 30, job: 'facebooker', gfName: 'israt jahan', address: 'Tangail', phone: '01633454333', friends:['rafi', 'joynal', 'raju', 'sathi']}

// const {phone,gfName,age} = Person;
// //const gfName = Person.gfName;
// // const phone = Person.phone;

// console.log(gfName,phone,age);
// console.log(gfName,phone,age);
// console.log(gfName,phone,age);
// console.log(gfName,phone,age);

//destructure array
const Person = {name: 'Rafiqul Islam', age: 30, job: 'facebooker', gfName: 'israt jahan', address: 'Tangail', phone: '01633454333', friends:['rafi', 'joynal', 'raju', 'sathi']}

const {phone,gfName,age} = Person;
//const gfName = Person.gfName;
// const phone = Person.phone;

// console.log(gfName,phone,age);
// console.log(gfName,phone,age);

const complexObject = {
    name: 'afrin',
    info: {
        address: 'rajabazar',
        leader: 'obaydul kadir'
    }
}

const {leader} = complexObject.info;

const friends = ['asha','afrin','shakil','mejbah','ripon'];
const [first,nextFriend, ...remainingFriends] = friends;
console.log(first,nextFriend,remainingFriends);
