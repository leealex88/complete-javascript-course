//  creating object using Function COnstructor

// const john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

//blueprint

// Person is a function constructor
// const Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         console.log(2016 - this.yearOfBirth)
//     }
// }


// this is how we create new Object using a constructor function
// const john = new Person('John', 1990, 'teacher')

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

const Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2016 - this.yearOfBirth)
    }
}


const john = new Person('John', 1990, 'teacher');
const jane = new Person('Jane', 1969, 'designer')
const mark = new Person('Mark', 1948, 'retired')


john.calculateAge();

