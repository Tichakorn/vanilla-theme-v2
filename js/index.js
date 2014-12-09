function responsive_carousel(){
    //set new height for responsive carousel
    $('#fullscreen-carousel .carousel').each(function( index ) {
        my_img=$(this).find('.carousel-image img:visible').last();
        height = my_img.height();
        
        $(this).height(my_img.height());
    });
}

function normal_screen_porlet(){
    $('#center-column').insertAfter($('#left-column'))
}

function small_screen_porlet(){
    $('#left-column').insertAfter($('#center-column'))
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
    
    $(window).resize(function(){
        if ($(window).width() < 770) {
            small_screen_porlet();
        }
        else{
            normal_screen_porlet();
        }
    });
    
    $(window).load(function(){
        if ($(window).width() < 770) {
            small_screen_porlet();
        }
        else{
            normal_screen_porlet();
        }
    });

    $("a.bg-color-red").click(function(){
        $("#fullscreen-nav").removeAttr('class');
		$("#fullscreen-nav").addClass("bg-color-red row");
	});
	$("a.bg-color-blue").click(function(){
		$("#fullscreen-nav").removeAttr('class');
		$("#fullscreen-nav").addClass("bg-color-blue row");
	});
	$("a.bg-color-green").click(function(){
		$("#fullscreen-nav").removeAttr('class');
		$("#fullscreen-nav").addClass("bg-color-green row");
	});

    $(".palette .toggle").click(function(){
        $( ".palette .inner" ).toggle( "slow" );
    });
  
});