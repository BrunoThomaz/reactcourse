function gradingStudents(grades) {
    const INPUT_ARRAY = grades.split('\n'); //Convert input in Array
    INPUT_ARRAY.shift(); //Separe number of grades and grades.
    let output = []; // output of the function

    for (grade of INPUT_ARRAY) {
        const INT_GRADE = parseInt(grade)
        const NEXT_FIVE_MULTIPLE = (((INT_GRADE/5)|0) + 1) * 5;

        if (NEXT_FIVE_MULTIPLE - INT_GRADE < 3 && NEXT_FIVE_MULTIPLE >= 40) {
            output.push(NEXT_FIVE_MULTIPLE);
        } else {
            output.push(INT_GRADE);
        }
        
    }
    console.log(output)
}

// gradingStudents("4\n73\n67\n38\n33")



function sockMerchant(n, ar) {
    const NUMBER_OF_SOCKS = parseInt(n);
    let socksArray = ar.split(' ');
    let totalOfPairs = 0;
    let howManySocksOfSomeColor = 1;
    socksArray = socksArray.sort();
    console.log(socksArray)
    for( let curr = 0; curr < socksArray.length - 1; curr ++) {
        if(socksArray[curr] === socksArray[curr + 1]) {
            howManySocksOfSomeColor+= 1;
            console.log(howManySocksOfSomeColor, socksArray[curr], socksArray[curr+1])
        } else {
            totalOfPairs += (howManySocksOfSomeColor/2)|0
            console.log((howManySocksOfSomeColor/2)|0, totalOfPairs)
            howManySocksOfSomeColor = 1
        }
    }
    totalOfPairs += (howManySocksOfSomeColor/2)|0
    return totalOfPairs
}

// sockMerchant("10", "1 1 3 1 2 1 3 3 3 3")

function countingValleys(steps, path) {
    const NUMBER_OF_STEPS = steps; //Interger number of steps.
    const PATH_ARRAY = path.split(''); //Convert the path string into an array.
    let currentLevel = 0; //Start level at sea.
    let numberOfValleys = 0; //Start number of Valleys as 0.

    for (let curr = 0; curr < NUMBER_OF_STEPS; curr++) { //Walk through the array of steps.
        
        if (PATH_ARRAY[curr] === "D") { //Check if a down step was made.
            if (currentLevel === 0) { // If was made in a sea level, the hiker got into a valley.
                numberOfValleys += 1; //Increment the number of valleys.
            }
            currentLevel -= 1; //Update the level of the hiker.
        } else currentLevel += 1; // Update the level of hiker if is a up step.
    }
    return numberOfValleys

}
countingValleys(10,"DDDUUUDDUUUUUDDD")