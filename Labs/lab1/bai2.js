function Book(title, author, year, price) {
    return {
        title,
        author,
        year,
        price,

        getBookInfo() {
            return `${this.title} - ${this.author} (${this.year}) - Giá: ${this.price.toLocaleString()}đ`;
        },

        calculateDiscount(phanTramGiam) {
            const giaSauGiam = this.price * (1 - phanTramGiam / 100);
            return `Giá sau giảm ${phanTramGiam}%: ${giaSauGiam.toLocaleString()}đ`;
        }
    };
}

const book = Book("JavaScript Cơ Bản", "Nguyen The Trung Duc", 2025, 120000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(20));