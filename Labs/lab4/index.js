// const colors = ["red", "green", "blue"];

// // const red  = colors[0];
// // console.log(red);


// // Array destructuring

// const [red, green, blue, yellow] = colors;
// console.log(red, green, blue, yellow);


// const number = [1, 2, 3, 4, 5];

// const [, second, , fourth] = numbers;
// console.log(second, fourth);


// const user = ["password", "email", "age", "name"];
// const [password, ...userInfo] = user;
// console.log(userInfo);



// bai1
const fruits = ["apple", "banana", "orange", "grape", "mango"];
const [firstFruit, secondFruit, ...otherFruits] = fruits;
// console.log(firstFruit, otherFruits);


const colors = ["red", "green", "blue", "yellow", "purple"];
const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor, tertiaryColor);

// Object Destructuring

//bai1
const user = {
    id: 1,
    personalInfo: {
        name: "BuivanHieu",
        contact: {
            email: "BuivanHieu@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const { personalInfo: { name, contact: { email } } } = user;
    return { name, email };
}

// console.log(getUserInfo(user));


// //bai2
function createProduct({
    name,
    price,
    category = "general",
    status = true }) {
    return { name, price, category, status };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);