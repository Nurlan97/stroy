var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.871198, 74.58052],
        zoom: 18
    });

    var myIcon = DG.icon({
        iconUrl: 'https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-rouge.png   ',
        iconSize: [50, 40],
    });
    DG.marker([42.871198, 74.58052], {icon: myIcon}).bindPopup('Уметалиева 34').openPopup().addTo(map);

    
});     