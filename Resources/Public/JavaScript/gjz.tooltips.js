/* Custom Tooltips */
$(function(){
    $('.tooltip').tooltipster({
        arrow: true,
        contentAsHTML: true,
        contentCloning: false,
        interactive: true,
        multiple: true,
        theme: 'tooltipster-shadow',
        trigger: 'click',
        viewportAware: true,
        functionReady: function(){
            $('.tooltip-close').click(function(){
                $('.tooltip').tooltipster('hide');
            });
        }
    });
});