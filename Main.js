/**
 * Bài 1: Tính Tiền Lương Nhân Viên
 * 
 * * Input:
 *   - Người dùng nhập vào số ngày làm việc của nhân viên
 *   - Lương 1 ngày của nhân viên là 100.000
 * 
 * * Process:
 *   - Tính tổng tiền lương = Số ngày làm việc * Lương 1 ngày
 * 
 * * Output:
 *  - Tổng tiền lương của nhân viên
 *  - Hiển thị kết quả ra màn hình
 */

const btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
  // Input
  const soNgayLamViec = document.getElementById("soNgay").value;
  const luong1Ngay = 100000;

  // Process
  const tongTienLuong = soNgayLamViec * luong1Ngay;

  // Output
  const result = document.getElementById("result1");
  result.innerHTML = `Tổng tiền lương của nhân viên là: ${tongTienLuong.toLocaleString()} VND`;
};

/**
 * Bài 2: Tính Giá Trị Trung Bình
 * 
 * * Input:
 *  - Người dùng nhập vào 5 số thực
 * 
 * * Process:
 *  - Tính tổng các số thực
 *  - Tính giá trị trung bình = Tổng các số thực / 5
 * 
 * * Output:
 *  - Kết quả giá trị trung bình của 5 số thực
 *  - Hiển thị kết quả ra màn hình
 */

const btnTinhTrungBinh = document.getElementById("btnTinhTrungBinh");
btnTinhTrungBinh.onclick = function () {
    // Input
    const so1 = document.getElementById("so1").value * 1;
    const so2 = document.getElementById("so2").value * 1;
    const so3 = document.getElementById("so3").value * 1;
    const so4 = document.getElementById("so4").value * 1;
    const so5 = document.getElementById("so5").value * 1;

    // Process
    const tong = so1 + so2 + so3 + so4 + so5;
    const trungBinh = tong / 5;

    // Output
    const result2 = document.getElementById("result2");
    result2.innerHTML = `Giá trị trung bình của 5 số thực là: ${trungBinh.toFixed(2)}`;
};

/** 
 * Bài 3: Quy đổi tiền
 * 
 * * Input:
 *  - Người dùng nhập vào số tiền USD
 *  - Tỷ giá USD sang VND là 23.500
 * 
 * * Process:
 *  - Tính số tiền VND = Số tiền USD * Tỷ giá
 * 
 * * Output:
 *  - Kết quả số tiền VND sau khi quy đổi
 *  - Hiển thị kết quả ra màn hình
 */

const btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
    // Input
    const soTienUSD = document.getElementById("soTienUSD").value * 1;
    const tyGia = 23500;

    // Process
    const soTienVND = soTienUSD * tyGia;

    // Output
    const result3 = document.getElementById("result3");
    result3.innerHTML = `Số tiền VND sau khi quy đổi là: ${soTienVND.toLocaleString()} VND`;
};

/** 
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * * Input:
 *  - Người dùng nhập vào chiều dài của hình chữ nhật
 *  - Người dùng nhập vào chiều rộng của hình chữ nhật
 * 
 * * Process:
 *  - Tính diện tích = Chiều dài * Chiều rộng
 *  - Tính chu vi = 2 * (Chiều dài + Chiều rộng)
 * 
 * * Output:
 *  - Kết quả diện tích và chu vi của hình chữ nhật
 *  - Hiển thị kết quả ra màn hình
 */

const btnTinhDienTich = document.getElementById("btnTinhDienTich");
btnTinhDienTich.onclick = function () {
    // Input
    const chieuDai = document.getElementById("chieuDai").value * 1;
    const chieuRong = document.getElementById("chieuRong").value * 1;

    // Process
    const dienTich = chieuDai * chieuRong;

    // Output
    const resultDienTich = document.getElementById("resultDienTich");
    resultDienTich.innerHTML = `Diện tích của hình chữ nhật là: ${dienTich} m²`;
};

const btnTinhChuVi = document.getElementById("btnTinhChuVi");
btnTinhChuVi.onclick = function () {
    // Input
    const chieuDai = document.getElementById("chieuDai").value * 1;
    const chieuRong = document.getElementById("chieuRong").value * 1;

    // Process
    const chuVi = 2 * (chieuDai + chieuRong);

    // Output
    const resultChuVi = document.getElementById("resultChuVi");
    resultChuVi.innerHTML = `Chu vi của hình chữ nhật là: ${chuVi} m`;
};

/**
 * Bài 5: Tính tổng 2 ký số
 * 
 * * Input:
 *      - Người dùng nhập vào số có 2 chữ số
 * 
 * * Process:
 *      - Lấy chữ số hàng đơn vị bằng công thức so % 10
 *      - Lấy chữ số hàng chục bằng công thức Math.floor(so / 10)
 *      - Tính tổng 2 chữ số
 * 
 * * Output:
 *      - Kết quả tổng 2 chữ số
 *      - Hiển thị kết quả ra màn hình
 */

const btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
    // Input
    const so2KySo = document.getElementById("so2KySo").value * 1;

    const chuSoHangDonVi = so2KySo % 10;
    const chuSoHangChuc = Math.floor(so2KySo / 10);

    const tong = chuSoHangDonVi + chuSoHangChuc;

    // Output
    const result5 = document.getElementById("result5");
    result5.innerHTML = `Tổng của 2 chữ số là: ${tong}`;
};