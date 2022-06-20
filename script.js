// challenge 8 --> Create a function that asks for a guess from the user. Use the guess value to compare to see if the user guessed correctly let them know if correct or incorrect . Bonus: Using a tenary operator to provide sugestion for the next guess when the user is wrong.

let rightGuess = 17;


function guess(){
    let quest = prompt('Please guess a number between 1 to 20');
    if(quest == rightGuess){
        return  alert(`yes ${rightGuess} is the correct guess`)
    } 
    else if(quest !== rightGuess){
        return guess(alert("Wrong ans, please try again"));
    }
    
}
guess()


// Bonus Using Tenary Operator

function guess(){
    let quest = prompt('Please guess a number between 1 to 20');
    (quest == rightGuess) ?  alert(`yes ${rightGuess} is the correct guess`) : guess(alert("Wrong ans, please try again"))
    
}
guess()