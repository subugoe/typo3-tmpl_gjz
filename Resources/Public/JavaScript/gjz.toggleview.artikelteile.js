/* Toggle View Artikelteile */
jQuery(document).ready(function() {
	var list = jQuery("#liste-teilartikel");
	var sizeList = jQuery(list).children().length;
	var currentSelection = jQuery(".current-artikelteil");
	var indexPositionCurrent = jQuery(list).children().index(currentSelection);

	if (sizeList > 7) {
		jQuery("#toggle-list-artikelteile").show();

		if (indexPositionCurrent <= 2) {
			jQuery(list).children().slice(5, sizeList).hide();
		} else if (indexPositionCurrent >= sizeList-2) {
			jQuery(list).children().slice(0, sizeList-5).hide();
		} else{
			jQuery(list).children().slice(0, indexPositionCurrent-2).hide();
			jQuery(list).children().slice(indexPositionCurrent+3, sizeList).hide();
		}

		jQuery("#toggle-list-artikelteile").on("click", function(e) {
			if ( jQuery(list).hasClass("collapsed") ) {
				e.preventDefault();
				jQuery(list).children().slice(0, indexPositionCurrent-2).show();
				jQuery(list).children().slice(indexPositionCurrent+3, sizeList).show();
				jQuery(list).removeClass("collapsed");
				jQuery("#toggle-list-artikelteile").removeClass("collapsed").addClass("expanded").html("Liste einklappen");
			} else {
				e.preventDefault();
				if (indexPositionCurrent >= 2) {
					jQuery(list).children().slice(0, indexPositionCurrent-2).hide();
				}
				jQuery(list).children().slice(indexPositionCurrent+3, sizeList).hide();
				jQuery(list).addClass("collapsed");
				jQuery("#toggle-list-artikelteile").removeClass("expanded").addClass("collapsed").html("Liste ausklappen");
			}
		});
	}
});