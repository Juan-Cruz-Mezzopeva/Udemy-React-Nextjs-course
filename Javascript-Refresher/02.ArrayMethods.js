// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

const transformToObjects = function(numberArray){
    let objectArray = [];
    objectArray = numberArray.map((number) => {return {number: number}})
    
    return objectArray;
}

const numberArray = [1, 2, 3, 4, 5];

const objectArray = transformToObjects(numberArray);

console.log(objectArray);