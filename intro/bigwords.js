// Callback

function signup(user, callback) {
    console.log("Signed up")
    callback();
}

// Closure
function counter() {
    let count = 0;

    return function(){
        count++
        console.log("Closure:" + count);
    }

}
function counts() {
    let count = 0;
    count++
    console.log("counts: " + count);
}

const count = counter();
count()
count()
count()
count()

counts()
counts()
counts()

// dependency Injection

// higher order function
const squareRoot = num => num * num;
const hello = _ => console.log("Hello");
function higherOrderFunction(func, value = null) {
    return value ? func(value) : func();
}

console.log(higherOrderFunction(squareRoot, 3));
higherOrderFunction(hello);