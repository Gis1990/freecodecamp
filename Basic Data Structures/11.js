function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    let len=arr.length
    for (let i=0;i<len;i++){
        if (arr[i].indexOf(elem)<0){
            newArr.push(arr[i])
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));