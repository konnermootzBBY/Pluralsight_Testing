function openNewBrowserWindow() {
    window.open("https://www.w3schools.com");   // Opens new tab / window for the specified site
}


//JS Output https://www.w3schools.com/js/js_output.asp

//JS Functions

function sayHello(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!";

    var x = "Yo Yo Yo";
    document.getElementById("demo2").innerHTML = x;

    var y = 5;
    document.getElementById("demo3").innerHTML = y;
    y++;
    document.getElementById("demo3.1").innerHTML = y;

}


function returnStuff() {
    return "This is the returnStuff function";
}

function alertHello(){
    alert("Oh my a free pop up!");
}


//JS Objects    https://www.w3schools.com/js/js_objects.asp

var person = {
    firstName: "Konner",
    lastName: "Mootz",
    gender: "Male"
};

var person2 = {
    firstName: "John", lastName: "Smith", gender: "Male"
};


//JS Events     https://www.w3schools.com/js/js_events.asp

function buttonClick(){
    alert('You just clicked the button');
}

function mouseHover(){
    document.getElementById("mouseHoverDIV").style.backgroundColor='red';
}


//JS Strings    https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings   https://www.w3schools.com/js/js_string_methods.asp

function lengthProperty(){
    var txt = "Hello World!";
    var x1 = txt.length;
    alert(x1);
}


function escapeChars(){
    var sentence = "We are \"Vikings\"";
    document.getElementById("demo6").innerHTML = sentence;
}

function findPosition(){
    var line = "abcdefghijlkm";
    var pos = line.indexOf("h");    //  There is also lastIndexOf() which returns the index positioning of the last occurrence of a specified text/string
    document.getElementById("demo7").innerHTML = pos;
}

function performSlice(){    //  Similar to substr() method - difference being that the second parameter specifies the length of the extracted part.
    var txt1 = "I can eat bananas all day";
    var slicedText = txt1.slice(10, 17);    //  Negative index parameter will start slice from the end of a string
    document.getElementById("demo8").innerHTML = slicedText;
}

function replaceText(){
    var txt2 = "Hola World!";
    document.getElementById("demo9").innerHTML = txt2;  //  Printing "Hola World!"
    txt2 = txt2.replace("Hola", "Adios");
    document.getElementById("demo10").innerHTML = txt2; //  Printing replaced sentence/word: "Adios World!"
}

function upperCase(){
    var txt3 = "this sentence is all lower case.";
    document.getElementById("demo11").innerHTML = txt3; //  Prints the txt3 sentence as-is

    txt3 = txt3.toUpperCase();
    document.getElementById("demo11.1").innerHTML = txt3; //    Prints the txt3 sentence in all caps (.toUpperCase)
}
function lowerCase(){
    var txt3 = "THIS SENTENCE IS IN ALL CAPS.";
    document.getElementById("demo12").innerHTML = txt3; //  Prints the txt3 sentence as-is, in all caps

    txt3 = txt3.toLowerCase();
    document.getElementById("demo12.1").innerHTML = txt3; //    Prints the txt3 sentence in all lower case (.toLowerCase)
}

function concatString(){
    var txt4 = "These are two";
    var txt5 = "different strings!";
    var txt6 = txt4.concat(" ", txt5);
    document.getElementById("demo13").innerHTML = txt6; //  Prints the txt6 sentence, which includes txt4 and txt5, concatenated together
}

/*  The concat() method can be used instead of the plus operator. These two lines do the same:
    Example
    var text = "Hello" + " " + "World!";
    var text = "Hello".concat(" ", "World!");   */



//JS Arrays https://www.w3schools.com/js/js_arrays.asp

function thisIsAnArray(){
    var carsArray = ["Honda", "Chrysler", "BMW", "Tesla"];  // Creates an array
    var arrayItem = carsArray[2];   //  Selects item [2] which is actually the third slot (0 base)
    document.getElementById("demo14").innerHTML = arrayItem; //  Prints item [2] in the carsArray
}

function thisIsAlsoAnArray(){
    var cars = new Array("Saab", "Volvo", "BMW");   // Creates an array
    document.getElementById("demo14.1").innerHTML = cars; //  Prints all items in cars array
}

function arrayToString(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];    // Creates an array
    document.getElementById("demo14.2").innerHTML = fruits.toString();  // Converts the fruits array to a string then prints it
}

function arrayJoinString(){
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Pear"];
    document.getElementById("demo14.3").innerHTML = fruits.join(" * "); // Joins all array elements in fruits array into a string with * as the specified separator
}

function changeArrayItem(){
    var carsArray = ["Honda", "Chrysler", "BMW", "Tesla"];  // Creates an array
    document.getElementById("demo15").innerHTML = carsArray[1]; //  Prints item [1] in the carsArray
    carsArray[1] = "Ford";  //  Changes second array item [1] from Chrysler to Ford
    document.getElementById("demo15.1").innerHTML = carsArray[1]; //  Prints item [1] in the carsArray
}

function countArrayItems(){
    var carsArray = ["Honda", "Chrysler", "BMW", "Tesla", "Hummer"];  // Creates an array
    document.getElementById("demo16").innerHTML = "There are " + carsArray.length + " items in the " + countArrayItems.name + " array."; // Prints the number of values inside carsArray and the name of the array
}

/*  Popping and Pushing:

    When you work with arrays, it is easy to remove elements and add new elements.
    This is what popping and pushing is:
    Popping items out of an array, or pushing items into an array.   */

function popArrayItem(){
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];   // Creates an array
    document.getElementById("demo17").innerHTML = fruits;    // Prints the array as-is
    fruits.pop();   // Removes the last element ("Pineapple") from fruits array
    document.getElementById("demo17.1").innerHTML = fruits; // Re-prints fruits array
}

function pushArrayItem(){
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Kiwi"];   // Creates an array
    document.getElementById("demo18").innerHTML = fruits;    // Prints the array as-is
    fruits.push("Watermelon");   // Adds the "Watermelon element to the end of the fruits array
    document.getElementById("demo18.1").innerHTML = fruits; // Re-prints fruits array
}

function spliceArrayItems(){
    var fruits = ["Banana", "Orange", "Apple", "Kiwi", "Strawberry"];
    document.getElementById("demo19").innerHTML = fruits; // Prints fruits array
    fruits.splice(1,3);     // Removes items 1, 2, and 3 from fruits array
    document.getElementById("demo19.1").innerHTML = fruits; // Re-prints fruits array
}

/*  Merging (Concatenating) Arrays
    The concat() method creates a new array by merging (concatenating) existing arrays:  */

function mergeArrays(){
    var myFriends = ["Michael", "Ali", "John"]; // Creates an array
    var myEnemies = ["Dr. Evil", "The Devil"];  // Creates an array
    var myContacts = myFriends.concat(myEnemies);    // Merges myFriends and myEnemies arrays
    document.getElementById("demo20").innerHTML = myFriends;    // Prints myFriends array
    document.getElementById("demo20.1").innerHTML = myEnemies;  // Prints myEnemies array
    document.getElementById("demo20.2").innerHTML = myContacts; // Prints merged arrays as it's own myContacts array
    document.getElementById("demo20.3").innerHTML = myContacts.sort(); // Prints merged arrays alphabetically

}


//JS Dates https://www.w3schools.com/js/js_dates.asp

/*  JavaScript Date Object lets us work with dates:
    Mon Apr 29 2019 14:34:54 GMT-0500 (Central Daylight Time)   */

function displayDate(){
    var todaysDate = new Date();
    document.getElementById("demo21").innerHTML = todaysDate; // Prints the current date and time
    document.getElementById("demo21.1").innerHTML = todaysDate.getFullYear(); // Prints the current year
    document.getElementById("demo21.2").innerHTML = todaysDate.getMonth(); // Prints the current month as a number (0 = January  11 = December)

    todaysDate.setFullYear(2020);   // Sets year to 2020
    document.getElementById("demo21.3").innerHTML = todaysDate; // Prints date info with new year

}


//JS Math   https://www.w3schools.com/js/js_math.asp

// The JavaScript Math object allows you to perform mathematical tasks on numbers.


function funMath(){
    var number = Math.random(); // Assigns variable "number" a randomized value/number between 0 and 1
    var number2 = Math.random(); // Assigns variable "number2" a randomized value/number between 0 and 1
    var higherNumber = Math.max(number, number2);   // Determines in number or number2 is larger
    var roundedNumber = Math.round (higherNumber);  // Rounds the higherNumber to the closest integer
    var squareRoot = Math.sqrt(4);  // Finds the square root of 4
    document.getElementById("demo22").innerHTML = number; // Prints a randomized value/number between 0 and 1
    document.getElementById("demo22.1").innerHTML = number2; // Prints a randomized value/number between 0 and 1
    document.getElementById("demo22.2").innerHTML = higherNumber + " is the higher of the two random numbers."; // Prints the higher number of "number" and "number2"
    document.getElementById("demo22.3").innerHTML = roundedNumber + " is the nearest integer to " + higherNumber; // Prints the closest integer (rounded) to the higherNumber
    document.getElementById("demo22.4").innerHTML = "The square root of 4 is " + squareRoot; // Prints the square root of 4
}


//JS Comparisons   https://www.w3schools.com/js/js_comparisons.asp

/*  Comparison and Logical operators are used to test for true or false.
    Comparison operators are used in logical statements to determine equality or difference between variables or values.    */

function someComparisons(){
    var x1 = Math.random(); // Assigns variable "x1" a randomized value/number between 0 and 1
    var x2 = Math.random(); // Assigns variable "x2" a randomized value/number between 0 and 1
    var x3 = 5;
    var x4 = 5;
    var x5 = 6;
    var age = 19;
    var validAge = (age < 18) ? "Too young" : "Old enough";

    document.getElementById("demo23").innerHTML = "True or False? " + x1 + " is greater than " + x2 + " : " + (x1 > x2); // Prints True/False of greater randomized number
    document.getElementById("demo23.1").innerHTML = "5 is equal to 5 : " + (x3 == x4);  // Prints True since 5 is equal to 5
    document.getElementById("demo23.2").innerHTML = "5 is equal to 6 : " + (x3 == x5);  // Prints False since 5 is not equal to 6
    document.getElementById("demo23.3").innerHTML = "5 is NOT equal to 6 : " + (x3 != x5);  // Prints True since 5 is not equal to 6
    document.getElementById("demo23.4").innerHTML = validAge;   // Prints "Too Young" or "Old Enough" depending if "validAge" variable is less/greater than "age" variable
}


//JS Conditions   https://www.w3schools.com/js/js_if_else.asp

function someConditions(){
    var x = Math.random();
    var y = Math.random();
    if (x > y){
        document.getElementById("demo24").innerHTML = x + " is greater than " + y;
    }
    else if (x < y){
        document.getElementById("demo24.1").innerHTML = x + " is less than " + y;
    }
    else {
        alert("There is an error in your someConditions logic.");
    }
}


//JS Switch Statements   https://www.w3schools.com/js/js_switch.asp

// The switch statement is used to perform different actions based on different conditions.

function switchOne(){
    var options = "Selection 2";    // Sets options variable to string: "Selection 2"
    switch(options){    // Creates switch with an expression to evaluate ("options" in this case)
        case "Selection 1":     // Sets first case expression (labeled "Selection 1" in this case)
            document.getElementById("demo25").innerHTML = "You selected option one.";   // Performs this if "Selection 1" is the expression utilized
            break;  // When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution of inside the block. It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway. **Note**: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
        case "Selection 2":
            document.getElementById("demo25.1").innerHTML = "You selected option two.";
            document.getElementById("demo25.2").innerHTML = "Good choice!";
            break;
    }
}

function switchTwo(){

    switch (new Date().getDay()) {  // Creates switch with current day of the week as the expected expression (getDay() is a built-in JavaScript method)
        case 0:     // First case labeled "0"
            day = "Sunday";     // day variable will be created / set as Sunday if the day of the week is "0" (Sunday)
            break;      // Tells switch to "break out of the switch" if case "0" is selected
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

        document.getElementById("demo26").innerHTML = "Today is " + day;    // Needs to go at end of switch so variable "day" can be created / set then passed to this statement

}

function defaultSwitchExample(){
    var fruits = "Pear";    // Manually setting fruits variable to be "Pear"
    switch(fruits) {    // Switch is evaluating the fruits variable (evaluating the expression)
        case "Banana":
            ans = "You selected Banana";
            break;
        case "Apple":
            ans = "You selected Apple";
            break;
        default:        // Creating default / neither option which is performed if none of the case options are selected
            ans = "You selected neither Banana or Apple";
    }                                                           // No break needed since default is the last option
    document.getElementById("demo27").innerHTML = ans;  // Prints the ans variable to paragraph "demo27"
}

/*  The "default" keyword specifies the code to run if there is no case match.
    The default case does not have to be the last case in a switch block.
    If default is not the last case in the switch block, remember to end the default case with a break.  */


//JS Loops  https://www.w3schools.com/js/js_loop_for.asp    https://www.w3schools.com/js/js_loop_while.asp


/*  JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

    Example:
        for (i = 0; i < 5; i++) {
            text += "The number is " + i + "<br>";  // Prints 0, 1, 2, 3, 4
        }
*/

function forLoop() {
    var names = ["Johnny", "Bobby", "Julie", "Sammy", "Tommy", "Georgey"];  // Creates "names" array
    var output = "";    // Creates string variable "output" for output
    var i;  // Creates variable "i" for loop functionality
    for(i = 0; i < names.length; i++){  // creates for loop. Starts with first item in "names"
        output += document.getElementById("demo28").innerHTML = names;

    }
    //document.getElementById("demo28").innerHTML = i;
}

function forInLoop() {
    var person = {fname: "Konner", lname: "Mootz", age: "25", sex: "Male"}; // Creates person object with fname, lname, age, and sex properties
    var output = "";    // Creates blank variable for output text
    var x;                  // Creates x to use in loop
    for (x in person) {     // Creates for/in loop
        output += person[x] + " ";    // Each loop will take the current property and add it to the "output" string. The extra space (" ") puts a space in-between each property
    }
    document.getElementById("demo29").innerHTML = output;   // Prints finalized "output" with all properties added
}
function forInLoopArray() {
    var people = ["Konner", "John", "Sally", "George"]; // Creates people array with elements
    var output = "";    // Creates blank variable for output text
    var x;              // Creates x to use in loop
    for (x in people) {     // Creates for/in loop
        output += people[x] + ", ";    // Each loop will take the current property and add it to the "output" string. The extra space (", ") puts a space and comma in-between each property
    }
    document.getElementById("demo30").innerHTML = output;   // Prints finalized "output" with all properties added
}

function whileLoop() {
    var i = 0;  // Creates and initializes variable "i" to be used in while loop

    while (i < 10) {    // Creates while loop - loops until i hits 10
        i++;            // Increases i variable by one each loop
        console.log(i); // Logs the current value of i each loop (View this in Console via Chrome Page Inspector)
    }
}
function whileLoopIncrementByTwo() {
    var i = 0;  // Creates and initializes variable "i" to be used in while loop

    while (i < 10) {    // Creates while loop - loops until i hits 10s
        i = i + 2;       // Increases i variable by two each loop
        console.log(i); // Logs the current value of i each loop (View this in Console via Chrome Page Inspector)
    }
}

function doWhileLoop() {
    var i = 0;

    do {                    // Create do while loop
        console.log(i);     // Logs the current value of i each loop (View this in Console via Chrome Page Inspector)
        i++;
    }
    while (i < 20);         // Stops do while loop once i is equal to 20
}
function doWhileLoop2() {
    var i = 0;
    var text = "";

    do {
        text += "<br>The current number is " + i;   // Adds "<line break> The current number is (i value)" to the text string
        i++;    // Increments i value by one each loop through
    }
    while (i < 7); // Stops loop once i equals 7

    document.getElementById("demo31").innerHTML = text; // Prints final "text" string
}

function forLoopBreak() {
    var i;  // Creates and initializes variable "i" to be used in while loop

    for(i = 0; i < 10; i++){
        console.log(i); // Logs the current value of i each loop (View this in Console via Chrome Page Inspector)
        if (i == 5) {   // Tell the loop to look once i equals 5
            break;       // Tells the loop to break (stop)
        }
    }
}

function forLoopContinue() {
    var i;
    var text = "";

    for(i = 0; i < 6; i++){
        if (i === 3) {  // Tell the loop to look once i equals 3
            continue;   // Then tells loop to skip (continue) the current iteration
        }
        text += "The current number is " + i + "<br>";
    }
    document.getElementById("demo32").innerHTML = text;
}


//JS HTML DOM (Document Object Model)  https://www.w3schools.com/js/js_htmldom_html.asp  https://www.w3schools.com/js/js_htmldom.asp


// With the HTML DOM, JavaScript can access and change all the elements of an HTML document. When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.


function DOM_Example() {
    document.getElementById("demo33").innerHTML = "I changed the text!";    // Changes HTML text inside "demo33" paragraph
    document.getElementsByTagName("h1")[9].innerHTML = "Changed it yo";     // Changes tenth [9] h1 element to say "Changed it yo"
    document.getElementsByClassName("test")[0].innerHTML = "I changed this too!";  // Changes first [0] "test" class element to say "I changed this too!"
    document.getElementById("frowny_face").src = "https://www.shareicon.net/download/2017/06/13/887032_face.ico";
    document.getElementById("myText").value = "Heyyyyy";
    document.getElementById("demo34").style.color = "red";
    document.getElementById("demo35").style.fontSize = "50px";
    document.getElementById("demo36").style.display = "none";

}
function EventListener() {
    document.getElementById("eventListenerDemoAlert").addEventListener("click", listenerAlert);
}
function listenerAlert() {
    document.getElementById("eventListenerDemoAlert").addEventListener("click", alert("You did it right!"));
}
function removeListener() {
    document.getElementById("eventListenerDemoAlert").removeEventListener("click", listenerAlert);
}



