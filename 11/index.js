/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]


function reverseString(arr){
    const splitAndReverse = arr.split("").reverse()
    return splitAndReverse.join("");
}


function reverseStringsInArray(arr){
    const result = arr.map(word => reverseString(word))
    return result;
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));