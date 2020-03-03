//  creating object using Function COnstructor

// const john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

//blueprint

// Person is a function constructor / blueprint for many 'john' objects
// const Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = 
//  function(){
//             return 2020 - this.yearOfBirth
// }
// this is how we create new Object using a constructor function. it is called instentiation.
// const john = new Person('John', 1990, 'teacher')
// console.log(john.calculateAge())

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

//P is capital because we are using Function COnstructor methode
// const Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge
// }

// Person.prototype.calculateAge = function(){
//     return 2016 - this.yearOfBirth
// }

// Person.prototype.lastName = 'Skoczylas'
// const john = new Person('John', 1990, 'teacher');
// const jane = new Person('Jane', 1969, 'designer')
// const mark = new Person('Mark', 1948, 'retired')


// console.log(john.calculateAge());
// console.log(john.lastName);
// console.log(jane.calculateAge());
// console.log(mark.calculateAge());

//Object.create

// const personProto = {
//     calculateAge: function(){
//         return 2016 - this.yearOfBirth
//     }
// }

// const john = Object.create(personProto)
// john.name = 'John'
// john.yearOfBirth = 1990
// john.job = 'teacher'

// console.log(john)

// Primitives 

// var a = 23
// var b = a
// a = 46
// console.log(a)
// console.log(b)

//  Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }

// var obj2 = obj1
// obj1.age = 30

// console.log(obj1.age)

// console.log(obj2.age)

// Functions 
// var age = 27
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// }

// change(age, obj)
// console.log(age)
// console.log(obj.city)

// Lecture: Passing function as an argiument

// var years = [1990, 1965, 1937, 2005, 1998]

// function arrayCalc(arr, fn) {
//     let arrRes = []
    
//     for(let i =0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]))
//         // console.log(arrRes)
//     }
//     return arrRes
// }

// function calculateAge(yearOfBirth){
//     return 2020 - yearOfBirth
// }

// function isFullAge(el){
//     return el>= 18
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <=81){
//         return Math.round(206.9 - (0.67 * el))
//     }else {
//         return -1
//     }
// }

// let ages = arrayCalc(years,calculateAge)
// let fullAges = arrayCalc(ages, isFullAge)
// let rates = arrayCalc(ages, maxHeartRate)
// console.log(ages)
// console.log(fullAges)

// Lecture: Functions returning functions

function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?')
        }
    }else {
        return function(name){
            console.log('Hello' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')