// // Bai1
// const fruits = ["apple", "banana", "orange", "grape", "mango"];
// const [firstFruit, secondFruit, ...otherFruits] = fruits;
// console.log(firstFruit, otherFruits);


// // Bai2
// const user = {
//     id: 1,
//     personalInfo: {
//         name: "BuivanHieu",
//         contact: {
//             email: "BuivanHieu@email.com",
//             phone: "123-456-7890",
//         },
//     },
// };

// function getUserInfo(user) {
//     const { personalInfo: { name, contact: { email } } } = user;
//     return { name, email };
// }

// console.log(getUserInfo(user));

// Bai3
const fruits = ['Apple', 'Banana', 'Cherry'];
function fetchFruit(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index >= 0 && index < fruits.length) {
                // Thành công: Trả về phần tử
                resolve(fruits[index]);
            } else {
                // Thất bại: Trả về một lỗi
                reject(new Error('Fruit not found'));
            }
        }, 500);
    });
}
(async function demoAsync() {
    console.log('Bắt đầu demo...');
    try {
        const f = await fetchFruit(0);
        console.log('Async/Await:', f); // Sẽ in ra 'Apple'

        console.log('Đang thử gọi một index không hợp lệ...');
        await fetchFruit(10);

        console.log('Bạn sẽ không thấy log này.');

    } catch (e) {
        console.error('Async/Await error:', e.message);
    }
    console.log('...Demo kết thúc.');
})();