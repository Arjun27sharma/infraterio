const circles = document.querySelectorAll('.color_circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('selected');
  });
});


const tags = document.querySelectorAll('.product_details_tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('selected');
  });
});



// const recommended_products = document.querySelectorAll('.recommended_product_card');

// recommended_products.forEach(recommended_product_card => {
//   recommended_product_card.addEventListener('click', () => {
//     recommended_product_card.classList.toggle('selected');
//   });
// });



// $(document).ready(function() {
//     const cardContainer = $('#card-container');
//     const cardWidth = $('.card_x').outerWidth(true);
//     let currentPosition = 0;

//     // Move card container left
//     $('#left-arrow').click(function() {
//         if (currentPosition < 0) {
//             currentPosition += cardWidth;
//             cardContainer.css('transform', `translateX(${currentPosition}px)`);
//         }
//     });

//     // Move card container right
//     $('#right-arrow').click(function() {
//         const maxPosition = -(cardWidth * ($('.card_x').length - 3));
//         if (currentPosition > maxPosition) {
//             currentPosition -= cardWidth;
//             cardContainer.css('transform', `translateX(${currentPosition}px)`);
//         }
//     });
// });


// Similar Products
// $(document).ready(function() {
//     const cards = $('.card_x');
//     const cardWidth = cards.outerWidth(true);
//     const maxPosition = -(cardWidth * (cards.length - 3));
//     let currentPosition = 0;

//     // Disable left arrow initially
//     $('#left-arrow').prop('disabled', true);

//     // Move cards left
//     $('#left-arrow').click(function() {
//         if (currentPosition < 0) {
//             currentPosition += cardWidth;
//             cards.css('transform', `translateX(${currentPosition}px)`);
//             $('#right-arrow').prop('disabled', false);
//         }
//         if (currentPosition === 0) {
//             $('#left-arrow').prop('disabled', true);
//         }
//     });

//     // Move cards right
//     $('#right-arrow').click(function() {
//         if (currentPosition > maxPosition) {
//             currentPosition -= cardWidth;
//             cards.css('transform', `translateX(${currentPosition}px)`);
//             $('#left-arrow').prop('disabled', false);
//         }
//         if (currentPosition === maxPosition) {
//             $('#right-arrow').prop('disabled', true);
//         }
//     });
// });




// $(document).ready(function() {
//     const cardContainer1 = $('#slider1 .card-container');
//     const cardContainer2 = $('#slider2 .card-container');
//     const cardWidth = $('.card_x').outerWidth(true);
//     let currentPosition1 = 0;
//     let currentPosition2 = 0;
  
//     // Move card container left for slider1
//     $('#slider1 .left-arrow').click(function() {
//       if (currentPosition1 < 0) {
//         currentPosition1 += cardWidth;
//         cardContainer1.css('transform', `translateX(${currentPosition1}px)`);
//       }
//     });
  
//     // Move card container right for slider1
//     $('#slider1 .right-arrow').click(function() {
//       const maxPosition = -(cardWidth * (cardContainer1.children('.card_x').length - 3));
//       if (currentPosition1 > maxPosition) {
//         currentPosition1 -= cardWidth;
//         cardContainer1.css('transform', `translateX(${currentPosition1}px)`);
//       }
//     });
  
//     // Move card container left for slider2
//     $('#slider2 .left-arrow').click(function() {
//       if (currentPosition2 < 0) {
//         currentPosition2 += cardWidth;
//         cardContainer2.css('transform', `translateX(${currentPosition2}px)`);
//       }
//     });
  
//     // Move card container right for slider2
//     $('#slider2 .right-arrow').click(function() {
//       const maxPosition = -(cardWidth * (cardContainer2.children('.card_x').length - 3));
//       if (currentPosition2 > maxPosition) {
//         currentPosition2 -= cardWidth;
//         cardContainer2.css('transform', `translateX(${currentPosition2}px)`);
//       }
//     });
//   });
  


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
        currentPosition1 += cardWidth1;
        cards1.css('transform', `translateX(${currentPosition1}px)`);
        $('#right-arrow-1').prop('disabled', false);
      }
      if (currentPosition1 === 0) {
        $('#left-arrow-1').prop('disabled', true);
      }
    });
  
    // Move cards right
    $('#right-arrow-1').click(function() {
      if (currentPosition1 > maxPosition1) {
        currentPosition1 -= cardWidth1;
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
        currentPosition2 += cardWidth2;
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
        currentPosition2 -= cardWidth2;
        cards2.css('transform', `translateX(${currentPosition2}px)`);
        $('#left-arrow-2').prop('disabled', false);
      }
      if (currentPosition2 === maxPosition2) {
        $('#right-arrow-2').prop('disabled', true);
      }
    });

  });
  
  