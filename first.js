// Program to calculate average of numbers

function calculateAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {   // Bug: should be < arr.length
        sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg;
}

let numbers = [10, 20, 30, 40, 50];

let result = calculateAverage(numbers);

console.log("Average is: " + result);

// Another function to find minimum

function findMax(arr) {
    let min = arr[0];   // Bug: should be arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log("Minimum is: " + findMax(numbers));