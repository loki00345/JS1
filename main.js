// 1
let userName = prompt("Please enter your name:");
alert("Hello, " + userName);

// 2
const currentYear = new Date().getFullYear();
let birthYear = prompt("Please enter your year of birth:");
let age = currentYear - parseInt(birthYear);
alert("You " + age + " years.");

// 3
let squareSide = prompt("Please enter the length of the side of the square:");
let P = 4 * parseFloat(squareSide);
alert("The P of the square is equal " + P + ".");

// 4
let circleRadius = prompt("Please enter the radius of the circle:");
let area = Math.PI * parseFloat(circleRadius) ** 2;
alert("The area of the circle is approx " + area.toFixed(2) + ".");

// 5
let distance = prompt("Please enter the distance between cities in kilometers:");
let time = prompt("How many hours do you want to arrive??");
let speed = parseFloat(distance) / parseFloat(time);
alert("You need to move at a speed of approx " + speed.toFixed(2) + " km/h.");

// 6
const exchangeRate = 0.82;
let dollars = prompt("Please enter the dollar amount:");
let euros = parseFloat(dollars) * exchangeRate;
alert("This amounts to approx" + euros.toFixed(2) + " euro.");

// 7
let flashDriveCapacity = prompt("Please enter the volume of the flash drive in GB:");
let filesCount = Math.floor(parseFloat(flashDriveCapacity) * 1024 / 820);
alert("Volume on the flash drive " + flashDriveCapacity + " GB will fit approx " + filesCount + " files with a size of 820 MB.");

// 8
let walletAmount = prompt("Please enter the amount of money in the wallet:");
let chocolatePrice = prompt("Enter the cost of one chocolate bar:");
let chocolatesCount = Math.floor(parseFloat(walletAmount) / parseFloat(chocolatePrice));
let change = parseFloat(walletAmount) - chocolatesCount * parseFloat(chocolatePrice);
alert("you can buy " + chocolatesCount + " chocolates,and you will have " + change.toFixed(2) + " money.");

// 9
let threeDigitNumber = prompt("Please enter a three-digit number:");
let reversedNumber = parseInt(threeDigitNumber[2] + threeDigitNumber[1] + threeDigitNumber[0]);
alert("Palindrome number " + threeDigitNumber + " - this" + reversedNumber + ".");

// 10
let number = prompt("Будь ласка, введіть ціле число:");
let isEven = parseInt(number) % 2 === 0;
let result = isEven ? "парне" : "непарне";
alert("Ви ввели " + result + " число.");