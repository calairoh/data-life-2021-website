$(document).ready(function(){
    initChart1Legend();
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