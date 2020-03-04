
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();

function Person(name) {
    this.name = name
}

Person.prototype.myFriends5 = 
function(friends){
    var arr = friends.map(function(el){
        return this.name + 'is friends with ' + el
    })
    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'] 
new Person('John').myFriends5(friends)