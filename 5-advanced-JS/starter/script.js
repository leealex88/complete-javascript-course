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

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     }else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     }else {
//         return function(name){
//             console.log('Hello' + name + ', what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher')
// teacherQuestion('John')

/// ecture: IIFE / Invoked Function Expression 


// function game() {
//     let score = Math.random() * 10
//     console.log('score:', score >=5)

// }
// game()


// this is IIFE / Invoked Function Expression
// (function (){
//     let score = Math.random() * 10
//     console.log('score:', score >=5)
// })()



// (function (goodLuck){
//     var score = Math.random() * 10
//     console.log(score >= 5 - goodLuck)
// })(5)

// function retirement(retirementAge) {
//     const a = ' years left until retirement.'
//     return function(yearOfBirth){
//         let age = 2020 - yearOfBirth
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66)
// console.log(retirementUS(1985));

// przypisujemy pierwsza funkcje do  var = retrimentUS i ja wolamy retirement(w nawiasie lata emerytury)
// nastepnie musimy wywolac nastepna funcje to ze srodka. ona w calosci zostala przypisana do naszej pierwszej funkcji retriment poprzez var variable, dlatego musimy dodac tylko yearOfBirth ktore jest drugim parametrem w srodkowej funkcji.  

// retirementUS(1990)
// retirement(66)(1990)

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     }else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     }else {
//         return function(name){
//             console.log('Hello' + name + ', what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher')
// teacherQuestion('John')


// function interviewQuestion(job) {
//     return function(name) {
//         if(job === 'designer'){
//             console.log(name + ', can you please explain what UX design is?')
//         }else if (job === 'teacher'){
//             console.log('What subject do you teach, ' + name + '?')
//         }else {
//             return function(name) {
//             console.log('Hello' + name + ', what do you do?')

//             }
//         }
//     }
// }
// let question = interviewQuestion('designer')
// question('Ola')

// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 30,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal') {
//             console.log ('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old' )
//         }else if (style === 'friendly'){
//             console.log('Hey! Whats\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' )
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }
// john.presentation('formal', 'morning')

// // the call methode borrowing allow us to set the value to another variable 
// john.presentation.call(emily, 'friendly', 'afternoon')


// // the apply methode borrowing allow us to set the value to another variable 
// john.presentation.apply(emily, ['friendly', 'afternoon'])


// // the bind methode generate a copy of the function and we can store it somewhere. 

// var johnFriendly = john.presentation.bind(john, 'friendly')

// johnFriendly('morning') 

// var emilyFormal = john.presentation.bind(emily, 'formal')
// emilyFormal('afternoon')


// var years = [1990, 1965, 1937, 2005, 1998]

// function arrayCalc(arr, fn) {
//     let arrRes = []
    
//     for(let i =0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]))
//         // console.log(arrRes)
//     }
//     return arrRes
// }

// function calculateAge(el){
//     return 2020 - el
// }

// function isFullAge(limit, el){
//     return el>= limit
// }

// var ages = arrayCalc(years, calculateAge)


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

function Question(question, answers, correct){
    this.question = question
    this.answears = answers
    this.correct = correct 
}

var q1 = new Question ('Is JavaScript the coolest programming language in the world',
        ['Yes', 'No'],
        0);
var q2 = new Question ('What is the name of this course\'s teacher?',
['John',
'Michael',
'Jonas'],
2)
var q3 = new Question ('What does best describe coding?',
['boring', 'fun', 'hard'], 2)

var questions = [q1, q2, q3]