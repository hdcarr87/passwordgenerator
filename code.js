var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*"];
var numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var confirmlength;
var confirmupper;
var confirmlower;
var confirmspecial;
var confirmnumbers;

//button click on "generate password" to prompt boxes

document.getElementById("generate").addEventListener("click", function(){
//create a prompt box to ask: length from 8-128. Do you want special characters, numeric characters, lowercase, and/or uppercase.
    confirmlength = parseInt(prompt("How many characters from 8-128 characters do you want to use?"));
    confirmupper = confirm("Do you want to use upper case characters?");
    confirmlower = confirm("Do you want to use lower case characters?");
    confirmspecial = confirm("Do you want to use special characters?");
    confirmnumbers = confirm("Do you want to use numerical characters?");

    render();
});

function render(){
    document.getElementById("password").textContent = generatePwd();
}

function randomNumber(arr)
{
    var temp = Math.floor(Math.random()*arr.length);
    var char = arr[temp];
    console.log(char);
    return char;
}

function generatePwd()
{
    var password = [];

    for(var i = 0; i < confirmlength; i++){
        if(confirmupper){
            password.push(randomNumber(uppercaseCharacter));
        }

        if(confirmlower){
            password.push(randomNumber(lowercaseCharacter));
        }

        if(confirmspecial){
            password.push(randomNumber(specialCharacter));
        }

        if(confirmnumbers){
            password.push(randomNumber(numericalCharacter));
        }

    }

    password.length = confirmlength;
    console.log(password);
    password = password.join("");
    return password;
}

document.getElementById("copy").addEventListener("click", function(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    
})

//the code needs to validate user input to ensure that at least one character type is selected
//make the button click to generate the password
//make a button click to copy the password to the clipboard