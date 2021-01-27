/**
 *  @param int     id ключ в массиве сметками
 *  @return bool true|false;
 */

//function addMarkers(id) {
//  if (typeof id === 'undefined') return false;
//  if (!window.groups) return false;
//  if (!window.js_yandex_map) return false;
//  try {
//    js_yandex_map.geoObjects.removeAll();
//    for (j in groups[id]['items']) {
//      // Создаем метку.
//      var placemark = new ymaps.Placemark(groups[id]['items'][j].center, {
//        balloonContent: groups[id]['items'][j].name
//      });
//
//      js_yandex_map.geoObjects.add(placemark);
//    }
//
//  } catch (e) {
//    console.log(e);
//  }
//
//
//  return true;
//}


$(document).ready(function () {
  var swiper = new Swiper('.first-screen__slider', {
    slidesPerView: 1,
    //    loop: true,
    direction: 'vertical',
    speed: 900,
    effect: 'fade',
    pagination: {
      el: '.first-screen__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.first-screen__arrow--next',
      prevEl: '.first-screen__arrow--prev',
    },
  });

  var swiper = new Swiper('.photo-slider', {
    slidesPerView: 2,
    loop: true,
    speed: 900,
    navigation: {
      nextEl: '.photo-slider__arrow--next',
      prevEl: '.photo-slider__arrow--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    }
  });


  var swiper = new Swiper('.recommend__slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

      1200: {
        slidesPerView: 4,
      },

      991: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },

      575: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      }
    }
  });


  //select
  $(".filter__select").selectmenu();


  $("#mark").selectmenu();
  $(".my-modal__select").selectmenu();


  //sticky
  $(".sidebar").stick_in_parent();
  $(".calendar__list").stick_in_parent();

  //accordion
  $('.accordion__row').click(function () {
    $(this).find('.accordion__info').slideToggle(700);
    $(this).find('.accordion__info').toggleClass('accordion__info--open');
    $(this).find('.accordion__click').toggleClass('accordion__click--open');
  });

  $('.accordion-modal__row').click(function () {
    $(this).closest('.accordion-modal').find('.accordion-modal__content').slideToggle(700);
    $(this).find('.accordion-modal__click').toggleClass('accordion-modal__click--open');
  });

  //remove column comparison
  $('.comparison__close').click(function () {
    var numberTableColumn = $(this).closest('.comparison__table-date').index();
    console.log(numberTableColumn);
  });

  $('.filter-btn').click(function () {
    $('.filter').slideToggle();
  });

  $('.burger').click(function () {
    $('.mob-menu').toggle("right");
    $('html').addClass('hiden');
  });

  $('.close').click(function () {
    $('.mob-menu').toggle("right");
    $('html').removeClass('hiden');
  });

  //Модалка


  // Модалка
  $('.show_popup').click(function () {
    var popup_id = $('#' + $(this).attr('rel'));
    $(popup_id).show();
    $(popup_id).find('.my-modal').addClass('modal-open');
    $('html').addClass('hiden');
    return false;
  });
  $('.close-popup').click(function () {
    $(this).closest('.my-modal').removeClass('modal-open');
    $(this).closest('.modal-container').hide();

    if ($('.my-modal').hasClass('modal-open')) {
      $('html').addClass('hiden');
    } else {
      $('html').removeClass('hiden');
    }
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var customSelect = $(".my-modal"); // тут указываем ID элемента
    if (!customSelect.is(e.target) // если клик был не по нашему блоку
      &&
      customSelect.has(e.target).length === 0) { // и не по его дочерним элементам
      customSelect.closest('.modal-container').hide();
      customSelect.removeClass('modal-open');
      $('html').removeClass('hiden');
    }
  });

  // $('.show_popup').click(function () {
  //   var popup_id = $('#' + $(this).attr('rel'));
  //   $(popup_id).show();
  //   $('.overlay_popup').show();
  //   $('html').addClass('hiden');
  // })
  // $('.overlay_popup').click(function () {
  //   $('.overlay_popup, .popup').hide();
  //   $('html').removeClass('hiden');
  // })
  // $('.close-popup').click(function () {
  //   $('.overlay_popup, .popup').hide();
  //   $('html').removeClass('hiden');
  // });

  $('.prizes__link-row').click(function () {
    $(this).closest('.prizes__row').find('.prizes-dropdown').slideToggle();
    $(this).closest('.prizes__row').toggleClass('prizes__row--open');
    $(this).toggleClass('prizes__link-row--open');
  });

  $('.prizes-dropdown__close').click(function () {
    $(this).closest('.prizes__row').find('.prizes-dropdown').slideToggle();
    $(this).closest('.prizes__row').toggleClass('prizes__row--open');
    $(this).closest('.prizes__row').find('.prizes__link-row').toggleClass('prizes__link-row--open');
  });

  //  $("#menu").on("click", "a", function (event) {
  //    event.preventDefault();
  //    //отменяем стандартную обработку нажатия по ссылке
  //    if (!$('.calendar-content').hasClass('calendar__wrapper--open')) {
  //      //забираем идентификатор бока с атрибута href
  //      var id = $(this).attr('href'),
  //        offsetElem = $('.calendar-block').offset().top,
  //        pos = $(this).data('pos') || 0,
  //        //узнаем высоту от начала страницы до блока на который ссылается якорь
  //        top = $(id).offset().top;
  //      //анимируем переход на расстояние - top за 1500 мс
  //
  //      $('.calendar-content').animate({
  //        scrollTop: pos
  //      }, 1500);
  //      console.log('top', pos);
  //      //console.log(offsetElem)
  //    } else {
  //      var idTwo = $(this).attr('href'),
  //        //узнаем высоту от начала страницы до блока на который ссылается якорь
  //        topTwo = $(idTwo).offset().top - 30;
  //      //анимируем переход на расстояние - top за 1500 мс
  //      $('body,html').animate({
  //        scrollTop: topTwo
  //      }, 1500);
  //
  //    }
  //  });

  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 30;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.calendar__more').click(function () {
    $('.calendar__wrapper').addClass('calendar__wrapper--open');
    $(this).hide();
  });

  $('.mobile-icon__wrapper').mouseenter(function () {
    $('.mobile-galery__block').removeClass('mobile-galery__block--active');
    var mobileIconId = $('#' + $(this).attr('rel'));
    $(mobileIconId).addClass('mobile-galery__block--active');
  });

  $('.mobile-icon__wrapper').click(function () {
    $('.mobile-icon__wrapper').closest('.mobile-icon__container').find('.mobile-icon__block').hide(300);
    $(this).closest('.mobile-icon__container').find('.mobile-icon__block').show(300);
  });

  $('.mobile-icon__close').click(function () {
    $(this).closest('.mobile-icon__container').find('.mobile-icon__block').hide(300);
  });

  $(document).mouseup(function (e) {
    var mobileInfo = $(".mobile-icon__block");
    if (!mobileInfo.is(e.target) &&
      mobileInfo.has(e.target).length === 0) {
      mobileInfo.hide(300);
    }
  });

  $('.social__link').mouseenter(function () {
    $('.social__link').css('opacity', '0.5');
    $(this).css('opacity', '1');
  });

  $('.social__link').mouseleave(function () {
    $('.social__link').css('opacity', '1');
  });

  $('input[type="tel"]').mask('8 (999) 999-9999');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
      $('.up-row').addClass('fixed');
    } else if ($(this).scrollTop() < 15) {
      $('.up-row').removeClass('fixed');
    }
  });

  $(".download-modal__file").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $(".filename").html('<span>' + 'Вы прикрепили файл:' + '</span>' + filename);
  });

  $('.custom-select').click(function () {
    $(this).closest('.custom-drop').find('.custom-drop-bloc').toggle('left');
  });

  $('.body-type__block').click(function () {
    $('.body-type__block').removeClass('body-type__block--active');
    $(this).addClass('body-type__block--active');
    var bodyName = $(this).find('.body-type__name').text();
    console.log(bodyName);
    $('.custom-select__text').html(bodyName);
    //    $('.custom-select__text').val($('.custom-select__text').val() + bodyName + ', ');
  });

  //  var $customDrop = $('.custom-drop');
  //  if ( $customDrop.length ) {
  //    $customDrop.on( "change", "[type='checkbox'].body-type__check", function() {
  //      console.log(this, this.value, this.checked);
  //      var
  //        text = '',
  //        val = this.value,
  //        _parent = $(this).closest('.body-type__block'),
  //        _container = $(this).closest('.custom-drop'),
  //          
  //        _wrapper = _container.find('.custom-select__text'),
  //        html = ''
  //      ;
  //      if ( _parent && _wrapper && val ) {
  //        text = _parent.find('.body-type__name').text();
  //        html = '<span class="comma" data-value="'+val+'">'+text+'</span>';
  //        if ( this.checked ) {
  //            if ( _wrapper.children().length ) {
  //              _wrapper.append(html);
  //            } else {
  //              _wrapper.html(html)
  //            }
  //
  //        } else {
  //            if ( _wrapper.find('[data-value="'+val+'"]') ) {
  //              _wrapper.find('[data-value="'+val+'"]').remove();
  //            }
  //            if ( !_wrapper.children().length ) {
  //              _wrapper.text('Выберите кузов');
  //            }
  //        }
  //      }
  //    });
  //    
  //  }
});

if ($('.calendar-block').length) {
  var
    tmpHeight = 0,
    superTest = [];
  $('.calendar-block').each(function () {
    var
      h = $(this).outerHeight(),
      pos = h + 28;
    if ($('[href="#' + this.id + '"].calendar-anchor').length) {
      $('[href="#' + this.id + '"].calendar-anchor').data('pos', tmpHeight);
    }
    tmpHeight += pos;
  });
}

////v-1
//ymaps.ready(init);
//
//function init() {
//
//  // Создание экземпляра карты.
//  var myMap = new ymaps.Map('map', {
//    center: [55.755814, 37.617635],
//    zoom: 12
//  }, {
//    searchControlProvider: 'yandex#search'
//  });
//
//  myMap.behaviors
//    // Отключаем часть включенных по умолчанию поведений:
//    //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
//    .disable(['rightMouseButtonMagnifier'])
//
//  // Изменяем свойство поведения с помощью опции:
//  // изменение масштаба колесом прокрутки будет происходить медленно,
//  // на 1/2 уровня масштабирования в секунду.
//  //  myMap.options.set('scrollZoomSpeed', 1);
//
//
//  // Контейнер для меню.
//  menu = $('<ul class="map-filter__mark-list"></ul>');
//
//  console.log(menu);
//  for (var i = 0, l = groups.length; i < l; i++) {
//    $('<li class="map-filter__mark-item"><a class="map-filter__mark-link" href="javascript:addMarkers(' + i + ')">' + groups[i]['name'] + '</a></li>').appendTo(menu);
//
//    for (j in groups[i]['items']) {
//      // Создаем метку.
//      var placemark = new ymaps.Placemark(groups[i]['items'][j].center, {
//        balloonContent: groups[i]['items'][j].name
//      });
//
//      myMap.geoObjects.add(placemark);
//    }
//  }
//
//  window.js_yandex_map = myMap;
//
//
//
//  // Добавляем меню в тэг Родителя.
//  menu.appendTo($('.map-filter__mark-dropdown'));
//
//  //Клик на кнопку фильтра
//  $('#filterBtn').click(function () {
//    var selectMark = $('#mark').val();
//    var selectCity = $('#city').val();
//
//    if (selectMark)
//      addMarkers(selectMark);
//    if (!window.city) return false;
//    if (!window.js_yandex_map) return false;
//
//    var
//      val = 0;
//
//    if (selectCity)
//      val = parseInt(selectCity);
//
//    if (val) {
//      if (window.city.items[val]) {
//        var
//          city = window.city.items[val],
//          coord = city.center;
//        window.js_yandex_map.setCenter(coord, 11);
//
//      }
//      console.log(window.city.items[val]);
//    }
//
//
//  });
//
//  $('.map-filter__mark-item').click(function () {
//    var textMark = $(this).find('.map-filter__mark-link').html();
//    console.log(textMark);
//    $('.map-filter__check').text(textMark);
//    $('.map-filter__mark-list').toggleClass('map-filter__mark-list--open');
//  });
//}

$('.map-filter__row').click(function () {
  $('.map-filter__mark-list').toggleClass('map-filter__mark-list--open');
});


///*Яндекс карта*/
//ymaps.ready(init);
//var myMapTwo,
//  myPlacemark;
///*Здесь надо указывать координаты центра карты*/
//function init() {
//  myMapTwo = new ymaps.Map("mapThree", {
//    center: [45.06442175680212,38.961605071411064],
//    zoom: 14,
//    controls: ['geolocationControl']
//  });
//
//  myMapTwo.behaviors.disable([
//    'drag',
//    'scrollZoom',
//  ]);
//  /*Здесь надо указывать адрес до балуна и настраивать местоположение и размеры*/
//  myPin = new ymaps.GeoObjectCollection({}, {
//    iconLayout: 'default#image',
//    iconImageHref: 'img/balun.svg',
//    iconImageSize: [34, 48],
//    iconImageOffset: [-18, -40]
//  });
//  /*Здесь указывать кодинаты для местоположения метки*/
//  myPlacemark = new ymaps.Placemark([45.06442175680212,38.961605071411064], {});
//
//  myPin.add(myPlacemark);
//  myPlacemark.geoObjects.add(myPin);
//};
