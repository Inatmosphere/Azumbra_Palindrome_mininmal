document.addEventListener('DOMContentLoaded', (event) => { //Starts an event listsner//

    let input = document.querySelector("input") 
    let submit = document.querySelector("#submit")     

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        Check(input.value)      //bind the Check function//
        input.value = ''

    });
    
});

function Check(string) {           //compares if the string is the same as it was before the turn function//      
    let rString = turn(string)

    if (string == rString) {
        return result(string, true)
    } else {
        return result(string, false)
    }
}

function turn(string) {
    return string.split("").reverse().join("")   //turns string around//
}
function result(string, Result) {           // actuating if statement //
let result = document.querySelector("result")
let output = `${Result}: ${string} is `
    
if (Result == true) {
        alert("is a palindrome")
} else {
        alert("is not a palindrome")
}
result.innerText = output
}