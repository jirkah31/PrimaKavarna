/* 
*		* * * WALLPAPER HEADER * * * 
*/

config = {
	fadeSpeed: 2000,
	delayTime: 4000,
};

var cover = $('.cover'),
	wallpaper = $('.wallpaper');

setInterval(function () {
	wallpaper.children(':last').fadeOut(window.config.fadeSpeed, function () { //mizení obrázku viditelného
		$(this).prependTo(wallpaper);
	});
	wallpaper.children(':first').fadeIn(window.config.fadeSpeed); //zviditelnění prvního
}, window.config.delayTime);

/*
*		*** BACK TO TOP ***
*/
(function ($) {

	var backToTop = $('<div>', {
		id: 'nahoru',
		html: '<i class="fa-solid fa-chevron-up"></i>'
	});

	backToTop
		.hide()
		.appendTo('body')
		.on('click', function () {
			$('html').animate({ scrollTop: 0 });
		});

	var win = $(window);
	win.on('scroll', function () {

		if (win.scrollTop() >= 500) {
			backToTop.fadeIn();
		} else {
			backToTop.hide();
		};
	});


	// lightbox animace
	var photos = $('.photos');

	photos.find('img').css({
		opacity: .8,
	}).on('mouseenter mouseleave', function (event) {

		if (event.type == 'mouseenter') {
			$(this).stop().fadeTo(500, 1);
		}
		else if (event.type == 'mouseleave') {
			$(this).stop().fadeTo(500, 0.8); //metoda stop() zabrání stekování animací opacity
		};
	});

	/* 
	*		*** GALERY *** lightbox
	*/
	var overlay = $('<div/>', { id: 'overlay' }).appendTo('body').hide(), //vytvoření elementu pro img
		leftToggle = $('<div/>', {
			class: 'toggle',
			id: 'leftToggle',
			html: '<i class="fa-solid fa-caret-left arrow"></i>'
		}).hide(),
		rightToggle = $('<div/>', {
			class: 'toggle',
			id: 'rightToggle',
			html: '<i class="fa-solid fa-caret-right arrow"></i>'
		}).hide(),
		arrayPhotos = photos.find('a').toArray();

	photos.find('a').on('click', function (event) { //zobrazení 'overlay' na click
		var href = $(this).attr('href'), //odchycení 'href' podle toho na jaký obrázek kliknu: metoda SETter
			image = $('<img>', { class: 'active', src: href }), // vytvoření img
			i = $(this).index(); //index v poli obrázků

		overlay.html(image).show();
		leftToggle.appendTo('body').show();
		rightToggle.appendTo('body').show();
		overlay.show();
		event.preventDefault();

		$(document).on('keydown', function (event) {
			if (event.which == 27) { //stalčení ESC
				overlay.hide();
			};
		});


		/* 
		*	* * * LIGHTBOX toggle
		*/
		leftToggle.on('click', function () {
			if (i == 0) {
				i = arrayPhotos.length - 1;
			} else {
				i--;
			};

			href = $(arrayPhotos[i]).attr('href');
			image = $('<img>', { class: 'active', src: href });
			overlay.html(image).show();
		});

		rightToggle.on('click', function () {
			if (i == (arrayPhotos.length - 1)) {
				i = 0;
			} else {
				i++;
			};

			href = $(arrayPhotos[i]).attr('href');
			image = $('<img>', { class: 'active', src: href });
			overlay.html(image).show();
		});

	});

	overlay.on('click', function () { //skrytí divu
		$(this).hide();
		leftToggle.hide();
		rightToggle.hide();
	});


	/* 
	*		* * * h1 IN MOVE
	*/
	$('.headline').css({ position: 'relative', left: -2000 })
		.animate({ left: 0 }, 1500);

	$('.comment').css({ position: 'relative', right: -2000 })
		.animate({ right: 0 }, 1500);



})(jQuery);