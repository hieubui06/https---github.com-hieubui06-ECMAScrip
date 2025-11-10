// Tạo template cho email thông báo
const user = {
    firstName: "Nguyen",
    lastName: "Van A",
    product: "Laptop Dell XPS",
    price: 25000000,
    orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại hệ thống của chúng tôi.

Thông tin đơn hàng:
- Sản phẩm: ${user.product}
- Giá: ${user.price}đ
- Ngày đặt: ${user.orderDate}

Chúng tôi sẽ liên hệ bạn khi đơn hàng được xác nhận.
Trân trọng!
`; // Viết template ở đây vbvbvbv

console.log(emailTemplate);