document.getElementById("actionButton").addEventListener("click", function () {
    // Hiển thị thông báo tên nhóm
    alert("Nhóm gồm: Nguyen, Luan và Loi");

    // Danh sách thành viên và ảnh tương ứng
    const members = [
        { name: "Luan", imgSrc: "./img/jerry.jpg" },
        { name: "Loi", imgSrc: "./img/tom.png" },
        { name: "Nguyen", imgSrc: "./img/spike.png" },
        
    ];

    // Tạo phần tử chứa danh sách thành viên
    const container = document.createElement("div");
    container.style.display = "flex"; // Sử dụng Flexbox
    container.style.justifyContent = "center"; // Canh giữa các phần tử
    container.style.gap = "20px";
    container.style.textAlign = "center";

    // Duyệt qua danh sách thành viên
    members.forEach(member => {
        // Tạo phần tử tên
        const name = document.createElement("p");
        name.textContent = member.name;
        name.style.fontSize = "1.2rem";
        name.style.fontWeight = "bold";
        name.style.color = "#333";

        // Tạo phần tử ảnh
        const img = document.createElement("img");
        img.src = member.imgSrc; // Đường dẫn đến ảnh của thành viên
        img.alt = `Ảnh của ${member.name}`;
        img.style.width = "200px"; // Kích thước ảnh
        img.style.marginTop = "10px";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

        // Gắn tên và ảnh vào container
        container.appendChild(name);
        container.appendChild(img);
    });

    // Thêm container vào phần tử main
    const main = document.querySelector("main");
    main.appendChild(container);
});