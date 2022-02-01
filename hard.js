/*
HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
Create a single function that takes an input className and updates the body's classList to ONLY include that className
*Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 
*/
document.querySelector('.click-example').addEventListener('click', function () {
    document.getElementById("change").style.backgroundColor = "red";
});

document.querySelector('.click-example2').addEventListener('click', function () {
    document.getElementById("change").style.backgroundColor = "white";
});
