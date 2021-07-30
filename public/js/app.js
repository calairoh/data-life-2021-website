$(document).ready(function(){
    initNavbarScroll();
    initAppendixShowHide();
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

/**
 * Initialize the show and hide of the appendix when the title is clicked
 */
function initAppendixShowHide(){
    $('.appendix-title').click(function(){
        var $parent = $(this).parent();
        var $body = $parent.find('.appendix-body');
        var $arrowup = $parent.find('.arrow-up')
        var $arrowdown = $parent.find('.arrow-down')

        if(!$body.hasClass('hidden')){
            $body.addClass('hidden');
            $arrowup.addClass('hidden');
            $arrowdown.removeClass('hidden');
        } else {
            $body.removeClass('hidden');
            $arrowup.removeClass('hidden');
            $arrowdown.addClass('hidden');
        }
    });
}