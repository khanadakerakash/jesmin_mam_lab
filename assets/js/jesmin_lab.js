/**
 * Created by Kh Akash on 6/17/2017.
 */

jQuery(function($) {'use strict';

    //For Navigation Hover
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if ( path == '' ) {
        path = 'index.html';
    }

    var target = $('nav a[href="'+path+'"]');
    // Add active class to target link
    target.addClass('active-page');


    //Initiat WOW JS
    new WOW().init();

    //For social icon tool tip
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    //scroll to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

});
