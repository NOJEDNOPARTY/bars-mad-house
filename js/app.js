var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		function fixPanel() {
			var header  = $('.header');

			if ($(window).scrollTop() > 0) {
				header.addClass('fixed');
			}else {
				header.removeClass('fixed');
			};
		};

		fixPanel();

		$(window).scroll(function() {
			fixPanel();
		});

		$( window ).resize(function() {
			fixPanel();
		});


		setTimeout(function(){
			$('body').addClass('show');
		}, 700);

		setTimeout(function(){
			$('.main-img').addClass('show');
		}, 1200);

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.menu-trigger').toggleClass('open');
			$('.header').toggleClass('open');
			$('body').toggleClass('hidden');
		});

	},
	owl: function(){
		
	},
};

(function() {
	common.init();
}());
