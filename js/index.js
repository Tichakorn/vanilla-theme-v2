function responsive_carousel(){
    //set new height for responsive carousel
    $('#fullscreen-carousel .carousel').each(function( index ) {
        my_img=$(this).find('.carousel-image img:visible').last();
        height = my_img.height();
        
        $(this).height(my_img.height());
    });
}

$(document).ready(function () {
    if(($('#left-column').length>0)&&($('#right-column').length>0)){ 
        $( "#center-column" ).addClass( "span6" );
    }
    else if(($('#left-column').length>0)||($('#right-column').length>0)){ 
        $( "#center-column" ).addClass( "span9" );
    }
    else if(($("#main:not(:has(#right-column))"))&&($("#main:not(:has(#right-column))"))){
        $( "#center-column" ).addClass( "span12" );
    }
    
    if($('#fullscreen-carousel .carousel').length>0){
        responsive_carousel();
    }
    
    $(window).resize(function() {
        if($('#fullscreen-carousel .carousel').length>0){
            responsive_carousel();
        } 
    });

    $( window ).load(function() {
        if($('#fullscreen-carousel .carousel').length>0){
            responsive_carousel();
        }
    });
});