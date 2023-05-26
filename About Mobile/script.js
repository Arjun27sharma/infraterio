
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



const filter_tabs = document.querySelectorAll('.filters-tab');

filter_tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filter_tabs.forEach(t => {
      t.classList.remove('active');
    });
    tab.classList.add('active');
  });
});






const circles = document.querySelectorAll('.color_circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    // remove "selected" class from all circles
    circles.forEach(c => {
      c.classList.remove('selected');
    });
    // add "selected" class to clicked circle
    circle.classList.add('selected');
  });
});




const tags = document.querySelectorAll('.product_details_tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('selected');
  });
});





$(document).ready(function() {
    // First Slider
    const cards1 = $('.review_card');
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
  
  






  // customer reviews sectino


  $(document).ready(function() {
    // Get all review cards
    const reviewCards = $('.review_card');

    // Set the initial active card index
    let activeCardIndex = 0;
    reviewCards.eq(activeCardIndex).addClass('active');

    // Handle previous arrow click
    $('.prev').click(function() {
      reviewCards.eq(activeCardIndex).removeClass('active');
      activeCardIndex = (activeCardIndex - 1 + reviewCards.length) % reviewCards.length;
      reviewCards.eq(activeCardIndex).addClass('active');
    });

    // Handle next arrow click
    $('.next').click(function() {
      reviewCards.eq(activeCardIndex).removeClass('active');
      activeCardIndex = (activeCardIndex + 1) % reviewCards.length;
      reviewCards.eq(activeCardIndex).addClass('active');
    });
  });




//   // Get all the slider points
// const sliderPoints = document.querySelectorAll('.slider-point');

// // Get the place images container
// const placeImages = document.querySelector('.place_images');

// // Attach click event listener to each slider point
// sliderPoints.forEach((point, index) => {
// point.addEventListener('click', () => {
//   // Update the active class on the clicked slider point
//   sliderPoints.forEach((point) => {
//     point.classList.remove('active');
//   });
//   point.classList.add('active');

//   // Update the image based on the clicked point index
//   placeImages.innerHTML = `<img src="./Images/place${index + 1}.png" alt="">`;
// });
// });




const sliderPoints = document.querySelectorAll('.slider-point');
const placeImages = document.querySelector('.place_images');

let currentIndex = 0;
sliderPoints[currentIndex].classList.add('active');

const updateImage = () => {
  placeImages.style.transform = 'translateX(-100%)'; // Set initial position for the new image

  setTimeout(() => {
    placeImages.innerHTML = `<img src="./Images/place${currentIndex + 1}.png" alt="" height="600px">`;
    placeImages.style.transform = 'translateX(0)'; // Move the new image into view
  }, 20); // Adjust the delay (in milliseconds) as needed
};

const handleSwipe = (direction) => {
  sliderPoints[currentIndex].classList.remove('active');

  if (direction === 'left') {
    currentIndex = (currentIndex + 1) % sliderPoints.length;
    placeImages.style.transform = 'translateX(100%)'; // Move the current image to the left
  } else if (direction === 'right') {
    currentIndex = (currentIndex - 1 + sliderPoints.length) % sliderPoints.length;
    placeImages.style.transform = 'translateX(-100%)'; // Move the current image to the right
  }

  sliderPoints[currentIndex].classList.add('active');

  updateImage();
};

let startX = 0;
let sensitivityFactor = 0.5; // Adjust the sensitivity here (lower value = less sensitive)

document.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
  const currentX = event.touches[0].clientX;
  const deltaX = (currentX - startX) * sensitivityFactor;

  if (deltaX > 50) {
    handleSwipe('right');
  } else if (deltaX < -50) {
    handleSwipe('left');
  }
});

// Apply CSS styles for the transition effect
placeImages.style.transition = 'transform 1s ease';
