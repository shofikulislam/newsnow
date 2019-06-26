/*

	Template Name: Induxo HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Induxo HTML Template
	Version: 1.0
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   Hero Area
   3.   funfact
   4.   Testimonial Area
   5.   About Area
   6.   Features Area
   7.   partners Area
   8.   video popup
  
*/


jQuery(function ($) {



   /**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/
   // $(window).on('scroll', function () {

   //    /**Fixed header**/
   //    if ($(window).scrollTop() > 250) {
   //       $('.header').addClass('sticky fade_down_effect');
   //    } else {
   //       $('.header').removeClass('sticky fade_down_effect');
   //    }
   // });

  
   /* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function() { 
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("li i").toggleClass("fa-angle-down fa-angle-up");
	});


	$('.nav-tabs[data-toggle="tab-hover"] > li > a').hover( function(){
    	$(this).tab('show');
   });
   

   /* ----------------------------------------------------------- */
   /*  Site search
    /* ----------------------------------------------------------- */

   $('.nav-search').on('click', function () {
      $('.search-block').fadeIn(350);
      $(this).fadeOut(350);
   });

   $('.search-close').on('click', function () {
      $('.search-block').fadeOut(350);
      $('.nav-search').fadeIn(350);
   });


   $(document).on('mouseup', function (e) {
      var container = $(".search-box");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
         $('.search-block').fadeOut(350);
         $('.nav-search').fadeIn(350);
      }

  });

  /* ----------------------------------------------------------- */
  	/*  Owl Carousel
     /* ----------------------------------------------------------- */
     
   /* ---------------------------------------------
               breaking-news-bar
   ------------------------------------------------ */
  $(".breaking-news-slide").owlCarousel({

   loop:true,
   animateIn: 'fadeIn',
   autoplay:true,
   autoplayTimeout:3000,
   autoplayHoverPause:true,
   nav:false,
   margin:30,
   dots:false,
   mouseDrag:false,
   slideSpeed:500,
   items : 1,
   dotsContainer: '#carousel-custom-dots',
   responsive:{
     0:{
         items:1
     },
     600:{
         items:1
     }
   }

});
   /* ---------------------------------------------
                     Featured Slider
   ------------------------------------------------ */
   $(".featured-slider").owlCarousel({

      loop:true,
      animateOut: 'fadeOut',
      autoplay:false,
      autoplayHoverPause:true,
      nav:true,
      margin:0,
      dots:true,
      mouseDrag:true,
      touchDrag:true,
      slideSpeed:500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      items : 1,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }
      }

   });



   
   

   /*=============================================================
   			video popup
   	=========================================================================*/
      // if ($('.ts-video-popup').length > 0) {
      //    $('.ts-video-popup').magnificPopup({
      //       type: 'iframe',
      //       closeOnContentClick: false,
      //       midClick: true,
      //       callbacks: {
      //          beforeOpen: function () {
      //             this.st.mainClass = this.st.el.attr('data-effect');
      //          }
      //       },
      //       zoom: {
      //          enabled: true,
      //          duration: 500, // don't foget to change the duration also in CSS
      //       },
      //       mainClass: 'mfp-fade',
      //    });
      // }



   

  
 

   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }

   });
   $("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
   });




  


});
     
