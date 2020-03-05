async function callApi() {
    const person = await fetch('https://swapi.co/api/people/1/').then((res) => res.json());
    console.log(person);
    console.log(1 + 1)
}

callApi();