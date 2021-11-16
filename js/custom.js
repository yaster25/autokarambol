$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});



$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });
    
    $('.menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('aside-open')){
            event.preventDefault();		
            $('body').addClass('aside-open');
            $('.aside-menu').addClass('active');
            $('.menu-trigger').addClass('is-active');
        }else{
            $('body').removeClass('aside-open');
            $('.aside-menu').removeClass('active');
            $('.menu-trigger').removeClass('is-active');
        }
        return false;
	});
    
     $(document).bind("click touchstart",function(event) {
        if($('body').hasClass('aside-open')){
            if ($(event.target).closest(".menu-trigger, .aside-menu").length) return;
            $('body').removeClass('aside-open');
            $('.aside-menu').removeClass('active');
            $('.menu-trigger').removeClass('is-active');
            event.stopPropagation();
        }
     }); 
    
    $("a.anchor").on("click", function(e) {
        var anchor = $(this);
        var fixed_offset = 50;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 777);
        e.preventDefault();
        return false;
	});		
    
    $('.js-slider-brands').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:7,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" fill="#fff"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" fill="#fff"/></svg></button>',
         
        responsive: [  
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                     slidesToShow:5,
                    dots:true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows:false,
                    slidesToShow:4,
                    dots:true
                }
            },
            {
                breakpoint:480,
                settings: {
                    arrows:false,
                    slidesToShow:3,
                    dots:true
                }
            }
        ]
    });
    
    $(".input-phone").mask("+7 (999) 999 - 99 - 99").on('click', function () {});
    
    $('.js-form-call').each(function() {  
        $(this).validate({       
            errorElement:'div',
            rules: {              
                phone: { required: true}
            },
            messages: {                
                phone: { required: "" }
            },
            submitHandler: function(form){
                $(form).submit();
            }
         });
    });
    
    $('.store-gallery-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        lazyLoad: 'ondemand',
        asNavFor: '.store-gallery-nav',
        prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" fill="#fff"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" fill="#fff"/></svg></button>',
    });
    $('.store-gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.store-gallery-main',
        dots: false,
        arrows:false,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        swipeToSlide:true,
        centerMode:true,
        centerPadding:0,
        responsive: [  
           
            {
                breakpoint:480,
                settings: {
                    slidesToShow:4,
                    centerMode:false
                }
            }
        ]
    });
    
    $('.js-photo-slider').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:3,
        centerMode:true,
        slidesToScroll: 1,
        swipeToSlide:true,
        variableWidth:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" fill="#fff"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" fill="#fff"/></svg></button>',
        responsive: [  
            {
                breakpoint: 768,
                settings: {
                    variableWidth:false,
                    slidesToShow:1,
                    centerMode:false
                }
            }
           
        ]
    });
    
    $('.js-products-slider .row').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.js-products-slider .row').slick('resize');
    });
    
     $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: true,
        maxHeight: 218,
        arrowButtonMarkup: '<b class="button"><svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.27 9.097 5.542-5.54a.462.462 0 0 0-.653-.654L6.944 8.118 1.73 2.903a.462.462 0 0 0-.653.653l5.54 5.541c.181.18.473.18.654 0Z" fill="#F1594B"/></b>',
        onChange: function() {
    
           if ($(this).val() != 'all') {
               $('.js-photo-slider').slick('slickUnfilter');
                $('.js-photo-slider').slick('slickFilter','.'+$(this).val()+'');           
                $('.js-photo-slider').slick('setPosition', 0);  
               
          } else {
            $('.js-photo-slider').slick('slickUnfilter');
          }
            $('.slick-cloned a').removeAttr('data-fancybox');
        }        
    });
    
    $('.photo-select select').on('change',function(){
        if ($(this).val() != 'all') {
               $('.js-photo-slider').slick('slickUnfilter');
                $('.js-photo-slider').slick('slickFilter','.'+$(this).val()+'');           
                $('.js-photo-slider').slick('setPosition', 0);  
               
          } else {
            $('.js-photo-slider').slick('slickUnfilter');
          }
    })
    
    $('.slick-cloned a').removeAttr('data-fancybox');
    
    
    $('.steps').slick({
        infinite: false,
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        variableWidth:true,
        swipeToSlide:true,
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.steps').slick('resize');
    });
    
    
    
    var ll2 = new LazyLoad({
            elements_selector: ".slick-slide .lazyload",
    });
    
    ll2.loadAll();
    
    $('.js-form-order').each(function() {  
        $(this).validate({       
            errorElement:'div',
            rules: {              
                phone: { required: true},
                name: { required: true}
            },
            messages: {                
                phone: { required: "" },
                name: { required: "" }
            },
            submitHandler: function(form){
                $(form).submit();
            }
         });
    });
    
    
    $('.js-slider-product-images').slick({
        infinite:true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
         responsive: [    
            {
                breakpoint: 768,
                settings: {
                    arrows:true,
                    prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" /></svg></button>',
                    nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" /></svg></button>',
                }
            }
        ]
    });
    
    $('.slider-product-images-nav__item').click(function(){        
        $(this).parents('.product-images').find('.slider-product-images-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-images').find('.js-slider-product-images').slick('slickGoTo', $(this).attr('data-slide') - 1);
        return false;
    })
    
    $('.js-slider-product-images').on('beforeChange', function(event, slideCount, currentSlide, nextSlide){
      $(this).parents('.product-images').find('.slider-product-images-nav__item').removeClass('active');
        var i=nextSlide + 1;
        $(this).parents('.product-images').find('.slider-product-images-nav__item[data-slide="'+ i +'"]').addClass('active');
        
    });
    
    
    $('.tabs-nav__item').on('click', function(event) {        
        $(this).parents('.tabs').find('.tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs').find('.tabs-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active');        
    });
    
    
    $('.js-slider-specilaists').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:2,
        slidesToScroll: 1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" fill="#fff"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" fill="#fff"/></svg></button>',
        responsive: [  
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true
                }
            }
           
        ]
    });
    
    
    
    $('.js-slider-reviews').slick({
        infinite: true,
        arrows:true,
        dots:true,
        slidesToShow:3,
        centerMode:true,
        slidesToScroll: 1,
        variableWidth:true,
        swipe:false,
        prevArrow:'<button type="button" class="slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.992 7.574 7.17-7.171a.597.597 0 0 1 .846.845L5.259 7.996l6.749 6.749a.597.597 0 0 1-.845.845L3.992 8.418a.598.598 0 0 1 0-.845Z" fill="#fff"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.008 7.574 4.838.403a.598.598 0 0 0-.846.845l6.749 6.748-6.749 6.749a.597.597 0 0 0 .845.845l7.171-7.171a.598.598 0 0 0 0-.845Z" fill="#fff"/></svg></button>',
        responsive: [  
            {
                breakpoint: 992,
                settings: {
                    variableWidth:false,
                    slidesToShow:1,
                    centerMode:false,
                    swipe:true
                }
            }
           
        ]
    });    
    
    $('.reviews-item').each(function() {  
    
    
        $(this).find('.js-reviews-photo').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            lazyLoad: 'ondemand',
            asNavFor: $(this).find('.js-reviews-photo-nav'),
            swipe:false
        });
         $(this).find('.js-reviews-photo-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: $(this).find('.js-reviews-photo'),
            dots: false,
            arrows:false,
            lazyLoad: 'ondemand',
            focusOnSelect: true,
            swipeToSlide:true,
            responsive: [  

                {
                    breakpoint:480,
                    settings: {
                        slidesToShow:4,
                    }
                }
            ]
        });
    
    });
    
    $('.product-tabs-content__title').on('click', function(event) {
        $(this).toggleClass('active');
        $(this).next('.product-tabs-content__content').slideToggle();
        return false;
	});
    
    
    $('.product-description-info__line').on('click', function(event) {
        if($(window).innerWidth()<768){
            
            if($(this).parents('.product-description-info').hasClass('active')){
                $('.product-description-info').removeClass('active');
            }else{
                $('.product-description-info').removeClass('active');
                $(this).parents('.product-description-info').addClass('active');
            }
        }        
        return false;
	});
    
   
    $('.product-tabs-nav__item').on('click', function(event) {        
        $(this).parents('.product-tabs').find('.product-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-tabs').find('.product-tabs-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active');        
    });
    
    $('.block-choose-list').mCustomScrollbar({});     
    
    $('.choose-step-1 .radio-choose input').on('change', function() {
        $('.choose-step-1').removeClass('active-mobile'); 
        $('.choose-step-2').addClass('active').addClass('active-mobile'); 
        $('.choose-step-3').removeClass('active'); 
        $('.choose-step-4').removeClass('active'); 
        $('.js-block-choose-show').addClass('btn-disabled'); 
        $('.choose-step-2 .radio-choose input').prop('checked',false); 
        $('.choose-step-3 .radio-choose input').prop('checked',false); 
        $('.choose-step-4 .radio-choose input').prop('checked',false); 
        return false;
    });
    
    $('.choose-step-2 .radio-choose input').on('change', function() {
        $('.choose-step-2').removeClass('active-mobile');  
        $('.choose-step-3').addClass('active').addClass('active-mobile'); 
        $('.choose-step-4').removeClass('active'); 
        $('.js-block-choose-show').addClass('btn-disabled'); 
        $('.choose-step-3 .radio-choose input').prop('checked',false); 
        $('.choose-step-4 .radio-choose input').prop('checked',false);
        return false;
    });
    $('.choose-step-3 .radio-choose input').on('change', function() { 
        $('.choose-step-3').removeClass('active-mobile');  
        $('.choose-step-4').addClass('active').addClass('active-mobile'); 
        $('.js-block-choose-show').addClass('btn-disabled'); 
        $('.choose-step-4 .radio-choose input').prop('checked',false);
        return false;
    });
    
    $('.choose-step-4 .radio-choose input').on('change', function() { 
        $('.js-block-choose-show').removeClass('btn-disabled'); 
        return false;
    });
    
    $('.js-choose-reset').on('click', function(event) {  
        $('.radio-choose input').prop('checked',false); 
        
        $('.choose-step').removeClass('active').removeClass('active-mobile'); 
        $('.choose-step-1').addClass('active-mobile').addClass('active'); 
        return false;
    });
    
    $('.js-block-choose-open').on('click', function(event) {  
        $('.block-choose-title-item').removeClass('active').removeClass('last'); 
        $('.block-choose-title-item_2').addClass('active'); 
        $('.block-choose-title-item_1').addClass('last'); 
        $('.block-choose-content').show();
        $('body').addClass('body-choose');
        return false;
    });
    
    $('.js-block-choose-close').on('click', function(event) {  
        $('.block-choose-title-item').removeClass('active'); 
        $('.block-choose-title-item.last').addClass('active'); 
        $('.block-choose-content').hide();
        $('body').removeClass('body-choose');
        return false;
    });
    
    $('.js-block-choose-show').on('click', function(event) {  
        $('.block-choose-title-item').removeClass('active'); 
        $('.block-choose-title-item_3').addClass('active'); 
        $('.block-choose-content').hide();
        $('body').removeClass('body-choose');
                
        $('.choose-step').removeClass('active-mobile'); 
        $('.choose-step-1').addClass('active-mobile'); 
        return false;
    });
    
     $('.js-block-choose-change').on('click', function(event) {  
        $('.block-choose-title-item').removeClass('active').removeClass('last'); 
        $('.block-choose-title-item_2').addClass('active'); 
        $('.block-choose-title-item_3').addClass('last'); 
        $('.block-choose-content').show();
        $('body').addClass('body-choose');
        return false;
    });
    
    $('.js-choose-back-1').on('click', function(event) {          
        $('.choose-step').removeClass('active-mobile'); 
        $('.choose-step-1').addClass('active-mobile'); 
        return false;
    });
    
    $('.js-choose-back-2').on('click', function(event) {  
        $('.choose-step').removeClass('active-mobile'); 
        $('.choose-step-2').addClass('active-mobile'); 
        return false;
    });
    
    $('.js-choose-back-3').on('click', function(event) {  
        $('.choose-step').removeClass('active-mobile'); 
        $('.choose-step-3').addClass('active-mobile'); 
        return false;
    });
    
    var fired = false;
 
    window.addEventListener('scroll', () => {
        if (fired === false) {
            fired = true;

            var newScriptS = document.createElement("script");
            var mapScript  = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A55ebb93739db973aabe45e130b8226a6a3596fb5585e11d085f0234264c52846&amp;width=100%25&amp;height=525&amp;lang=ru_RU&amp;scroll=true";

            document.getElementById("map-block").setAttribute("src", mapScript);

        }
    });
    
    $('.js-services-form').on('click', function(event) {  
        
        if($(this).parents('.services-main').hasClass('opened')){
            $(this).parents('.services-main').find('.services-main__list').fadeIn();
            $(this).parents('.services-main').find('.services-main__form').hide();
            $(this).parents('.services-main').removeClass('opened');
        }else{
            $(this).parents('.services-main').find('.services-main__list').hide();
            $(this).parents('.services-main').find('.services-main__form').fadeIn();
            $(this).parents('.services-main').addClass('opened');
        }  
        
        var fixed_offset = $('header').innerHeight() + 20;
        $('html,body').stop().animate({ scrollTop: $('#services-main').offset().top - fixed_offset }, 0);
        
        
        return false;
    });
 
});
