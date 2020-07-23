/* Toggle View Subsections: "Rezensiertes/Angezeigtes/Angekündigtes/Besprochenes Werk" */
jQuery(document).ready(function() {
    jQuery(".slideControlRezWerk").on("click", function() {
        var state = jQuery(".slideControlInputRezWerk").prop("checked");
        if (state === true) {
            jQuery(this).removeClass("active");
            jQuery(".slideControlInputRezWerk").prop("checked", false);
            jQuery(".toggledSubsectionsRezWerk").toggle(150);
            jQuery(".slideControlMessageRezWerk").html("Kurzansicht");
            setCookie("toggleRezWerk", "false", 365);
        } else if (state === false) {
            jQuery(this).addClass("active");
            jQuery(".slideControlInputRezWerk").prop("checked", true);
            jQuery(".toggledSubsectionsRezWerk").toggle(150, function() {
                jQuery(".toggledSubsectionsRezWerk").css("display", "block");
            });
            jQuery(".slideControlMessageRezWerk").html("Vollansicht");
            setCookie("toggleRezWerk", "true", 365);
        }
    });
});
