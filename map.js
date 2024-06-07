// Tọa độ khi hiển thị mặc định
var map = L.map('map').setView([10.642972333688503, 106.78831608473344], 13);
// Thêm lớp dữ liệu đường phố từ OpenStreetMap
var streetmap = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    zIndex: 10
}).addTo(map);

// Tạo một lớp dữ liệu từ dịch vụ WMS
var thuadat = L.tileLayer.wms('http://localhost:8080/geoserver/phongne/wms', {
    layers: 'phongne:thuadat3', // Tên lớp từ dịch vụ WMS
    format: 'image/png',
    transparent: true,
    maxZoom: 30
}).addTo(map); // Thêm lớp dữ liệu WMS vào bản đồ

var matduongbo = L.tileLayer.wms('http://localhost:8080/geoserver/phongne/wms', {
    layers: 'phongne:matduongbo', // Tên lớp từ dịch vụ WMS
    format: 'image/png',
    transparent: true,
    maxZoom: 30
}).addTo(map);

var timduong = L.tileLayer.wms('http://localhost:8080/geoserver/phongne/wms', {
    layers: 'phongne:timduong', // Tên lớp từ dịch vụ WMS
    format: 'image/png',
    transparent: true,
    maxZoom: 30
}).addTo(map);

var vungthuyhe = L.tileLayer.wms('http://localhost:8080/geoserver/phongne/wms', {
    layers: 'phongne:vungthuyhe', // Tên lớp từ dịch vụ WMS
    format: 'image/png',
    transparent: true,
    maxZoom: 30
}).addTo(map);





// Tạo một lớp nhóm để chứa cả hai lớp
var allLayers = L.layerGroup([streetmap, thuadat, matduongbo, vungthuyhe, timduong]);

// Tạo một lớp kiểm soát để cho phép người dùng chọn xem hoặc ẩn lớp WMS
var baseLayers = {
    "Street Map": streetmap,
    "Thuadat": thuadat, 
    "MatDuong": matduongbo,
    "ThuyHe": vungthuyhe,
    "TimDuong": timduong,
    "All": allLayers
};

// Thêm lớp kiểm soát vào bản đồ
L.control.layers(baseLayers).addTo(map);



    


// Lấy tọa độ khi bấm vào map
map.on('dblclick', function(e) {
    alert("Tọa độ: " + e.latlng.lat + ", " + e.latlng.lng);
});

map.on("click", function (e) {
    var soto = document.getElementById("soto").value;
    var loai_dat = document.getElementById("loaidat").value;
    var so_thua = document.getElementById("sothua").value;
    var loai_quyhoach = document.getElementById("loaiquyhoach").value;
       var popupContent = '<p><strong>Tờ số: </strong>' + soto + '</p>'+
                          '<p><strong>Loại đất: </strong>' + loai_dat + '</p>'+
                          '<p><strong>Thửa số: </strong>' + so_thua + '</p>'+
                          '<p><strong>Quy hoạch: </strong>' + loai_quyhoach + '</p>';
    L.popup().setLatLng(e.latlng).setContent(popupContent).openOn(map);
});



