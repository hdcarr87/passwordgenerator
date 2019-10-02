Array.upperchaseCharater = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
Array.lowercaseCharater = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
Array.specialCharacters = [!, @, #, $, %, &, *]
Array.numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//button click on "generate password" to prompt boxes

    button.addEventListener("click", generatepassword)

//create a prompt box to ask: length from 8-128. Do you want special characters, numeric characters, lowercase, and/or uppercase.
    var confirmlength = confirm("How many characters from 8-128 characters do you want to use?")
    var confirmupper = confirm("Do you want to use upper case characters?")
    var confirmlower = confirm("Do you want to use lower case characters?")
    var confirmspecial = confirm("Do you want to use special characters?")
    var confirmnumbers = confirm("Do you want to use numerical characters?")

        if(confirmuppercase) {
            
        }
    


//the code needs to validate user input to ensure that at least one character type is selected
//make the button click to generate the password
//make a button click to copy the password to the clipboard