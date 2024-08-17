// // The first example from Project Odin with some extra Usability to set the favorit Animal easyer

// function fovoriteAnimal(myAnimal) { //declare a functio functionname(parameter){
//     return myAnimal + " is my favorite animal!" //return myAnimal with some text
// }
// const chooseAnimal = prompt("Choose your favorite Animal:", ""); //create a prompt where we should say what our favoriote animal is
// const animal = chooseAnimal;//safe the prompt
// console.log(fovoriteAnimal(animal));//now we say JS we put the value, that safed in "animal" to our function to MyAnimal

//Ganz einfache Funktion

// function myFunction(){ //start einer funktion mit eigenen funktionsnamen (frei wählbar)
//     alert("hello");//code innerhalb der funktion
// }
// myFunction();//aufruf der funktion

//Funktion mit optional parameters
// function hello(name){ //Start der Funktion mit optionalen parameter, hier "name"
//     alert(`Hello ${name}!`) //codeblock der am ende ein alertfenster ausspuckt, das einen begrüßt. Wichtig: Backticks! und ${name}. Dort wird am Ende der eingegebene Name gespeichert.
// };
// const myName = prompt("Wie heißen Sie?");//erstellt wieder ein prompt mit der aufforderung den Namen ein zu geben
// const tellName = myName;//Eingegebener Name wird gespeichert
// hello(tellName);//Funktion wird aufgerufen und

//An easy arrowfunction
const originals = [1, 2, 3];
const doubled = originals.map(item => item*2); //item => item*2 is the arrow function equivalent of function doubleItem(item){ return item*2;}
console.log(doubled);