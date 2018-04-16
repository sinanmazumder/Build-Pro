
// nav fixed 
$("document").ready(function(){
	 $(window).scroll(function(){
	  if($(window).scrollTop()>200){
		$('.main-nav').addClass('fixed-top');  
	  }
	  else{
		$('.main-nav').removeClass('fixed-top');  
	  }
	});
	});


// main slider
$('document').ready(function(){
  $('#main-carousel').owlCarousel({
      loop : true,
      margin : 0,
      nav : true,
      navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
      dots : false,
      autoplay : true,
      autoplayTimeout : 5500,
      smartSpeed : 1000,
      mouseDrag : false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
    $('#main-carousel').on("changed.owl.carousel", function(event){
        // selecting the current active item
        var item = event.item.index-2;
        // first removing animation for all captions
        $('.nav1').removeClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('.nav1').addClass('animated fadeInLeft');
        
        $('.nav2').removeClass('animated bounceInDown');
        $('.owl-item').not('.cloned').eq(item).find('.nav2').addClass('animated bounceInDown');
        
        $('.nav3').removeClass('animated bounceInRight');
        $('.owl-item').not('.cloned').eq(item).find('.nav3').addClass('animated bounceInRight');
        
        $('p').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
                   
        $('.slider-btn').removeClass('animated fadeInLeftBig');
        $('.owl-item').not('.cloned').eq(item).find('.slider-btn').addClass('animated fadeInLeftBig');
        
    })

});//end main slider

// parallax image
$('document').ready(function(){
$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}
	});

//counter up
$("document").ready(function(){
  $('.counter').countUp();
});

// portfolio tabs
  $( function() {
    $( "#tabs" ).tabs({
        show: { effect: "drop",duration: 1500}
    });
  } );

//mouse tracking
$('document').ready(function(){
$(".snake").snakeify({speed: 400});
});

//testimonial carousel
$('document').ready(function(){
  $('#testimonial-carousel').owlCarousel({
      loop : true,
      nav : true,
      navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
      margin : 10,
      dots :false,
      smartSpeed : 1000,
      responsive:{
      0:{
          items : 1
      },
      400:{
          items:1
      },
      1000:{
          items : 2
      },
  }
  }); 
});


// team carousel 
$('document').ready(function(){
    $('#team-carousel').owlCarousel({
        loop : true,
        margin : 10,
        nav : false,
        dots : false,
        autoplay : false,
        autoplayTimeout : 6000,
        smartSpeed : 1000,
        responsive :{
            0:{
                items : 1
            },
            300:{
                items : 1
            },
            400:{
                items : 2
            },
            770:{
                items : 3
            },
            1000:{
                items : 4
            },
        }
    });
});

// google map 
(function($){
			// declare global key
			// so we dont have to pass it every time.
			$.fn.roamiGmap.defaults.key = 'AIzaSyDlL6aaAvANHgizHhDTQMyeV5nbPbflAyo';

			// reference our variables for efficiency
			var chicagoMap = $('.roamiGmap-chicago'),
			searchChicagoMap = $('#search-chicago-gmap'),
			sfMap = $('.roamiGmap-sf');

			// build our maps on doc ready
			$(document).ready(function(){
				// map for chicago
				

				// san francisco map
				sfMap.roamiGmap({
					center: '23.7888984,90.4088686',
					mapOptions: {
						styles: [{
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#212121"
						  }]
						}, {
						  "elementType": "labels.icon",
						  "stylers": [{
						      "visibility": "off"
						  }]
						}, {
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "elementType": "labels.text.stroke",
						  "stylers": [{
						      "color": "#212121"
						  }]
						}, {
						  "featureType": "administrative",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "administrative.country",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#9e9e9e"
						  }]
						}, {
						  "featureType": "administrative.land_parcel",
						  "stylers": [{
						      "visibility": "off"
						  }]
						}, {
						  "featureType": "administrative.locality",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "poi",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#181818"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "poi.park",
						  "elementType": "labels.text.stroke",
						  "stylers": [{
						      "color": "#1b1b1b"
						  }]
						}, {
						  "featureType": "road",
						  "elementType": "geometry.fill",
						  "stylers": [{
						      "color": "#2c2c2c"
						  }]
						}, {
						  "featureType": "road",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#8a8a8a"
						  }]
						}, {
						  "featureType": "road.arterial",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#373737"
						  }]
						}, {
						  "featureType": "road.highway",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#3c3c3c"
						  }]
						}, {
						  "featureType": "road.highway.controlled_access",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#4e4e4e"
						  }]
						}, {
						  "featureType": "road.local",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#616161"
						  }]
						}, {
						  "featureType": "transit",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#757575"
						  }]
						}, {
						  "featureType": "water",
						  "elementType": "geometry",
						  "stylers": [{
						      "color": "#f59000"
						  }]
						}, {
						  "featureType": "water",
						  "elementType": "labels.text.fill",
						  "stylers": [{
						      "color": "#3d3d3d"
						  }]
						}]
					},
				})
			});
		})(jQuery)

/
// project slider 
$("document").ready(function(){
    $('#owl-has-URL').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin:5,
        dots:false,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        smartSpeed:1000,
    });
});

// blog carousel
$('document').ready(function(){
   $('#blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    autoplay:true,
    autoplayTimeout:3500,
    smartSpeed:600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
});


$(document).ready(function() {
	  $('.simple-parallax').simpleParallax();
	});


// preloader 
$(window).on('load', function() { 
   $('#status').fadeOut(); 
   $('.preloader').delay(1350).fadeOut('slow'); 
   $('body').delay(1350).css({'overflow':'visible'});
		})



