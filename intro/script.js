// Types of variable
// number 3
// boolean [true or false]
// float [3.4]
let output = 0;
const statusConst = 87;

// control structures
    // conditional statement
        // if else. else if. switch case
        // PEMDAS
        if((statusConst !== 87) || (statusConst >= 8)) {
            output = 8;
        }else if(statusConst === 87){
            output = 98
        }else{
            output = 7
        }
        // switch (statusConst) {
        //     case 87:
        //     case 80:
        //         output = 900;
        //         break;
        //     case 0:
        //         output = 870;
        //         break;
        //     default:
        //         output = false;
        // }

        // operators
            // arithmetic +,-,/,*,%
            // logical ||, &&, !
            // unary -1,
            // assignment =
            // comparison ==, ===, !==
            // increment / decrement ++, __
            // relational >, < , >=, <=

    // loop

    //     for
    const arr = [
        [2, 0, 5, [66, 99]],
        [7, 8, 6]
    ]

    // initialize, condition, increment/decrement
    for(let x = 1; x <= 20; x++) {
        if(isPrime(x)){
            // console.log(x)
        }
    }

    function isPrime (number) {
        if(number <= 3)
            return true

        for(let y = 2; y <= Math.sqrt(number); y++) {
            if((number % y !== 0)) {
                return true
            }
        }
    }

    // create a program that logs out prime numbers from 1 to 100
    //     while
    let guessNumber = 90;
    // while(num <= 10) {
    //     console.log("Dam");
    //     num++;
    // }
    //     do while
    // let userGuess = ''
    // do {
    //     userGuess = prompt("Guess the Number: ");
    //     if(userGuess != guessNumber)
    //         console.log("Wrong, Guess Again");
    //     else
    //         console.log("Correct");
    // }while (userGuess != guessNumber)

    // foreach: Use it when you need to loop through every element in the array
    const books = ["dani", "dee","silvet"];
    // books.forEach((value) => {
    //     console.log(value)
    // })

    // Arrays, Objects, String

    const $array = [ 32, 'yeye' ];
    const $array2 = [ 32, 'yeye', 54 ];

    output = $array.length
    // Create an array of books and perform 15 different operations on them
    console.log(output);

    $array.pop();
    $array2.pop();

    output = $array.length

    const lucky = {
        name: 'Lucky',
        age: 23,
        sex: 'male',
        favouriteFood: ['foos', 'gfgff'],
        calc: () => {
            return 2 + 2;
        }
    };

    // console.log(lucky.calc())
    // console.log(lucky.name);
    console.log(lucky['name']);
    // console.log(typeof(lucky))
    // console.log(Object.keys(lucky));
    // console.log(Object.values(lucky));

    const luckyKeys = Object.keys(lucky);

    luckyKeys.forEach(function(key) {
        console.log(lucky[key]);
    })

    for(const key in lucky){
        console.log(lucky[key])
    }

    const users = [
        {
            id: 1,
            name: 'Lucky',
            age: 23,
            sex: 'male',
            favouriteFood: ['foos', 'gfgff']
        },
        {
            name: 'Dami',
            age: 26,
            sex: 'male',
            favouriteFood: ['foos', 'gfgff']
        }
    ]

    // users.forEach(function(value){
    //     console.log(`My name is ${value.name}, I am ${value.age} years old`);
    // })




    // console.log(output);