

/*

// hàm đếm xem số lần xuất hiện của 1 phần tử
function count(arr, number) {       // arr, "7"
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            count++;
        }
    }
    return count;
}


// Viết hàm tìm ra vị trí đầu tiên của 1 phần tủ // arr, 1
function findIndex(arr, number) {
    // let index = -1;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == number) {
    //         index = i;
    //         break;
    //     }
    // }
    // return index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return i;
        }
    }
    return -1;
}

let arr = [5, 7, 1, 7, 5, 8, 7];

console.log(findIndex(arr, 50));


let arr = [];
function findMax(arr) {
    let max = arr[0];       //undefined
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));


let arr = [5, 7, 1, 7, 5, 8, 7];        // đối tượng mảng, class tự định nghĩa - object

function remove(numbers, value) {              // arr, 5           => [7, 1, 7, 8, 7]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
}

remove(arr, 5);

console.log(arr);

let arr = [5, 7, 1, 7];

function join(arr, split) {        // arr, '**' => "5**7**1**7"
    let result = "";
    for (let i = 0; i < arr.length; i++) {      // result: 5*7*1*7
        // result = result + arr[i] + split;
        if (i !== arr.length - 1) {
            result = result + arr[i] + split;
        } else {
            result = result + arr[i];
        }
    }
    return result;
}
console.log(join(arr, "*"));


let arr1 = [5, 7, 1, 7, 8];
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

reverse(arr1);
console.log(arr1);

*/



let arr1 = [5, 7, 1, 7, 7, 1];
function reverse1(arr) {
    let left = 0;
    let middle = arr.length / 2;
    for (let i = 0; i < middle; i++) {
        // i vs arr.length -1 - i   : 0 vs 4 (5-1-0)
        //                            1 vs 3 (5-1-1)
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

}
reverse1(arr1);
console.log(arr1);