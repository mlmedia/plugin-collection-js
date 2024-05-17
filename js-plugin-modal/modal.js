/* define $ as jQuery just in case */
(function ($) {
	/* modal - my custom plugin */
	$.fn.modal = function () {
		/* set vars */
		var modal = this;
		var modal_box = modal.find('.modal-content');

		/* modal controls (global on every page) */
		$('body').on('click', '.open-modal', function (e) {
			e.preventDefault();
			modal.css({
				'display': 'block'
			});
		});

		/* close the modal */
		$('body').on('click', '.close-modal', function (e) {
			e.preventDefault();
			close_modal();
		});


		/* when the user clicks anywhere outside of the modal, close it */
		$('body').click(function (e) {
			if (
				modal.is(e.target) &&
				modal_box.has(e.target).length === 0
			) {
				close_modal();
			};
		});

		/* close the modal function */
		function close_modal() {
			modal.fadeOut(100, function () {
				modal.css({
					'display': 'none'
				});
			});
		};
	};
})(jQuery);
