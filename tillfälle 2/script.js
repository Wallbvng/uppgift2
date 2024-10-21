// 2 datatyper

//let x 

//let y


// number
//x = 5 // heltal, integer, int

//x = 0,5 // decimaltal, float, f

// string
//x = "hejsan" // sträng, string, str

//x ='#' // karaktär, character, char

// boolean
//x = true // boolean

// undefined
//x = undefined // oidentifierat
 
// number + number = number // calculation
// number + boolean = number // calculation
// boolean + boolean = number // calculation, binärt ettor och nollor 

// number + string = string // concatination
// string + string = string // concatination
// string + boolean = string // concatination


// 3 if satser
// conditions är koder som ger sant eller falskt
// == är jämförelse vänster och höger
// === jämförlese + datatyp
// < mindre än
// <= mindre än + lika med
// > större än
// >= större än + lika med

//-------------------------------------------------------------------------------

function handleEntry() {
    
    let vip = document.getElementById("vipCheckbox").checked; 
    let age = parseInt(document.getElementById("ageInput").value); 

    
    if (vip === true) {
        
        alert("Welcome in my best VIP customer :)");
    } else {
       
        if (age >= 18) {
           
            alert("Access granted");
        } else {
            
            alert("Access denied");
        }
    }
}

document.getElementById("enterBtn").addEventListener("click", handleEntry);

    


