/* Toggle View Artikelteile */

/* jshint jquery: true, onevar: true, quotmark: single */

var gjz_toggles = (function() {

	var initialise = function () {
		var list = $('#liste-teilartikel');
		var sizeList = $(list).children().length;
		var currentSelection = $('.current-artikelteil');
		var indexPositionCurrent = $(list).children().index(currentSelection);

		if (sizeList > 7) {
			$('#toggle-list-artikelteile').show();

			if (indexPositionCurrent <= 2) {
				$(list).children().slice(5, sizeList).hide().addClass('hidden-artikelteil');
			} else if (indexPositionCurrent >= sizeList - 2) {
				$(list).children().slice(0, sizeList - 5).hide().addClass('hidden-artikelteil');
			} else {
				$(list).children().slice(0, indexPositionCurrent - 2).hide().addClass('hidden-artikelteil');
				$(list).children().slice(indexPositionCurrent + 3, sizeList).hide().addClass('hidden-artikelteil');
			}
		}
	};

	var toggleListArtikelteile = function (event) {
		var jLink = $(event.toElement);
		var list = $(jLink).prev();

		if ($(list).hasClass('collapsed')) {
			event.preventDefault();
			$('.hidden-artikelteil', list).toggle(150);
			$(list).removeClass('collapsed');
			$('#toggle-list-artikelteile').removeClass('collapsed').addClass('expanded').html('Liste einklappen');
		} else {
			event.preventDefault();
			$('.hidden-artikelteil', list).toggle(150);
			$(list).addClass('collapsed');
			$('#toggle-list-artikelteile').removeClass('expanded').addClass('collapsed').html('alle zeigen');
		}

		return false;
	};

	initialise();

	return {
		'toggleListArtikelteile': toggleListArtikelteile,
	};

})();