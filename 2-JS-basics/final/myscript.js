// Let 's remember the first coding challenge where Mark and John compared their BMIs. Let'
// s now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties
// for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI.Save the BMI to the object and also
// return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.Don 't forget they might have the same BMI.

// Remember: BMI = mass / height ^ 2 = mass / (height * height).(mass in kg and height in meter).

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }

// john.calcBMI()
// mark.calcBMI()
// console.log(john, mark)
// // const bmi = john.calcBMI()
// // console.log(john)
// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + 'has a higher BMI of ' + john.bmi)
// } else if (mark.calcBMI() > john.calcBMI()) {
//     console.log(mark.fullName + 'has a higher BMI of ' + mark.bmi)
// } else {
//     console.log('They have the same BMI')
// }

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

let john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = []
        this.finalValues = []
        for (let i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules 
            // const percentage;
            let bill = this.bills[i]

            if (bill < 50) {
                percentage = .2
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }

            // Add the result to the corresponding arrays
            this.tips[i] = bill * percentage
            this.finalValues[i] = bill + bill * percentage
            //or this.finalValues[i] = bill + this.finalValues[i]
        }
    }
}


let mark = {
    fullName: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = []
        this.finalValues = []

        for (let i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules 
            // const percentage;
            let bill = this.bills[i]

            if (bill < 100) {
                percentage = .2
            } else if (bill >= 100 && bill < 300) {
                percentage = .10
            } else {
                percentage = .25
            }

            // Add the result to the corresponding arrays
            this.tips[i] = bill * percentage
            this.finalValues[i] = bill + bill * percentage
            //or this.finalValues[i] = bill + this.finalValues[i]
        }
    }


}

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// // Do the calculations
// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);



function calcAverage(tips) {
    let sum = 0
    for (let i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
    }
    return sum / tips.length
}

// do the calculations 


mark.calcTips()
// console.log(mark)

john.calcTips();
// console.log(john);

john.average = calcAverage(john.tips)
mark.average = calcAverage(mark.tips)
console.log(john, mark)

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays heigher tips, with an avarage of $' + john.averag)
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays heigher tips, with an avarage of $' + mark.average)

}