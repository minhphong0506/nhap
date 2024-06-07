// Hiển thị thông báo chọn đơn vị hành chính
function showSelected() {
    var selectElement = document.getElementById("chondonvihanhchinh");
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex].text;
    var message = "Bạn đã chọn: " + selectedOption;
    alert(message);
}

// Hiển thị thông báo tra cứu thông tin
var search = document.getElementById('search').addEventListener('click', function(){
    var so_to = document.getElementById('soto').value;
    var loai_dat = document.getElementById('loaidat').value;
    var so_thua = document.getElementById('sothua').value;
    var loai_dat_quyhoach = document.getElementById('loaiquyhoach').value;
    // Kiểm tra xem các trường input có được điền đầy đủ hay không
    if(so_to === "" && loai_dat === "" && so_thua === "" && loai_dat_quyhoach === "") {
        alert("Vui lòng nhập thông tin tìm kiếm!");
    } else {
        alert("Bạn vừa nhập thông tin tìm kiếm:\n\nTờ bản đồ số: " + so_to + "\nThửa đất số: " + so_thua + "\nLoại đất: " + loai_dat + "\nLoại đất quy hoạch: " + loai_dat_quyhoach);

        // Truy vấn và hiển thị trong bảng "diachinh"
        var tableDiachinh = document.getElementById('diachinh');
        filterTable(tableDiachinh, so_to, loai_dat, so_thua, loai_dat_quyhoach);

        // Truy vấn và hiển thị trong bảng "quyhoach"
        var tableQuyhoach = document.getElementById('quyhoach');
        filterTable(tableQuyhoach, so_to, loai_dat, so_thua, loai_dat_quyhoach);
    }
});

function filterTable(table, so_to, loai_dat, so_thua, loai_dat_quyhoach) {
    var rows = table.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var matched = false;
        for (var j = 0; j < cells.length; j++) {
            var cell = cells[j];
            var cellText = cell.textContent || cell.innerText;
            if (cellText.indexOf(so_to) !== -1 && cellText.indexOf(loai_dat) !== -1 && cellText.indexOf(so_thua) !== -1 && cellText.indexOf(loai_dat_quyhoach) !== -1) {
                matched = true;
                break;
            }
        }
        if (matched) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}






// Xóa thông tin tra cứu đã nhập
var reset = document.getElementById('reset').addEventListener('click', function(){
    var so_to = document.getElementById('soto').value = '';
    var loai_dat = document.getElementById('loaidat').value = '';
    var so_thua = document.getElementById('sothua').value = '';
    var loai_quy_hoach = document.getElementById('loaiquyhoach').value = '';
});


// Hiển thị thông báo tọa độ
var searchtoado = document.getElementById('searchtoado').addEventListener('click', function(){
    var search_toa_do = document.getElementById('searchtoado').value;
    alert("Thao tác của Bạn sẽ được thực hiện");
});


// Thông báo chọn Bản đồ nền
    // Lấy tất cả các phần tử có class là 'dropdown-item' bên trong dropdown menu có id là 'bandonen'
var thongbao_donvihanhchinh = document.querySelectorAll('#bandonen .dropdown-item');
    // Lặp qua từng phần tử và gán sự kiện 'click'
    thongbao_donvihanhchinh.forEach(item => {
        item.addEventListener('click', () => {
    // Lấy nội dung của mục được chọn
    var itemName = item.textContent.trim();
    // Xuất hiện thông báo
        alert('Bạn đã chọn: ' + itemName);
    });
});

// Thông báo chọn Bản đồ Địa chính
var thongbao_bd_diachinh = document.querySelectorAll('#diachinhhome .dropdown-item');
    thongbao_bd_diachinh.forEach(item => {
        item.addEventListener('click', () => {
    var itemName = item.textContent.trim();
        alert('Bạn đã chọn Bản đồ Địa chính ' + itemName);
    });
});

// Thông báo chọn Bản đồ Quy hoạch
var thongbao_bd_quyhoach = document.querySelectorAll('#quyhoachhome .dropdown-item');
    thongbao_bd_quyhoach.forEach(item => {
        item.addEventListener('click', () => {
    var itemName = item.textContent.trim();
        alert('Bạn đã chọn Bản đồ Quy hoạch ' + itemName);
    });
});

// Quay về "Trang chủ"
document.getElementById('home').addEventListener('click', function() {
    // Chuyển hướng người dùng đến trang chủ (ví dụ: index.html)
    window.location.href = 'index.html';
});










// Nút tìm kiếm nằm ngoài màn hình //
document.getElementById("showtimkiem").addEventListener("click", function() {
    document.getElementById("searchForm").style.display = "block";
  });

document.getElementById("hideSearchFormBtn").addEventListener("click", function() {
    document.getElementById("searchForm").style.display = "none";
  });

document.getElementById("searchBtn").addEventListener("click", function() {
    var soto_timkiem = document.getElementById("sototimkiem").value;
    var sothua_timkiem = document.getElementById("sothuatimkiem").value;
    
    // Thực hiện tìm kiếm dữ liệu dựa trên searchType và searchTerm
    var kq_thongtinthuadat = "Tờ số "+ soto_timkiem+ ";"+ " Thửa số "+ sothua_timkiem+ ";" + " Diện tích";
    var kq_thongtinquyhoach = "Loại đất ;"+" Diện tích ";

    var thongtinthuadat = document.getElementById("thongtinthuadat");
        thongtinthuadat.innerHTML = kq_thongtinthuadat;
        thongtinquyhoach = document.getElementById("thongtinquyhoach");
        thongtinquyhoach.innerHTML = kq_thongtinquyhoach;

document.getElementById("searchResults").style.display = "block";
});

document.getElementById("hideSearchResultsBtn").addEventListener("click", function() {
    document.getElementById("searchResults").style.display = "none";
});


    // Ngăn chặn chạm vào bảng đồ
document.addEventListener("DOMContentLoaded", function() {
    var showTimkiemButton = document.getElementById("showtimkiem");
  
    // Thêm sự kiện click vào nút tìm kiếm
    showTimkiemButton.addEventListener("click", function(event) {
      // Ngăn chặn sự kiện click lan ra
      event.stopPropagation();
    });
  });



// Code xóa dòng nhập tọa độ thửa đất
var rowNum = 1;
            
function addRow() {
    var tableBody = document.getElementById("myTableBody");
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = rowNum++;
    cell2.innerHTML = "<input type='text' class='form-control'>";
    cell3.innerHTML = "<input type='text' class='form-control'>";
    cell4.innerHTML = "<button class='btn btn-outline-dark' onclick='deleteRow(this)'>Xóa</button>";
    updateRowNumbers();
}

function deleteRow(button) {
    var confirmation = confirm("Bạn có chắc muốn xóa dòng này?");
    if (confirmation) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateRowNumbers();
    }
}

function deleteAllRows() {
    var confirmation = confirm("Bạn có chắc muốn xóa toàn bộ dữ liệu?");
    if (confirmation) {
        document.getElementById("myTableBody").innerHTML = "";
        rowNum = 1;
    }
}

function updateRowNumbers() {
    var tableBody = document.getElementById("myTableBody");
    var rows = tableBody.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerHTML = i + 1;
    }
}

