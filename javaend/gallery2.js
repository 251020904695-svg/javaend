/* External file: gallery.js */

function upDate(previewPic) {
  // 1) Đổi ảnh nền của div id="image" thành src của ảnh đang tương tác
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

  // 2) Đổi văn bản của div id="image" thành nội dung thẻ alt của ảnh
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  // 1) Khôi phục ảnh nền về mặc định (rỗng)
  document.getElementById("image").style.backgroundImage = "url('')";

  // 2) Khôi phục văn bản về ban đầu
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// Yêu cầu 8 & 9: Hàm khởi tạo khi trang load xong
function addTabFocus() {
  // Yêu cầu 9a: Thêm thông báo console.log để xác nhận sự kiện kích hoạt
  console.log("Sự kiện onload đã được kích hoạt thành công!");

  // Yêu cầu 9b: Lấy tất cả phần tử ảnh có class là 'preview'
  let images = document.getElementsByClassName("preview");

  // Yêu cầu 9b: Sử dụng vòng lặp for để duyệt qua từng ảnh
  for (let i = 0; i < images.length; i++) {
    console.log("Đã thêm tabindex cho hình ảnh số: " + (i + 1));

    // Yêu cầu 9c: Thêm thuộc tính tabindex="0" cho từng ảnh
    images[i].setAttribute("tabindex", "0");
  }
}