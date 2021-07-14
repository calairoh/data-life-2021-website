$(document).ready(function(){
    initNavbarScroll();
});

/**
 * Initialize the scoll of the navbar when the click event is triggered 
 */
function initNavbarScroll(){
    $('.navigation-handler').click(function(){
        if($('ol.nav-ol').hasClass('closed')){
            $('ol.nav-ol').removeClass('closed');
        } else {
            $('ol.nav-ol').addClass('closed');
        }
    });
}