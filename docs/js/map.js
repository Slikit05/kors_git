/*Яндекс карта*/
ymaps.ready(init);
var myMap,
  myPlacemark;
/*Здесь надо указывать координаты центра карты*/
function init() {
  myMap = new ymaps.Map("map", {
    center: [45.06442175680212,38.961605071411064],
    zoom: 14,
    controls: ['geolocationControl']
  });
  /*Здесь надо указывать адрес до балуна и настраивать местоположение и размеры*/
  myPin = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/balun.svg',
    iconImageSize: [49, 70],
    iconImageOffset: [10, -55]
  });
  /*Здесь указывать кодинаты для местоположения метки*/
  myPlacemark = new ymaps.Placemark([45.06442175680212,38.961605071411064], {});

  myPin.add(myPlacemark);
  myMap.geoObjects.add(myPin);
};