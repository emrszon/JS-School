console.log("arrays-01.js")
var numbers = [ 12, 45, 63, 456, 67, 45, 67, 4, 8, 467, 8, 567, 85, 546, 54];

console.log(numbers)
displayArray(numbers, "js1-unsorted");

var sorted = numbers.sort((a, b) => a-b);

console.log(sorted)
displayArray(sorted, "js1-sorted");


function displayArray(arr, id){
    for(i=0; i<arr.length; i++){
        document.getElementById(id).innerHTML += `${arr[i]}, `
    }
}