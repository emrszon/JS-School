console.log("functions-01.js");
var strings = ['school', 'js', 'the', 'is', 'this'];

function reverse(arr){
    return arr.reverse(); 
}

console.log(strings);
displayArray(strings, "js2-s-foward");

reverseStr = reverse(strings);

console.log(reverseStr);
displayArray(reverseStr, "js2-s-reverse");


function displayArray(arr, id){
    for(i=0; i<arr.length; i++){
        document.getElementById(id).innerHTML += `${arr[i]}, `
    }
}