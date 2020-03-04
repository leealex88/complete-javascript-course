// MODULES module pattern ----> niektore sa bardziej user interfejs a niektore data manipulation 
// -- private and public data / encapsulation / separation of concerns
// UI MODUELE
// get input values jakos je wyciagnac to co wpisujemy
// add the new item to the UI
//update the UI 
// DATA MODUELE
// add the new item to our data structure
// calculate the budget
// CONTROLLER MODUELE
// mozemy dodac income and expenses values naciskajac na button uzywajac event handler


// let budgetController = (function(){
// let x = 23

// const add = function(a){
//     return x + a
// }
// return {
//     publicTest: function(b){
//          return add(b)
//     }
// }
// })()

// const UIController = (function(){

// })()

// const controller = (function(budgetCtrl, UICtrl){

//    var z =  budgetCtrl.publicTest(5)

//    return {
//        anotherPublic: function(){
//            console.log(z)
//        }
//    }

// })(budgetController, UIController)


// removing examples 

// *to zostalo zamienione na Object 
// return {
//     getinput: function(){
//        var type = document.querySelector('.add__type').value  // will be either inc or exp
//         var description = document.querySelector('.add_description').value
//         var value = document.querySelector('.add__value').value
//     }
// }
//Budget controler
const budgetController = (function(){

    const Expense = function(id, description, value){
       this.id = id
       this.description = description
       this.value = value
   }     

   const Income = function(id, description, value){
       this.id = id
       this.description = description
       this.value = value
   } 

   let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0 
        }
   }

   return {
       addItem: function(type, des, val){
           let newItem, ID

           ID = 0
           //Create new id, than 
           if(data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length -1].id + 1
           }else {
            ID = 0 
           }
    
            // create new item base on 'inc' or 'exp' type
           if(type === 'exp'){
            newItem = new Expense(ID, des, val)
           }else if (type === 'inc'){
            newItem = new Income(ID, des, val)
           }

           // Push it into our data structure
           data.allItems [type].push(newItem)
           //return the new element
           return newItem
       },
       testing: function(){
           console.log(data)
       }
   }
    
})()

// UI controller 
const UIController = (function(){
    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function(){
            return{
            //*
                type: document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        addistItem: function(obj, typ){
            // Create HTML string with placeholder text

            // Replace the placeholder text with some actual data

            // Insert the HTML into the DOM
        }

        getDOMstrings: function(){
            return DOMstrings
        }
    }
})()



// Global app controler
const controller = (function(budgetCtrl, UICtrl){
var setupEventisteners = function(){
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem()
        }
    })
}
   
   

    const ctrlAddItem = function(){
        let input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();
        // console.log(input)
        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)
        //3. Add the item to the UI
        // 4. Callculate the Budget
        //5. Display the budget on the UI 
    }

    return {
        init: function(){
            console.log('Application has started')
            setupEventisteners()
        }
    }
})(budgetController, UIController)

controller.init()

