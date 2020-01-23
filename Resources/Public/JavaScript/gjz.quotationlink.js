/* Tooltip Right */
$(function(){
    $(".tooltip-right.tooltip-quotation-link").tooltipster({
        animation: "grow",
        arrow: true,
        contentAsHTML: true,
        contentCloning: false,
        delay: 5000,
        interactive: true,
        multiple: true,
        theme: "tooltipster-shadow",
        side: ["right", "bottom"],
        trigger: "custom",
        triggerOpen: {
            click: true,
            tap: true
        },
        triggerClose: {
            click: true,
            mouseleave: true,
            tap: true
        },
        viewportAware: true,
        functionReady: function(){
            $(".tooltip-close").click(function(){
                $(".tooltip-right.tooltip-quotation-link").tooltipster("hide");
            });
        }
    });
});

/* Dynamic hostname for quotation link */
$(function(){
    var dynLink = window.location.protocol + "//" + window.location.hostname;
    var hostname = window.location.hostname;
    if ( hostname.includes("localhost") ) {
        dynLink = dynLink + ":" + window.location.port;
    }
    $("#zitierlink").html(function(){
        return $(this).html().replace("https://gelehrte-journale.de", dynLink);
    });
});

/* Copy quotation link with actual hostname to clipboard */
$(function(){
    var clipboard = new ClipboardJS(".copyToClipboard");
    var dynLink = window.location.protocol + "//" + window.location.hostname;
    var hostname = window.location.hostname;
    if ( hostname.includes("localhost") ) {
        dynLink = dynLink + ":" + window.location.port;
    }
    $("a[class='copyToClipboard']").attr("data-clipboard-text", function() {
        return $(this).attr("data-clipboard-text").replace("https://gelehrte-journale.de", dynLink);
    });
    clipboard.on("success", function() {
        $("#clipboardTooltip").show(150);
        setTimeout(function() {
            $("#clipboardTooltip").hide(150);
        }, 1500);
    });
});