$(document).ready(function () {
  "use strict";

  $('input[type=radio][name=sort_by_country]').each(() => {
    if($(this).attr('data-checked') === $(this).val()){
        console.log($(this).val());
        $(this).attr('checked');
    }
  })


  // auto generated side menu from top header menu start
  var topHeaderMenu = $('header nav > ul').clone();
  var sideMenu = $('.side-menu-wrap nav');
  sideMenu.append(topHeaderMenu);
  if ($(sideMenu).find('.sub-menu').length != 0) {
    $(sideMenu).find('.sub-menu').parent().append('<i class="fas fa-chevron-right d-flex align-items-center"></i>');
  }
  // auto generated side menu from top header menu end

  // close menu when clicked on menu link start
  $('.side-menu-wrap nav > ul > li > a').on('click', function () {
    sideMenuCloseAction();
  });
  // close menu when clicked on menu link end

  // open close sub menu of side menu start
  var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
  $(sideMenuList).on('click', function () {
    if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
      $(this).siblings('.sub-menu').addClass('d-block');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
    }
  });
  // open close sub menu of side menu end

  // side menu close start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-close').hasClass('closed'))) {
      $('.side-menu-close').addClass('closed');
    } else {
      $('.side-menu-close').removeClass('closed');
    }
  });
  // side menu close end

  // auto append overlay to body start
  $('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
  // auto append overlay to body end

  // open side menu when clicked on menu button start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
      $('.side-menu-wrap').addClass('opened');
      $('.custom-overlay').addClass('show');
    } else {
      $('.side-menu-wrap').removeClass('opened');
      $('.custom-overlay').removeClass('show');
    }
  })
  // open side menu when clicked on menu button end

  // close side menu when clicked on overlay start
  $('.custom-overlay').on('click', function () {
    sideMenuCloseAction();
  });

  function sideMenuCloseAction() {
    $('.side-menu-wrap').addClass('open');
    $('.wrapper').addClass('freeze');
    $('.custom-overlay').removeClass('show');
    $('.side-menu-wrap').removeClass('opened');
    $('.side-menu-close').removeClass('closed');
    $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
  }
  // close side menu when clicked on overlay end

  // close side menu over 992px start
  $(window).on('resize', function () {
    if ($(window).width() >= 992) {
      sideMenuCloseAction();
    }
  })
  // close side menu over 992px end

  // navbar sticky start
  var topHeader = $('.first-header'),
    bottomHeader = $('.second-header');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 72) {
      bottomHeader.addClass('sticky');
    } else {
      bottomHeader.removeClass('sticky');
    }
  });
  var tabsHeader = $('.tabs-header');
  $(window).on('scroll', function () {
    // console.log($(window).scrollTop());
    // console.log(topHeader.height());
    // if($(window).scrollTop() > topHeader.height()) {
    if ($(window).scrollTop() > 400) {
      tabsHeader.addClass('sticky');

    } else {
      tabsHeader.removeClass('sticky');
    }
  });
  // navbar sticky end

  // Navbar active starts

  // Navbar active ends


  $(".banner-slider").owlCarousel({
    // autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1,
        margin: 10,
        // center: true,
      },
    }
  });
  $(".hospitals-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".treatments-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 25
      }
    }
  });
  $(".successful-treatments-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".successful-treatments-slider2").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 2,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2,
        margin: 10
      }
    }
  });
  $(".health-experts-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".our-partners-about-page-slider").owlCarousel({
    autoplay : true,
    loop: false,
    autoplaySpeed: 1500,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 25
      }
    }
  });
  $(".hospital-detail-image-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 1,
    nav: false,
    dots: true,
  });
  $(".hospital-detail-treatment-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 10
      }
    }
  });
  $(".business-opportunities-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });




  if($('iframe').length){
    $('iframe').addClass('w-100').addClass('h-100');
  }

  $('.cta-btn').on('click', function() {
    $('#ctaModal').modal('show')
  })

  $('#detail-select').on('change', () => {
    // console.log($(this).children('option:selected').val());
    let goto = $('#detail-select option:selected').attr('data-goto')
    // console.log($goto);
    $('html,body').animate({
      scrollTop: $(goto).offset().top-123},
      'slow');
  })


  $('.successful-treatments-card').on('click', function() {
    let id = $(this).data('id')

    $.ajax({
      type: 'GET',
      url: '/testimonial/'+id, 
      success: function(response) {
        if(response.type === 'video') {
          $("#testimonialModal .modal-body").html(`
            <div class="successful-treatments-card rounded">
              <div class="col-10 p-0">
                <p>
                  <a href="javascript:void(0)" title="${response.title}">
                    ${response.title}
                  </a>
                </p>
              </div>
              <iframe class="w-100 h-100" src="${response.video}" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="row d-flex align-items-center">
                <div class="col-3">
                  <img src="/uploads/testimonials/${response.testimonee_image}" class="testimonee-image" alt="${response.testimonee_name}">
                </div>
                <div class="col-9">
                  <div class="successful-treatments-card-information">
                    <p class="name mb-0">
                      ${response.testimonee_name}
                    </p>
                    <p class="location mb-0">
                      ${response.testimonee_city}, ${response.testimonee_country}
                    </p>
                  </div>
                </div>
              </div>
              <div class="quotes">
                <img src="/assets/images/home-page/image-(4).png" width="40" alt="">
              </div>
            </div>
          `);
        }
        if(response.type === 'text') {
          $("#testimonialModal .modal-body").html(`
            <div class="successful-treatments-card rounded">
              <div class="col-10 p-0">
                <p>
                  <a href="javascript:void(0)" title="${response.title}">
                    ${response.title}
                  </a>
                </p>
              </div>
                ${response.text}
              <div class="row d-flex align-items-center">
                <div class="col-3">
                  <img src="/uploads/testimonials/${response.testimonee_image}" class="testimonee-image" alt="${response.testimonee_name}">
                </div>
                <div class="col-9">
                  <div class="successful-treatments-card-information">
                    <p class="name mb-0">
                      ${response.testimonee_name}
                    </p>
                    <p class="location mb-0">
                      ${response.testimonee_city}, ${response.testimonee_country}
                    </p>
                  </div>
                </div>
              </div>
              <div class="quotes">
                <img src="/assets/images/home-page/image-(4).png" width="40" alt="">
              </div>
            </div>
          `)
        }
        $("#testimonialModal").modal('show')
      },
      error: function(response) {
        console.log(response);
      }
    })
  })

});
// FQA js start 
$(document).ready(function() {
  $('.answer').hide();
  
  $('.question').click(function(event) {
    event.stopPropagation();

    var targetId = $(this).attr('data-target');
    
    if ($('#' + targetId).is(':visible')) {
      $('#' + targetId).slideUp();
      $(this).find('.icon').removeClass('fa-minus').addClass('fa-plus');
    } else {
      $('.answer').slideUp();
      $('.icon').removeClass('fa-minus').addClass('fa-plus');
      
      $('#' + targetId).slideDown();
      $(this).find('.icon').removeClass('fa-plus').addClass('fa-minus');
    }
  });
});
// FQA js end 

