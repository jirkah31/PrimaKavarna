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


	/* 
	*		*** GALERY *** lightbox
	*/

var photos = $('.photos');

photos.find('img').css({
	opacity: .8,
}).on('mouseenter mouseleave', function(event){

	if(event.type == 'mouseenter'){
		$(this).stop().fadeTo(500, 1);
	} 
	else if (event.type == 'mouseleave') {
		$(this).stop().fadeTo(500, 0.8); //metoda stop() zabrání stekování animací opacity
	}});

var overlay = $('<div/>', {id: 'overlay'}).appendTo('body').hide(); //vytvoření elementu pro img

photos.find('a').on('click', function(event) { //zobrazení 'overlay' na click
	var href = $(this).attr('href'), //odchycení 'href' podle toho na jaký obrázek kliknu
		image = $('<img>',{src: href}); // vytvoření img

	overlay.html(image).show();
	overlay.show(); 
	event.preventDefault();

	$(document).on('keydown', function(event){
		if(event.which == 27) { //stalčení EXC
			overlay.hide();
		};
	});
});

overlay.on('click', function(){ //skrytí divu
	$(this).hide();
});

/* 
*		* * * WALLPAPER HEADER * * * 
*/

})(jQuery);