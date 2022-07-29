

jQuery(function($){


    
  jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 200) {
        jQuery('.main-navbar').addClass('navbar-fixed-top');
        
      } else {
          jQuery('.main-navbar').removeClass('navbar-fixed-top');          
      }
  });


    jQuery('.aa-agents-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });



    jQuery('.aa-testimonial-slider').slick({
        dots: false,      
        infinite: true,
        speed: 500,      
        cssEase: 'linear'
      });



   jQuery('.aa-client-brand-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

  
  

    jQuery('.aa-top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    
   

    jQuery('.aa-properties-details-img').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,      
      cssEase: 'linear'
    });

      

  

    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

 
     

    jQuery(function(){
      if(jQuery('body').is('.aa-price-range')){

       var skipSlider = document.getElementById('aa-sqrfeet-range');
        noUiSlider.create(skipSlider, {
            range: {
              'min': 0,
              '10%': 50,
              '20%': 100,
              '30%': 150,
              '40%': 200,
              '50%': 250,
              '60%': 300,
              '70%': 350,
              '80%': 400,
              '90%': 450,
              'max': 500
            },
            snap: true,
            connect: true,
            start: [50, 250]
        });

        var skipValues = [
          document.getElementById('skip-value-lower'),
          document.getElementById('skip-value-upper')
        ];

        skipSlider.noUiSlider.on('update', function( values, handle ) {
          skipValues[handle].innerHTML = values[handle];
        });


        var skipSlider2 = document.getElementById('aa-price-range');
        noUiSlider.create(skipSlider2, {
            range: {
                'min': 0,
                '10%': 1000,
                '20%': 2000,
                '30%': 3000,
                '40%': 4000,
                '50%': 5000,
                '60%': 6000,
                '70%': 7000,
                '80%': 8000,
                '90%': 9000,
                'max': 10000
            },
            snap: true,
            connect: true,
            start: [2000, 5000]
        });
   
        var skipValues2 = [
          document.getElementById('skip-value-lower2'),
          document.getElementById('skip-value-upper2')
        ];

        skipSlider2.noUiSlider.on('update', function( values, handle ) {
          skipValues2[handle].innerHTML = values[handle];
        });
      }
    });



    jQuery(function(){
      jQuery('#mixit-container').mixItUp();
    });


      
    jQuery(document).ready(function() {
      jQuery(".fancybox").fancybox();
    });  
   


    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     


    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });


   jQuery(window).load(function() {     
      jQuery('#aa-preloader-area').delay(300).fadeOut('slow');   
    })
   



  jQuery("#aa-list-properties").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-properties-nav").addClass("aa-list-view");
  });
  jQuery("#aa-grid-properties").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-properties-nav").removeClass("aa-list-view");
  });

    

    jQuery('.aa-related-item-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    }); 

 
});

