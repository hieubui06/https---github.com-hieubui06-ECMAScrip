// Bài 1:
const multiply = (a, b) => a * b;
const isPositive = number => number >= 0;
const getRandomNumber = () => Math.random();
document.addEventListener("click", () => {
    console.log("Clicked!");
});

// Bài 2:
const createUser = (name = "Tduc", age = 18, isAdmin = false) => ({

    name: name,
    age: age,
    isAdmin: isAdmin,
});
// Bài 3:
const mergeArrays = (...arrays) => arrays.flat();

const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const createProduct = (name, price, inStock = true) => ({
    name,
    price,
    inStock
});

// Bài 4:
const shoppingCart = (customerName, ...products) => ({
    customerName,
    products,
    totalItems: products.length
});