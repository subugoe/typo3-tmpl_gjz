/* Toggle View Subsections: "Rezensiertes/Angezeigtes/Angekündigtes/Besprochenes Werk" */
$(function(){
    $('span.slideControlRezWerk').on('click', function() {
        var state = $(".slideControlInputRezWerk").prop('checked');
        if (state === true) {
            $(this).removeClass("active");
            $(".slideControlInputRezWerk").prop("checked", false);
            $(".toggledSubsectionsRezWerk").toggle(150);
            $("span.slideControlMessageRezWerk").html("Kurzansicht");
            setCookie("toggleRezWerk", "false", 365);
        } else if (state === false) {
            $(this).addClass("active");
            $(".slideControlInputRezWerk").prop("checked", true);
            $(".toggledSubsectionsRezWerk").toggle(150);
            $("span.slideControlMessageRezWerk").html("Vollansicht");
            setCookie("toggleRezWerk", "true", 365);
        }
    });
});
