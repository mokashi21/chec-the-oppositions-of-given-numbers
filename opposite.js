// "Given 2 numbers as input. You need to find if they have opposite signs or not.
// Input -> +123, -12
// Output -> true"

function oppositeSigns(x, y)
    {
        return ((x ^ y) < 0);
    }
 
  
    let x = +123, y = -12;
    if (oppositeSigns(x, y) == true)
         console.log("true");
    else
         console.log("false");

        //  ----------------------------