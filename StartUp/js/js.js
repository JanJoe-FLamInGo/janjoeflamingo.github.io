$('.sl').slick({
	autoplay: false,
	autoplaySpeed: 500,
	speed: 600,
	cssEase: 'ease',
	// dots: true,
	// arrows: true,
	// pauseOnDotsHover: true,
	slidesToShow: 4,
	infinite: false,
	edgeFriction: 0.1,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 1,
				dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $('.sl').slick({
//   slidesToShow: 4,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });








