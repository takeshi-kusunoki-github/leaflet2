//var map = L.map('map').setView([34.0697,-118.4432], 17); santa monica
var map = L.map('map').setView([36.0726419,140.1180764], 19); //ララガーデン Mapセンタを表示　緯度経度とズームレベル

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([36.0726419,140.1180764]).addTo(map)
		.bindPopup('ニコ情報<br> ニコがよく飲んでいるお店')
		.openPopup();	