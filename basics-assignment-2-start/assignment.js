const task3Element = document.getElementById('task-3');

/*First task: Create two new functions: one that takes no parameters and simply shows an alert() with some text of your 
choice and one that receives a name as a parameter and then uses alert() to output that name*/

function myFunction(){
    alert('Hello world!');
}

function alertName(name){
    alert(name);
}

//Second task: Call both functions directly from your code

myFunction();

alertName('Patrycja');

/*Third task: Add an event listener to task3Element and and attach it to the first function (the one without arguments).
 Click this task thereafter to verify whethet it works.*/

task3Element.addEventListener('click', myFunction);

/*Fourth task: Add a brand-new function that takes three parameters (three strings, give them any names you want) that
 returns one combined string (where three strings are concatenated)*/

function concateNames(name1, name2, name3){
    let concatenatedNames = `${name1}${name2}${name3}`;
    return concatenatedNames;
}

//Fifth task: Call that new function directly from your code and alert() the result of your function
alert(concateNames("Jim", "Joe", "John"));
