function Arrays(arr){
 for(let i=0; i<arr.length; i++){
    arr[i]*=1.10;
 }
 return arr;
}
console.log(Arrays([10, 30, 23, 45]))