(function($) {
	var APC = (function() {

		var $sel = {};
		$sel.window = $(window);
		$sel.html = $("html");
		$sel.body = $("body", $sel.html);

		return {

			menu: {

				init: function() {
					var self = this;

					self.start();
				},

				start: function() {
					var self = this,
						$menu = $(".header-burger-holder");

					$menu.on("click", function() {
						if ($sel.body.hasClass("open-menu")) {
							self.hide($menu);
						} else {
							self.show($menu);
						}
					});

					$(".close-menu").on("click", function() {
						self.hide($menu);
					})
				},

				show: function($el) {
					$sel.body.addClass("open-menu");
					setTimeout(function() {
						$sel.body.addClass("open-menu-show");
					},300)
				},

				hide: function($el) {
					setTimeout(function() {
						$sel.body.removeClass("open-menu");
					},300)
					$sel.body.removeClass("open-menu-show");
				},

			},


			slider: function() {
				var self = this,
					$slick = $(".slider-list"),
					$itemSlider = $(".slider-item");

				$slick.slick({
					arrows: true,
					appendArrows: $(".slider-arrow-container"),
					autoplay: false,
					dots: false,
					autoplaySpeed: 10000,
					prevArrow: $(".slick-arrow.slick-arrow--prev"),
					nextArrow: $(".slick-arrow.slick-arrow--next"),
					infinite: true,
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 3,
					slidesToScroll: 3,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								centerPadding: "10px",
							}
						}
					]
				});

				$itemSlider.on("mousedown", function() {
					item = $(this);
					item.css("cursor", "-webkit-grab");
				});

				$itemSlider.on("mouseup", function() {
					item = $(this);
					item.css("cursor", "pointer");
				});

			},


			miniScripts: {

				init: function functionName() {
					var self = this;

					self.fixedHeader.init();

				},

				fixedHeader: {
					init: function() {
                        var $content = $(".page-content"),
                            pageH = $(".page-header").outerHeight();

						$sel.window.on("scroll", function() {
							var	sTop = $sel.window.scrollTop();
							if(sTop > pageH + 50) {
								$sel.body.addClass("fixed-header");
                                $content.css("padding-top", pageH);
								setTimeout(function() {
									$sel.body.addClass("fixed-header--show");
								}, 100);
							} else {
                                $content.css("padding-top", "");
								$sel.body.removeClass("fixed-header--show");
								$sel.body.removeClass("fixed-header");
							}
						});

					}
				},
			},
		};

	})();

    window.APC = APC;

})(jQuery);
