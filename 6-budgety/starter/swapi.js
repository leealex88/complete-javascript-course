// async function callApi() {
//     const person = await fetch('https://swapi.co/api/people/1/').then((res) => res.json());
//     console.log(person);
//     console.log(1 + 1)
// }

// callApi();

var str = "daniel"

function capitalise(str) {

    var splitedString = str.split("")
    console.log(str)
    for (let i = 0; i < splitedString.length; i++) {
        var toUpper = splitedString[0].toUpperCase()
        console.log(toUpper)
    }
}