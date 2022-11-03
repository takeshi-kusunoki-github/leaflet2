//alert('hello javascript alert!')
//console.log('hello console!')
//var map = L.map('map').setView([34.0697,-118.4432], 17); santa monica
console.log('debug 01')
var map = L.map('map').setView([36.0726419,140.1180764], 19); //ララガーデン Mapセンタを表示　緯度経度とズームレベル

console.log('debug 02')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 //   console.log('debug 03')
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

console.log('debug 04')
var marker = L.marker([36.0726419,140.1180764]).addTo(map)
		.bindPopup('ニコ情報<br> ニコがよく飲んでいるお店')
		.openPopup();	
        console.log('debug 05')

//var marker2 = L.marker([36.0726405,140.1180419]).addTo(map);	
//        console.log('debug 05')       