/* Skript für To-Top-Button */
$(function(){

	// Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
	var back_to_top_button = ['<p class="back-to-top"><a href="#top" alt="Zum Seitenanfang scrollen"><span></span>Zum Seitenanfang</a></p>'].join("");
	$("body").append(back_to_top_button);

	// Der Button wird ausgeblendet
	$(".back-to-top").hide();

	// Funktion für das Scroll-Verhalten
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) { // Wenn 100 Pixel gescrolled wurde
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	$("top").focus();

});