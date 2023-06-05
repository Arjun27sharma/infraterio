



$(document).ready(function() {
    // First Slider
    const cards1 = $('#card-container-1 .card_x');
    const cardWidth1 = cards1.outerWidth(true);
    const maxPosition1 = -(cardWidth1 * (cards1.length - 3));
    let currentPosition1 = 0;
  
    // Disable left arrow initially
    $('#left-arrow-1').prop('disabled', true);
  
    // Move cards left
    $('#left-arrow-1').click(function() {
      if (currentPosition1 < 0) {
        currentPosition1 += 2*cardWidth1;
        cards1.css('transform', `translateX(${currentPosition1}px)`);
        $('#right-arrow-1').prop('disabled', false);
      }
      if (currentPosition1 === 0) {
        $('#left-arrow-1').prop('disabled', true);
        // $('#left-arrow-1').prop('display', 'none');
      }
    });
  
    // Move cards right
    $('#right-arrow-1').click(function() {
      if (currentPosition1 > maxPosition1) {
        currentPosition1 -= 2*cardWidth1;
        cards1.css('transform', `translateX(${currentPosition1}px)`);
        $('#left-arrow-1').prop('disabled', false);
      }
      if (currentPosition1 === maxPosition1) {
        $('#right-arrow-1').prop('disabled', true);
      }
    });
  
  
    // Second Slider
    const cards2 = $('#card-container-2 .card_x');
    const cardWidth2 = cards2.outerWidth(true);
    const maxPosition2 = -(cardWidth2 * (cards2.length - 3));
    let currentPosition2 = 0;
  
    // Disable left arrow initially
    $('#left-arrow-2').prop('disabled', true);
  
    // Move cards left
    $('#left-arrow-2').click(function() {
      if (currentPosition2 < 0) {
        currentPosition2 += 2*cardWidth2;
        cards2.css('transform', `translateX(${currentPosition2}px)`);
        $('#right-arrow-2').prop('disabled', false);
      }
      if (currentPosition2 === 0) {
        $('#left-arrow-2').prop('disabled', true);
      }
    });
  
    // Move cards right
    $('#right-arrow-2').click(function() {
      if (currentPosition2 > maxPosition2) {
        currentPosition2 -= 2*cardWidth2;
        cards2.css('transform', `translateX(${currentPosition2}px)`);
        $('#left-arrow-2').prop('disabled', false);
      }
      if (currentPosition2 === maxPosition2) {
        $('#right-arrow-2').prop('disabled', true);
      }
    });

  });
  
  




  $(document).ready(function() {
    $('.menu-trigger').click(function() {
      $('.menu-trigger').removeClass('active');
      $(this).addClass('active');
      $('.mega-menu').removeClass('menu-open');
      var target = $(this).data('target');
      $(target).addClass('menu-open');
  
      console.log(target)
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest('.nav-container').length) {
        $('.menu-trigger').removeClass('active');
        $('.mega-menu').removeClass('menu-open');
      }
    });
  });


