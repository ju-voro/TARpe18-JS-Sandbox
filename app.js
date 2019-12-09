//alert("Hello from app.js!");

const name = 'John';
const age = 25;
const job = "Software Developer";
const city = "Tallinn";

function hello(){
    return "Hello!";
}

/*let html = '<ul><li> Name:'+ name + '</li><li>Age: '+ age +'</li>'
    + '<li> Job: ' + job + '</li>'+
    '<li>City: '+ city +'</li></ul>';*/


//Template literal
let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${name} says: ${hello()}</li>
    </ul>
`;



document.body.innerHTML = html;