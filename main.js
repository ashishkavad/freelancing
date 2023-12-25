/*
1. website loader js
2. jQuery plugins initialization
3. back to top script
4. header mobile button action
5. search popup
6. filterizer mixitup
7. window Scroll
8. sticky header when scroll
9. page scroll on clik menu in Desktop
10. page scroll on clik menu in mobile
11. mobile menu toggle
12. video-popup
13. initialLineProgress
14. mixitup projects filter
15. magnific-popup
16. testimonials-slider
17. member-carousel1
18. blog-carousel
19. client-logos
20. animation wow
21. newsletter form validation
22. initialCountUp
*/

jQuery(window).on('load', function() {

    /*===================================================================================*/
    /*  website loader js
    /*===================================================================================*/
    setTimeout(function(){
        jQuery('.nilav-pre-con').fadeOut('slow');
    }, 200);

});

jQuery(function() {

    /*===================================================================================*/
    /*  jQuery plugins initialization
    /*===================================================================================*/
    initialLineProgress();
    initialCountUp();

    /*===================================================================================*/
    /*  back to top script
    /*===================================================================================*/
    var offset = 500;
    var back_top = jQuery('.skip_swing');
    jQuery(window).scroll(function(){
        (jQuery(this).scrollTop() > offset) ? back_top.addClass('show_icon') :  back_top.removeClass('show_icon');
    });

    jQuery('a.skip_swing').on('click', function() {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top
        }, 1500);
        return false;
    });

    /*===================================================================================*/
    /*  header mobile button action
    /*===================================================================================*/
    jQuery(document).on('click', '.header .mobile-btn', function() {
        jQuery('body').addClass('no-scroll');
        jQuery('.fullnav-wrap').fadeIn(300);
        setTimeout(function(){
            jQuery('.fullnav-wrap').addClass('open');
        },200);
    });

    /*===================================================================================*/
    /*  search popup
    /*===================================================================================*/
    jQuery(document).on('click', '.search-close', function() {
        jQuery('body').removeClass('mobile-search-on');
        jQuery('.search-popup-area').slideUp(250);
    });
    jQuery('.btn-search').click(function(e){
        e.preventDefault();
        jQuery('body').addClass('mobile-search-on');
        jQuery('.search-popup-area').slideDown(250);
    });

    /*===================================================================================*/
    /*  filterizer mixitup
    /*===================================================================================*/
    if (jQuery('header.nilav-header').length>0) {
        var nav = jQuery("header.nilav-header");
        var windowOfsetTop=jQuery(document).scrollTop();
        var menuOfsetTop=nav.offset().top;
        var menuHeight = nav.outerHeight();
    }
    setTimeout(function(){
        if (jQuery('header.nilav-header').length>0) {
            fixedHeader(jQuery(this).scrollTop(),menuOfsetTop,menuHeight);
        }
    }, 300);

    /*===================================================================================*/
    /*  window Scroll
    /*===================================================================================*/
    jQuery(window).on('scroll', function(event) {
        setTimeout(function(){
            initialLineProgress();
        },700);
        var winOfsetTop=jQuery(this).scrollTop();
        if (jQuery('header.nilav-header').length>0) {
            menuHeight = nav.outerHeight();
            fixedHeader(jQuery(this).scrollTop(),menuOfsetTop,menuHeight);
        }
    });

    /*===================================================================================*/
    /*  sticky header when scroll
    /*===================================================================================*/
    function fixedHeader(bodyScroll, menuTop,menuHeight){
        if ( bodyScroll > menuTop -(menuHeight/2)+150) {
            nav.addClass('fixedmenu');
            if (jQuery('.nilav-header').hasClass('position-absolute')) {}else {
                jQuery('body').css('padding-top', $('.nilav-header').outerHeight());
            }
        } else {
            nav.removeClass('fixedmenu');
            jQuery('body').css('padding-top', '');
        }
    }

    /*===================================================================================*/
    /*  page scroll on clik menu in Desktop
    /*===================================================================================*/
    jQuery(document).on('click', '.header-nav > ul > li > a, .mobile-nav li a', function(event) {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top - 50
        }, 1250, "easeInOutExpo");
        return false;
    });

    /*===================================================================================*/
    /*  page scroll on clik menu in mobile
    /*===================================================================================*/
    jQuery(document).on('click', '.menu-page-scroll, .mobile-nav ul a, .skip-swing', function(event) {
        var Lochref = jQuery(this).attr('href');
        setTimeout(function(){
            jQuery("html, body").stop().animate({
                scrollTop: jQuery(Lochref).offset().top - 40
            }, 1250, "easeInOutExpo");
        },300);
        return false;
    });

    jQuery(document).on('click', '*.btn-scroll', function(event) {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top - 55
        }, 1250, "easeInOutExpo");
        return false;
    });

    /*===================================================================================*/
    /*  mobile menu toggle
    /*===================================================================================*/
    jQuery(document).on('click', '*.navbar-toggler', function() {
        jQuery('body').addClass('no-scroll m-menu-open');
    });

    jQuery(document).on('click', '*.close-mobile-nav, .mobile-nav ul li a', function(e) {
        e.preventDefault();
        jQuery('body').addClass('remove-mobile-nav');
        setTimeout(function(){
            jQuery('body').removeClass('no-scroll m-menu-open');
            jQuery('body').removeClass('remove-mobile-nav');
        },800);
    });

    /*===================================================================================*/
    /*  initialLineProgress
    /*===================================================================================*/
    function initialLineProgress() {
    	if ($.fn.barfiller) {
            jQuery('.line-skill.onview').each(function() {
                var divPos = jQuery(this).offset().top,
                topOfWindow = jQuery(window).scrollTop() + jQuery(window).innerHeight();
                if(divPos < topOfWindow){
                    jQuery(this).removeClass('onview');
                    jQuery(this).barfiller({
                        tooltip: true,
                        duration: 1500,
                        animateOnResize: true,
                         symbol: "%"
                    });
                }
            });
    	}
    }

    /*===================================================================================*/
    /*  mixitup projects filter
    /*===================================================================================*/
    jQuery(document).on('click', '.filter-list button', function() {
        jQuery(".filter-list button").removeClass('current-filter');
        jQuery(this).addClass('current-filter');
    });

    if (jQuery('.project-items').length > 0) {
        var containerEl = document.querySelector('.project-items');
        var mixer = mixitup(containerEl, {
            animation: {
                duration: 500,
                effects: 'fade translateX(100%)',
                easing: 'ease-in-out'
            },
            selectors: {
                target: '.project-box',
                control: 'button.filter'
            }
        });
    }

    /*===================================================================================*/
    /*  magnific-popup
    /*===================================================================================*/
    if (jQuery('.popup-link').length > 0) {
        jQuery('.popup-link').magnificPopup({
            type: 'image',
            preloader: true,
            mainClass: 'mfp-fade',
            preload: [1,3],
            gallery:{
                enabled:true
            },
            // false loop when lightbox goes to last item
            callbacks: {
                open: function() {
                    var mfp = $.magnificPopup.instance;
                    var proto = $.magnificPopup.proto;

                    // extend function that moves to next item
                    mfp.next = function() {
                        // if index is not last, call parent method
                        if(mfp.index < mfp.items.length - 1) {
                            proto.next.call(mfp);
                        } else {
                           // otherwise do whatever you want, e.g. hide "next" arrow
                        }
                    };

                    // same with prev method
                    mfp.prev = function() {
                        if(mfp.index > 0) {
                            proto.prev.call(mfp);
                        }
                    };
                }
            }
        });
    }

    /*===================================================================================*/
    /*  testimonials-slider
    /*===================================================================================*/
    if (jQuery('.testimonials-slider').length > 0) {
        jQuery(".testimonials-slider").owlCarousel({
            items:1, // The number of items you want to see on the screen.
            margin: 0, //margin-right(px) on item.
            loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: false, //Autoplay true or false
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: [''], // HTML allowed.
            nav: true, // Show next/prev buttons.
            dotsEach: false, //Show dots each x item.
            dots: false, //Show dots navigation.
            smartSpeed: 750 // slide speed
        });
    }

    /*===================================================================================*/
    /*  member-carousel1
    /*===================================================================================*/
    if (jQuery('.member-carousel1').length > 0) {
        jQuery(".member-carousel1").owlCarousel({
            items: 4, // The number of items you want to see on the screen.
            margin: 30, //margin-right(px) on item.
            loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: false, //Autoplay true or false
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
            nav: false, // Show next/prev buttons.
            dotsEach: true, //Show dots each x item.
            smartSpeed: 750, // slide speed
            dots: true, //Show dots navigation.
            lazyLoad:true,
            responsive: {
                0:{
                    items: 1
                },480:{
                    items: 2
                },767:{
                    items: 3
                },1200:{
                    items: 4
                }
            }
        });
    }

    /*===================================================================================*/
    /*  blog-carousel
    /*===================================================================================*/
    if (jQuery('.blog-carousel').length > 0) {
        jQuery(".blog-carousel").owlCarousel({
            items: 3, // The number of items you want to see on the screen.
            margin: 30, //margin-right(px) on item.
            loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: false, //Autoplay true or false
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
            nav: false, // Show next/prev buttons.
            dotsEach: true, //Show dots each x item.
            smartSpeed: 750, // slide speed
            dots: true, //Show dots navigation.
            lazyLoad:true,
            responsive: {
                0:{
                    items: 1
                },768:{
                    items: 2
                },991:{
                    items: 3
                }
            }
        });
    }

    /*===================================================================================*/
    /*  client-logos
    /*===================================================================================*/
    if (jQuery('.client-logos').length > 0) {
        jQuery(".client-logos").owlCarousel({
            items: 6, // The number of items you want to see on the screen.
            margin: 0, //margin-right(px) on item.
            loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: true, //Autoplay true or false
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
            nav: false, // Show next/prev buttons.
            dotsEach: false, //Show dots each x item.
            smartSpeed: 750, // slide speed
            dots: false, //Show dots navigation.
            lazyLoad:true,
            responsive: {
                0:{
                    items: 2
                },480:{
                    items: 3
                },767:{
                    items: 4
                },991:{
                    items: 5
                },992:{
                    items: 6
                }
            }
        });
    }

    /*===================================================================================*/
    /*  animation wow
    /*===================================================================================*/
    if (jQuery('.wow').length > 0) {
        jQuery(function(){
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();
        });
    }

    /*===================================================================================*/
    /*  newsletter form validation
    /*===================================================================================*/
    jQuery('.newsletter-valid form').submit(function() {
        var nlField = jQuery('.newsletter-valid input[type="email"]');
        var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if ( nlField.val() == '' || expEmail.test( nlField.val() ) != true ) {
            jQuery(this).find('.nl-error').html('<div class="alert alert-danger alert-dismissible mt-10"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-info-circle"></i> Please enter correct email address!</div>');
            return false;
        } else {
            return;
        }
    });

    jQuery('.newsletter-valid form').submit(function() {
        var nameField = jQuery('.newsletter-valid input[type="text"]');
        if ( nameField.val() == '' ) {
            jQuery(this).find('.nl-error2').html('<div class="alert alert-danger alert-dismissible mt-10"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-info-circle"></i> Please enter name!</div>');
            return false;
        } else {
            return;
        }

    });

});

/*===================================================================================*/
/*  initialCountUp
/*===================================================================================*/
function initialCountUp() {
    if (jQuery('.counter').length > 0) {
        jQuery('.counter').counterUp({
            delay: 7,
            time: 1500
        });
    }
}

