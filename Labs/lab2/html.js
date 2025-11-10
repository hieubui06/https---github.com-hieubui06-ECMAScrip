// Tạo HTML template cho card sản phẩm
const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString()}đ</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p><strong>Giá sau giảm: ${finalPrice.toLocaleString()}đ</strong></p>
  <p>Trạng thái: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>
`; // Viết template ở đây

console.log(productCard);