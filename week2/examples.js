function howdy() {
    return 'Howdy World!';
}
const message = howdy();
console.log(message);


function square(x) {
    return x * x;
}
square(4.5);


function discount(price, amount = 10) {
    return price * (100 - amount) / 100;
}
// discount(20,20);