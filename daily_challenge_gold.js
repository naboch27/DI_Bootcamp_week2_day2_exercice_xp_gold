/*****exercice 1 **** */
/***
 * Hint: Use Switch Case
*Ask the user which language they speak.
*Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
*Create a few conditions :
*If the user speaks French : display “Bonjour”
*If the user speaks English : display “Hello”
*If the user speaks Hebrew : display “Shalom”
*If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
 */


let speak = prompt("which language they speak")

if (typeof (speak) === 'string') {

    let speaks = speak.toLowerCase();

    switch (speaks) {
        case 'french':
            console.log('Bonjour.');
            break;
        case 'english':
            console.log('Hello');
            break;
        case 'hebrew':
            console.log('shalom.');
            break;
        default:
            console.log("01110011 01101111 01110010 01110010 01111001");

    }

}
else {

    console.log('str is not a string');
}


/************exercice 2 ****/
/***
 * Ask the user for their grade.
*If the grade is bigger than 90, console.log “A”
**If the grade is between 80 and 90 (included), console.log “B”
*If the grade is between 70(included) and 80 (included), console.log “C”
*If the grade is lower than 70, console.log “D”
 */

let grade = prompt(" user for their grade")

if (grade > 90) {
    console.log("A")
}
else
    if (grade <= 90 && grade > 80) {
        console.log("B")
    }
    else
        if (grade <= 80 && grade >= 70) {
            console.log("C")
        }
        else {
            console.log("D")
        }


/******exrecice 3******* */

/***
 * Prompt the user for a string. It must be a verb.
*If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
*If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
*If the length of the string is less than 3, leave it unchanged.
 */

let ChaineVerb = prompt("the user for a string. It must be a verb.")

if (typeof (ChaineVerb) === 'string') {

    let result = ChaineVerb.length
    //let EndString=result.
    let EndString = ChaineVerb.endsWith('ing');
    //console.log(EndString)

    if (result > 3 && EndString != true) {
        console.log(ChaineVerb + "ing");
    }
    else
        if (result > 3 && EndString != false) {
            console.log(ChaineVerb + "ly");
        } else {
            console.log(ChaineVerb);
        }

}
else {

    console.log('str is not a string');
}

