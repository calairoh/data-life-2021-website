document.ready(function(){
    initNavbarScroll();
});

/**
 * Initialize the scoll of the navbar when the click event is triggered 
 */
function initNavbarScroll(){
    $('.navigation-handler').click(function(){
        if($(this).hasClass('closed')){
            $(this).removeClass('closed');
        } else {
            $(this).addClass('closed');
        }
    });
}