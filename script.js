document.addEventListener('DOMContentLoaded', function () {
    // Tìm kiếm tour theo giá
    const searchByPrice = () => {
        const minPrice = document.getElementById('minPrice').value;
        const maxPrice = document.getElementById('maxPrice').value;

        // Ở đây, bạn có thể thêm code để tìm kiếm tour theo giá trong database hoặc danh sách tours
        console.log(`Tìm kiếm tour từ ${minPrice} đến ${maxPrice}`);
    };

    // Tìm kiếm tour theo địa điểm
    const searchByLocation = () => {
        const location = document.getElementById('location').value;

        // Ở đây, bạn có thể thêm code để tìm kiếm tour theo địa điểm trong database hoặc danh sách tours
        console.log(`Tìm kiếm tour tại địa điểm ${location}`);
    };

    // Bắt sự kiện khi nhấn nút tìm kiếm theo giá
    document.getElementById('searchPrice').addEventListener('click', searchByPrice);

    // Bắt sự kiện khi nhấn nút tìm kiếm theo địa điểm
    document.getElementById('searchLocation').addEventListener('click', searchByLocation);

    console.log("abc");
});
