$(document).ready(function() {
  $('.slider .slide').click(function() {
    let index = $('.slider .slide').index(this);

    $('.content-block .block').hide();
    $('.content-block .block').eq(index).show();
  });
  let $st = $('.pagination');
  let $slickEl = $('.center');

  $slickEl.slick({
    centerMode: true,
    
    centerPadding: '40%',
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  });
});

