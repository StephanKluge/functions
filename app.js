// The first example from Project Odin with some extra Usability to set the favorit Animal easyer

function fovoriteAnimal(myAnimal) { //declare a functio functionname(parameter){
    return myAnimal + " is my favorite animal!" //return myAnimal with some text
}
const chooseAnimal = prompt("Choose your favorite Animal:", ""); //create a prompt where we should say what our favoriote animal is
const animal = chooseAnimal;//safe the prompt
console.log(fovoriteAnimal(animal));//now we say JS we put the value, that safed in "animal" to our function to MyAnimal

//Ganz einfache Funktion

function myFunction(){ //start einer funktion mit eigenen funktionsnamen (frei wählbar)
    alert("hello");//code innerhalb der funktion
}
myFunction();//aufruf der funktion