// Program to calculate average of numbers

function calculateAverage(arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {   // Bug: should be < arr.length
        sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg;
}

let numbers = [10, 20, 30, 40, 50];

let result = calculateAverage(numbers);

console.log("Average is: " + result);

// Another function to find minimum

function findMin(arr) {
    let min = 0;   // Bug: should be arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log("Minimum is: " + findMin(numbers));