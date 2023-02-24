


function groupAndReverse(string) {
    let stringArray = string.split("");
    let groupLength = 4;

    let groups = [];
    let reversedGroups = ""; // This will be our final string
    
   
    let index = 0;

    // Loop while index is less than the array length
    while(index < stringArray.length) {
        // slice out from the index + the groups length and puh push to the groups array
        groups.push(stringArray.slice(index, index + groupLength));
        
        // Increase by group length
        index += groupLength;
    }

    groups.forEach(group => {
        reversedGroups += group.reverse().join(""); // Add to our string
    });

    return reversedGroups;
}

console.log(groupAndReverse("Lorem at"));
console.log(groupAndReverse("Tempor ip"));


        // N0 3
function arraySum(array) {
    let total = 0; 

    array.forEach(function(number) {
        total += number;
    })

    return total;
}

let array = [1,2,4,7];
console.log(arraySum(array));



            //No 4
// Constructive criticism
// It is simply advice, or giving a suggestion or an advive to someone.
// you can advice someone politely on th way foward. 
              // EG. 
//    I noticed an errors in your code have been frequent lately. Mistakes happen i understand. is there anything i need to be aware of thet might help you do your best work?
//    Be free to tell me any challenges you might be facing.