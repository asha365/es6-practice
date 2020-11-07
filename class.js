// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = 'asha';
//     }
// }
// const student1 = new Student();
// const student2 = new Student();
// console.log(student1,student2);


class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'birbashinda vojdatta school';
    }
}
const student1 = new Student(10, 'asha');
const student2 = new Student(20, 'sharmin');
const student3 = new Student(30, 'sathi');
console.log(student3);
//console.log(student1,student2);
//console.log(student1.name,student2.name);