$(document).ready(function(){
    initAppendixShowHide();
});

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