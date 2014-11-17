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
});