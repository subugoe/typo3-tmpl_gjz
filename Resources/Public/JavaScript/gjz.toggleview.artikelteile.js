/* Toggle View Artikelteile */
$(function() {
	var list = $("#liste-teilartikel");
	var sizeList = $(list).children().length;
	var currentSelection = $(".current-artikelteil");
	var indexPositionCurrent = $(list).children().index(currentSelection);

	if (sizeList > 7) {
		$("#toggle-list-artikelteile").show();

		if (indexPositionCurrent <= 2) {
			$(list).children().slice(5, sizeList).hide();
		} else if (indexPositionCurrent >= sizeList-2) {
			$(list).children().slice(0, sizeList-5).hide();
		} else{
			$(list).children().slice(0, indexPositionCurrent-2).hide();
			$(list).children().slice(indexPositionCurrent+3, sizeList).hide();
		}

		$("#toggle-list-artikelteile").click(function(e) {
			if ( $(list).hasClass("collapsed") ) {
				e.preventDefault();
				$(list).children().show();
				$(list).removeClass("collapsed");
				$("#toggle-list-artikelteile").removeClass("collapsed").addClass("expanded").html("Liste einklappen");
			} else {
				e.preventDefault();
				if (indexPositionCurrent <= 2) {
					$(list).children().slice(5, sizeList).hide();
				} else if (indexPositionCurrent >= sizeList-2) {
					$(list).children().slice(0, sizeList-5).hide();
				} else{
					$(list).children().slice(0, indexPositionCurrent-2).hide();
					$(list).children().slice(indexPositionCurrent+3, sizeList).hide();
				}
				$(list).addClass("collapsed");
				$("#toggle-list-artikelteile").removeClass("expanded").addClass("collapsed").html("Liste ausklappen");
			}
		});
	}
});