<!-- PHP 5: https://www.w3schools.com/php/default.asp
     PHP 7: https://www.w3schools.com/php7/default.asp  -->

<!DOCTYPE html>
<html>
<head>
    <title>PHP Exercises</title>
</head>
<body>

<h1>A text paragraph for a PHP page</h1>


<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  <!-- The $_SERVER["PHP_SELF"] is a super global variable that returns the filename of the currently executing script. So, the $_SERVER["PHP_SELF"] sends the submitted form data to the page itself, instead of jumping to a different page. This way, the user will get error messages on the same page as the form.

 *NOTE* The $_SERVER["PHP_SELF"] variable can be used by hackers! If PHP_SELF is used in your page then a user can enter a slash (/) and then some Cross Site Scripting (XSS) commands to execute.

 -->

    <!-- The htmlspecialchars() function converts special characters to HTML entities. This means that it will replace HTML characters like < and > with &lt; and &gt;. This prevents attackers from exploiting the code by injecting HTML or Javascript code (Cross-site Scripting attacks) in forms. -->


First name (POST): <input type="text" name="fname">
</form>
Welcome <?php echo $_POST["fname"];
?>


<br><br>

<form action="welcome.php" method="get">
    First name (GET): <input type="text" name="fname">
</form>

<br><br>



<?php

/* PHP 5 Syntax  (https://www.w3schools.com/php/php_syntax.asp) */

echo "This is how your echo (write) text with php";


/*  PHP 5 Variables (https://www.w3schools.com/php/php_variables.asp)
    PHP 7 Variables (https://www.w3schools.com/php7/php7_variables.asp)
*/

/*  PHP is a Loosely Typed Language
    In the example below, notice that we do not have to tell PHP which data type the variable is. PHP automatically associates a data type to the variable, depending on its value. Since the data types are not set in a strict sense, you can do things like adding a string to an integer without causing an error. In PHP 7, type declarations were added. This gives an option to specify the data type expected when declaring a function, and by enabling the strict requirement, it will throw a "Fatal Error" on a type mismatch.
 */

$txt = "This is a variable";
$lineBreak = "<br>";

echo $lineBreak;
echo $txt;
echo $lineBreak;


$x = 5;
$y = 10;

echo "5 plus ten " . ($x + $y); // "." will join together items  "+" will add items together (strings and numbers)


/* PHP 5 Strings (https://www.w3schools.com/php/php_string.asp) */


echo $lineBreak; echo $lineBreak;


$longSentence = "The length of this string will be displayed: ";
echo $longSentence . strlen($longSentence); // strlen counts the length of the string


echo $lineBreak;


echo "The longSentence string has this many characters: " . str_word_count($longSentence); // str_word_count counts the number of words in a sentence


echo $lineBreak;


$reverseSentence = "This sentence will be reversed";
echo strrev($reverseSentence);


echo $lineBreak;


$oldtxt = "Hello World!";
$newtext = str_replace("World","Brother",$oldtxt); // str_replace searches for the first char/string, replaces it with the 2nd char/string, using the 3rd char/string (subject)
echo $newtext;


echo $lineBreak; echo $lineBreak;


/* PHP 5 Operators (https://www.w3schools.com/php/php_operators.asp) */

/*  Operators are used to perform operations on variables and values.

    PHP divides the operators in the following groups:

    Arithmetic operators
    Assignment operators
    Comparison operators
    Increment/Decrement operators
    Logical operators
    String operators
    Array operators
*/


echo 5 * 10; // Arithmetic Operator
echo $lineBreak;
echo 10 / 2; // Arithmetic Operator
echo $lineBreak;
$x += $y; // Assignment Operators
echo $x;
echo $lineBreak;
var_dump($oldtxt == $newtext);
echo $lineBreak;
var_dump($x != $y); // Comparison Operator // Returns true if not equal, false if equal


echo $lineBreak; echo $lineBreak;


/* PHP 5 if...else...elseif Statements (https://www.w3schools.com/php/php_if_else.asp) */

/*  Very often when you write code, you want to perform different actions for different conditions. You can use conditional statements in your code to do this.

    In PHP we have the following conditional statements:

    if statement - executes some code if one condition is true
    if...else statement - executes some code if a condition is true and another code if that condition is false
    if...elseif....else statement - executes different codes for more than two conditions
    switch statement - selects one of many blocks of code to be executed
*/


$a = 100;
$b = 20;

if ($a > $b) {
    echo "Yes, the first variable is greater than the second variable.";
}

echo $lineBreak;

if ($a != $b) {
    echo "No, the first variable is not equal to the second variable.";
}

echo $lineBreak;

if ($a == $b) {
    echo "Yes, the two variables are equal.";
} else {
    echo "No, the two variables are not equal.";  // This will print since $a is not equal to $b
}

echo $lineBreak;

if ($a == $b) {
    echo "Yes, the two variables are equal.";
} elseif ($a == 10) {
    echo "No, the two variables are not equal.";
} else {
    echo "Since the if and elseif conditions were false, this statement gets printed."; // This will print since the if and elseif were false
}


echo $lineBreak; echo $lineBreak;


/* PHP 5 switch Statements (https://www.w3schools.com/php/php_switch.asp) */

/*  The switch statement is used to perform different actions based on different conditions.
    This is how it works: First we have a single expression n (most often a variable), that is evaluated once. The value of the expression is then compared with the values for each case in the structure. If there is a match, the block of code associated with that case is executed. Use break to prevent the code from running into the next case automatically. The default statement is used if no match is found.
*/


$color = "purple";

switch($color) {    // Creates switch evaluating the $color variable
    case "red":
        echo "The color is red";
        break;
    case "purple":  // This prints since $color is in fact set to "purple"
        echo "The color is purple";
        break;      // Breaks out of switch since it found an adequate case
    case "gold":    // Doesn't evaluate since a matching case was found
        echo "The color is gold";
        break;
}

echo $lineBreak;

switch($color) {    // Creates switch evaluating the $color variable
    case "red":
        echo "The color is red";
        break;
    case "yellow":
        echo "The color is purple";
        break;
    case "gold":
        echo "The color is gold";
        break;
    default:
        echo "None of the colors were selected!";  // This prints since no correct color was selected. No break needed since this is the last "case"
}


echo $lineBreak; echo $lineBreak;


/* PHP 5 Loops (https://www.w3schools.com/php/php_looping.asp) */

/*  PHP while loops execute a block of code while the specified condition is true. Often when you write code, you want the same block of code to run over and over again in a row. Instead of adding several almost equal code-lines in a script, we can use loops to perform a task like this.

    In PHP, we have the following looping statements:

    while - loops through a block of code as long as the specified condition is true
    do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true
    for - loops through a block of code a specified number of times
    foreach - loops through a block of code for each element in an array
*/


$i = 0; // Initializes $i variable
while ($i < 10) {   // While loop will run until this condition is met
    echo $i;        // Action being taken - current $i value will print
    $i++;           // $i variable increases by one each loop through
}

echo $lineBreak;

$g = 0; // Initializes $g variable
do {    // Begins do...while loop
    echo $g;
    $g++;
} while ($g < 5);   // End loop once $g condition is met

echo $lineBreak;

for ($h = 0; $h < 3; $h++) {    // Initializes for loop and $h variable. Sets loop's conditions. Loops end once condition is met.
    echo $h;
}

echo $lineBreak;

$software_apps = array("OMS", "RP WMS", "Google Chrome", "Convergence"); // Creates array with strings
foreach ($software_apps as $application) {      // Loops through each string in $software_apps array...
echo $application . " ";                              // ...and prints the currently selected $application name
}

echo $lineBreak; echo $lineBreak;


/* PHP 5 Functions (https://www.w3schools.com/php/php_functions.asp) */

/* The real power of PHP comes from its functions; it has more than 1000 built-in functions.

PHP User Defined Functions:

Besides the built-in PHP functions, we can create our own functions. A function is a block of statements that can be used repeatedly in a program.
A function will not execute immediately when a page loads. A function will be executed by a call to the function.
*/


function myFirstFunction() {
    echo "Woohoo you called your first function!";
}

myFirstFunction();


echo $lineBreak;


$firstname = "Koooner";
$lastname = "Moooootz";

function functionParameters($firstname, $lastname) {
    echo "Hello $firstname $lastname";    // You can call variables inside a string using $VARIABLENAME
}

functionParameters("$firstname", "$lastname");
echo $lineBreak;
functionParameters("Johnny", "Depp");


echo $lineBreak;


function functionParameters2($name) {
    echo "Welcome $name <br>";
}

functionParameters2("George");



function usingReturn($var_one, $var_two) {  // Takes two variables

    $var_result = $var_one + $var_two;      // New variable is first two variables added
    return $var_result;                     // Returns result of new variable
}

echo usingReturn(10,20);    // echo needed in order to print statement. Variables are passed into function then echoed out.


echo $lineBreak; echo $lineBreak;


/* PHP 5 Arrays (https://www.w3schools.com/php/php_arrays.asp) (PHP Array Reference: https://www.w3schools.com/php/php_ref_array.asp */


/* An array is a collection of Elements. Every Element has a Key & a Value. A Key can be an integer (like an index) or a string
/* In PHP, the array() function is used to create an array: array();

In PHP, there are three types of arrays:

Indexed arrays - Arrays with a numeric index
Associative arrays - Arrays with named keys
Multidimensional arrays - Arrays containing one or more arrays
*/

// Indexed Arrays:
// The index can be assigned automatically (index always starts at 0), like this:
$coolCars = array("Volvo", "BMW", "Toyota");

// or the index can be assigned manually:
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";
$cars[3] = "Hummer";


// count() function  -  The count() function is used to return the length (the number of elements) of an array:
echo count($cars);  // Outputs 4 since there are four cars


echo $lineBreak;


// Loop Through an Indexed Array
// To loop through and print all the values of an indexed array, you could use a for loop, like this:
$arrlength = count($cars); // Using count() function, this tells "$arrlength" variable how many items are in the $cars array

for($x = 0; $x < $arrlength; $x++) {    // for loop uses $arrlength to determine number of times it should loop thru
    echo $cars[$x];                     // The corresponding vehicle ($cars) will print depending on where in the array/loop it is ($x)
    echo "<br>";                        // After each of the four carts echo out, a line break is added
}


echo $lineBreak;


// PHP Associative Arrays
// Associative arrays are arrays that use named keys that you assign to them. There are two ways to create an associative array:
// 1:
$ages = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43", "Johnny"=>"17");

// 2:
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";


// Loop Through an Associative Array
// To loop through and print all the values of an associative array, you could use a foreach loop, like this:
foreach($age as $x => $x_value) {               // Creates loop: foreach associated name and age in the $age array
    echo "Key=" . $x . ", Value=" . $x_value;   // echoes out the Key ($x) and it's corresponding value ($x_value)
    echo "<br>";
}


echo $lineBreak;


// Multidimensional Arrays
// A multidimensional array is an array containing one or more arrays.
// PHP understands multidimensional arrays that are two, three, four, five, or more levels deep. However, arrays more than three levels deep are hard to manage for most people.
// The dimension of an array indicates the number of indices you need to select an element.
//      * For a two-dimensional array you need two indices to select an element
//      * For a three-dimensional array you need three indices to select an element

// We can store data in a two-dimensional array, like this:
$two_dimensionalCars = array
(
    array("Volvo",22,18),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
);

// Now the two-dimensional $two_dimensionalCars array contains four arrays, and it has two indices: row and column.
// To get access to the elements of the $two_dimensionalCars array we must point to the two indices (row and column):
echo $two_dimensionalCars[0][0].": In stock: ".$two_dimensionalCars[0][1].", sold: ".$two_dimensionalCars[0][2].".<br>";
echo $two_dimensionalCars[1][0].": In stock: ".$two_dimensionalCars[1][1].", sold: ".$two_dimensionalCars[1][2].".<br>";
echo $two_dimensionalCars[2][0].": In stock: ".$two_dimensionalCars[2][1].", sold: ".$two_dimensionalCars[2][2].".<br>";
echo $two_dimensionalCars[3][0].": In stock: ".$two_dimensionalCars[3][1].", sold: ".$two_dimensionalCars[3][2].".<br>";


echo $lineBreak;


// We can also put a for loop inside another for loop to get the elements of the $cars array (we still have to point to the two indices):
for ($row = 0; $row < 4; $row++) {
    echo "<p><b>Row number $row</b></p>";
    echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li>".$two_dimensionalCars[$row][$col]."</li>";
    }
    echo "</ul>";
}

echo $lineBreak;

// Sort Functions For Arrays

/* PHP array sort functions:
    * sort() - sort arrays in ascending order
    * rsort() - sort arrays in descending order
    * asort() - sort associative arrays in ascending order, according to the value
    * ksort() - sort associative arrays in ascending order, according to the key
    * arsort() - sort associative arrays in descending order, according to the value
    * krsort() - sort associative arrays in descending order, according to the key
*/

sort($ages); // Sorts array in ascending order (least to most)

$ages_array_length = count($ages);  // Creates new variable $ages_array_length to check length (amount of items in) of $ages array
for ($x = 0; $x < $ages_array_length; $x++) {   // Loop created and stops when every $ages array item is processed
    echo $ages[$x] . "<br>";                // Prints current selected item in $ages array and add line break
}

echo $lineBreak;

rsort($ages); // Sorts array in descending order (most to least)

$ages_array_length2 = count($ages);  // Creates new variable $ages_array_length2 to check length (amount of items in) of $ages array
for ($x = 0; $x < $ages_array_length2; $x++) {   // Loop created and stops when every $ages array item is processed
    echo $ages[$x] . "<br>";                // Prints current selected item in $ages array and add line break
}

echo $lineBreak; echo $lineBreak;



/* PHP 5 Form Handling, Form Validation, and Superglobals

Form Handling: https://www.w3schools.com/php/php_forms.asp
Form Validation: https://www.w3schools.com/php/php_form_validation.asp
Superglobals: https://www.w3schools.com/php/php_superglobals.asp)

*/


/* Several predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

The PHP superglobal variables are:
$GLOBALS
$_SERVER
$_REQUEST
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION
*/

// The PHP superglobals $_GET and $_POST are used to collect form-data.

// $GLOBALS is a PHP super global variable which is used to access global variables from anywhere in the PHP script (also from within functions or methods). PHP stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable.

// The example below shows how to use the super global variable $GLOBALS:
$var_x = 75;
$var_y = 25;

function addition() {
    $GLOBALS['var_z'] = $GLOBALS['var_x'] + $GLOBALS['var_y'];
}

addition();
echo $var_z;
// Since z is a variable present within the $GLOBALS array, it is also accessible from outside the function!


echo $lineBreak; echo $lineBreak;


// $_SERVER is a PHP super global variable which holds information about headers, paths, and script locations.

// The example below shows how to use some of the elements in $_SERVER:
echo $_SERVER['PHP_SELF']; // Returns the filename of the currently executing script
echo "<br>";
echo $_SERVER['SERVER_NAME'];  // Returns the name of the host server (such as www.w3schools.com)
echo "<br>";
echo $_SERVER['HTTP_HOST']; // Returns the Host header from the current request
echo "<br>";
// echo $_SERVER['HTTP_REFERER']; // Returns the complete URL of the page from which the current page was called
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT']; // Contents of the User-Agent: header from the current request, if there is one. This is a string denoting the user agent being which is accessing the page. A typical example is: Mozilla/4.5 [en] (X11; U; Linux 2.2.9 i586). Among other things, you can use this value with get_browser() to tailor your page's output to the capabilities of the user agent.
echo "<br>";
echo $_SERVER['SCRIPT_NAME']; // Returns the path of the current script


/* PHP Date and Time (https://www.w3schools.com/php/php_date.asp) */


echo date('l');

echo $lineBreak;

echo date('Y.m.d');

echo $lineBreak;

echo date('H:i:s');

echo $lineBreak;
echo $lineBreak;


/* Advanced PHP */
/* Multidimensional Arrays (https://www.w3schools.com/php/php_arrays_multi.asp) */




























?>




</body>
</html>
