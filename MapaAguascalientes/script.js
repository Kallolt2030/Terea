// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital

var aguascalientes = L.icon({
    iconUrl: 'Aguascalientes.png', 
    iconSize: [45, 45], 
    iconAnchor: [20, 40], 
    popupAnchor: [20, -52] 
});

var marker = L.marker([21.88234, -102.28259], {icon: aguascalientes}).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria

var plaza = L.icon({
    iconUrl: 'plaza.png', 
    iconSize: [45, 45], 
    iconAnchor: [20, 40], 
    popupAnchor: [20, -52] 
});

var plazaPatria = L.marker([21.88187, -102.29495], {icon: plaza}).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Marcador en el Museo Nacional de la Muerte

var muerte = L.icon({
    iconUrl: 'calavera.png', 
    iconSize: [45, 45], 
    iconAnchor: [20, 40], 
    popupAnchor: [20, -52] 
});

var museoMuerte = L.marker([21.88417, -102.28878], {icon: muerte}).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
   }).addTo(map);
   feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

   var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
   ]).addTo(map);
   centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

   var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
   };
   var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
   };
   L.control.layers(baseMaps, overlayMaps).addTo(map);


   var isla = L.icon({
    iconUrl: 'isla.jpg', 
    iconSize: [45, 45], 
    iconAnchor: [20, 40], 
    popupAnchor: [20, -52] 
});
   var islaSanMarcos = L.marker([21.861918, -102.321215], {icon: isla}).addTo(map);
   islaSanMarcos.bindPopup("<b>Isla San Marcos</b><br>Recinto fluvial ajardinado.").openPopup();

  


   




   
   
   
   
   
   
