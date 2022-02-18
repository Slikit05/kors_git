$(document).ready(function () {
  $("#city").selectmenu({
    select: function (event, ui) {}
  });
});

function addMarkers(id) {
  if (typeof id === 'undefined') return false;
  if (!window.groups) return false;
  if (!window.js_yandex_map) return false;
  try {
    js_yandex_map.geoObjects.removeAll();
    for (j in groups[id]['items']) {
      // Создаем метку.
      var placemark = new ymaps.Placemark(groups[id]['items'][j].center, {
        balloonContent: groups[id]['items'][j].name
      });

      js_yandex_map.geoObjects.add(placemark);
    }

  } catch (e) {
    console.log(e);
  }


  return true;
}


$(document).ready(function () {
  //v-1
  ymaps.ready(init);

  function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
      center: [55.755814, 37.617635],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    });

    myMap.behaviors
      // Отключаем часть включенных по умолчанию поведений:
      //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
      .disable(['rightMouseButtonMagnifier'])

    // Изменяем свойство поведения с помощью опции:
    // изменение масштаба колесом прокрутки будет происходить медленно,
    // на 1/2 уровня масштабирования в секунду.
    //  myMap.options.set('scrollZoomSpeed', 1);


    // Контейнер для меню.
    menu = $('<ul class="map-filter__mark-list"></ul>');

    console.log(menu);
    for (var i = 0, l = groups.length; i < l; i++) {
      $('<li class="map-filter__mark-item"><a class="map-filter__mark-link" href="javascript:addMarkers(' + i + ')">' + groups[i]['name'] + '</a></li>').appendTo(menu);

      for (j in groups[i]['items']) {
        // Создаем метку.
        var placemark = new ymaps.Placemark(groups[i]['items'][j].center, {
          balloonContent: groups[i]['items'][j].name
        });

        myMap.geoObjects.add(placemark);
      }
    }

    window.js_yandex_map = myMap;



    // Добавляем меню в тэг Родителя.
    menu.appendTo($('.map-filter__mark-dropdown'));

    //Клик на кнопку фильтра
    $('#filterBtn').click(function () {
      var selectMark = $('#mark').val();
      var selectCity = $('#city').val();

      if (selectMark)
        addMarkers(selectMark);
      if (!window.city) return false;
      if (!window.js_yandex_map) return false;

      var
        val = 0;

      if (selectCity)
        val = parseInt(selectCity);

      if (val) {
        if (window.city.items[val]) {
          var
            city = window.city.items[val],
            coord = city.center;
          window.js_yandex_map.setCenter(coord, 11);

        }
        console.log(window.city.items[val]);
      }


    });

    $('.map-filter__mark-item').click(function () {
      var textMark = $(this).find('.map-filter__mark-link').html();
      console.log(textMark);
      $('.map-filter__check').text(textMark);
      $('.map-filter__mark-list').toggleClass('map-filter__mark-list--open');
    });
  }
});
