/**
 * jQuery plugin for a flyout menu
 */
/* define $ as jQuery just in case */
(function ($) {
	/* circular carousel - my custom plugin */
	$.fn.flyout_menu = function () {
		/* set static vars */
		var flyout_menu = this;

		/* close the dropdown / flyout if user clicks outside the submenu */
		$('body').click(function (e) {
			var main_menu = flyout_menu.find('> ul.menu');
			var submenus = main_menu.find('li > ul.menu > li > ul.menu');
			var top_menus = main_menu.find('li > ul.menu');
			var top_links = top_menus.find('li > a');
			if (!submenus.is(e.target) &&
				submenus.has(e.target).length === 0 &&
				top_links.has(e.target).length === 0
			) {
				hide_flyouts();
			}
		});

		/* flyout timer - clear on mouse enter / start on mouse leave */
		var flyout_timer;
		flyout_menu.on('mouseenter', '> ul.menu > li', function () {
			/* clear the timer */
			clearTimeout(flyout_timer);
			/* set the vars */
			var trigger_el = $(this);
			var parent_menu = $(trigger_el).parents('ul.menu');
			var top_menus = parent_menu.find('li > ul.menu');
			var submenus = parent_menu.find('li > ul.menu > li > ul.menu');
			var target_el = trigger_el.find('ul.menu');

			/* if not already open, animate the submenu open */
			if (!target_el.hasClass('open')) {
				/* add the active class to the parent anchor */
				parent_menu.find('> li > ul.menu > li > a').removeClass('current');
				if (target_el.find('ul.menu').length > 0) {
					trigger_el.find('> ul.menu > li > a').addClass('current');
				}

				/* close the other submenus and open the target submenu */
				top_menus.removeClass('open');
				submenus.hide();
				target_el.slideDown(200).addClass('open');
			}
		});

		/* hide the flyouts on the main (top) menu - with a 3 second delay */
		$('#nav').on('mouseleave', 'ul.menu > li', function (e) {
			flyout_timer = setTimeout(function () {
				hide_flyouts();
			}, 500);
		});

		/* hide the flyouts on the main (top) menu - with a 3 second delay */
		function hide_flyouts() {
			var main_menu = flyout_menu.find('> ul.menu');
			var submenus = main_menu.find('li > ul.menu > li > ul.menu');
			var top_menus = main_menu.find('li > ul.menu');
			var top_links = top_menus.find('li > a');
			submenus.hide();
			top_links.removeClass('current');
			top_menus.removeClass('open');
		}
	}
})(jQuery);
