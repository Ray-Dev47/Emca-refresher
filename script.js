// challenge 5 - set a default time , create a messag to be output according to the time e.g: good morning, output the message in the console.

// let defaultTime = 24;
let whatisTime = prompt('What is the time?')

if(whatisTime < 11){
    console.log(`Good Morning`)
} else if (whatisTime >= 12 && whatisTime < 18 ){
    console.log(`Good afternoon`)
} else if(whatisTime >= 18 && whatisTime <= 24){
    console.log(`Good Evening`)
} else{
    console.log(`Invalid Time entered`)
}