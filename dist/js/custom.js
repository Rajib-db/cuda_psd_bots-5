(function ($) {
    'use strict';

    /*Data Backgrond*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // Swiper Slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        loopsSlides: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        loop: true,
        loopsSlides: 5,
        thumbs: {
            swiper: swiper,
        },
    });

    var swiper = new Swiper(".slider_active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //  Team Slider
    var swiper = new Swiper(".team_active",{
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            991: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          },
          
    });
    
    //Togglemenu
    /* $('.fa-bars').click(function(){
        $(this).toggleClass('.fa-times');
        $('navbar').toggleClass('nav-toggle');
    }); */

    /* $window.on('load scroll', function(){
        $('.fa-bars').removeClass('.fa-times');
        $('navbar').removeClass('nav-toggle');

        //Sticky Active Code
        if($window.scrollTop() > 30){
            $('header').addClass('active-header');
        }else{
            $('header').removeClass('active-header'); 
        }
    }); */

    // Sticky Active Code
    var $window = $(window);
    $window.on("scroll", function () {
        if ($(document).scrollTop() > 60) {
            $(".agen_header_area_wrap").addClass("sticky");
        } else {
            $(".agen_header_area_wrap").removeClass("sticky");
        }
    });






    /*  // :: Carousel Active Code
    if ($.fn.owlCarousel) {

        $(".client_slides").owlCarousel({
            responsive: {
            0: {
                items: 1
            },
            991: {
                    items: 2
                },
            767:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

     // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }
 */
    /* // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    } */


    /* // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });
 */
    /*  // :: Accordian Active Code
     (function () {
         var dd = $('dd');
         dd.filter(':nth-child(n+3)').hide();
         $('dl').on('click', 'dt', function () {
             $(this).next().slideDown(500).siblings('dd').slideUp(500);
         })
     })(); */

    /* $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
    nav:true,
	dots:false;
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})
 */

    /*  magnificPopup img view 
    $('.popup-image').magnificPopup({
    	type: 'image',
    	gallery: {
    	  enabled: true
    	}
    });  */

    /*  magnificPopup video view 
    $('.popup-video').magnificPopup({
    	type: 'iframe'
    });  */



    /* $('.grid').imagesLoaded( function() {
    	// init Isotope
    	var $grid = $('.grid').isotope({
    	  itemSelector: '.grid-item',
    	  percentPosition: true,
    	  masonry: {
    		// use outer width of grid-sizer for columnWidth
    		columnWidth: '.grid-item',
    	  }
    	});
    }); */

    /* // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });	
     */



    /* $('.portfolio-menu button').on('click', function(event) {
    	$(this).siblings('.active').removeClass('active');
    	$(this).addClass('active');
    	event.preventDefault();
    }); */

})(jQuery);