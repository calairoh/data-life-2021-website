$(document).ready(function(){
    initChart1Legend();
    initNavchartLinks();
});

function initChart1Legend(){
    $('#legendNYIG').click(function(){
        var color = $(this).attr('fill');
        var $svg = $(this).parent().parent();

        $svg.find("path[fill='"+color+"']").each(function(){ 
            $(this).addClass('hidden'); 
        });
    });
}

function initNavchartLinks(){
    $('.navchart-link').click(function(){
        var url = $(this).data('link');

        location.href = url;
    });
}