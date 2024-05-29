const productsDetail1 = [
  {
      off: '20',
      name: 'marlin 1',
      image: '../Images/product-35.jpg',
      originalPrice: '20000.00',
      presentPrice: '17000.00',
  },
  {
      off: '30',
      name: 'marlin 2',
      image: '../Images/product-34.jpg',
      originalPrice: '40400.00',
      presentPrice: '21356.00',
  },
  {
      off: '15',
      name: 'marlin 3',
      image: '../Images/product-36.jpg',
      originalPrice: '50322.00',
      presentPrice: '1233.00',
  },
  {
      off: '12',
      name: 'marlin 4',
      image: '../Images/product-37.jpg',
      originalPrice: '10000.00',
      presentPrice: '8999.00',
  },
  {
      off: '10',
      name: 'marlin 5',
      image: '../Images/product-36.jpg',
      originalPrice: '40000.00',
      presentPrice: '32000.00',
  },
  {
      off: '60',
      name: 'marlin 6',
      image: '../Images/product-35.jpg',
      originalPrice: '65900.00',
      presentPrice: '31200.00',
  },
  {
      off: '27',
      name: 'marlin 7',
      image: '../Images/product-37.jpg',
      originalPrice: '10000.00',
      presentPrice: '5400.00',
  },
]


const productsDetail2 = [
  {
      off: '20',
      name: 'marlin 1',
      image: '../Images/product-35.jpg',
      originalPrice: '20000.00',
      presentPrice: '17000.00',
  },
  {
      off: '30',
      name: 'marlin 2',
      image: '../Images/product-34.jpg',
      originalPrice: '40400.00',
      presentPrice: '21356.00',
  },
  {
      off: '15',
      name: 'marlin 3',
      image: '../Images/product-36.jpg',
      originalPrice: '50322.00',
      presentPrice: '1233.00',
  },
  {
      off: '12',
      name: 'marlin 4',
      image: '../Images/product-37.jpg',
      originalPrice: '10000.00',
      presentPrice: '8999.00',
  },
  {
      off: '10',
      name: 'marlin 5',
      image: '../Images/product-36.jpg',
      originalPrice: '40000.00',
      presentPrice: '32000.00',
  },
  {
      off: '60',
      name: 'marlin 6',
      image: '../Images/product-35.jpg',
      originalPrice: '65900.00',
      presentPrice: '31200.00',
  },
  {
      off: '27',
      name: 'marlin 7',
      image: '../Images/product-37.jpg',
      originalPrice: '10000.00',
      presentPrice: '5400.00',
  },
]


const recommendedProductsDetails = [
  {
      off: 20,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },

  {
      off: 30,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },

  {
      off: 15,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },
  {
      off: 20,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },

  {
      off: 30,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },

  {
      off: 15,
      image: "../Images/sm.png",
      originalPrice: '10000.00',
      presentPrice: '8000.00'
  },


]




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


$(document).ready(function () {
  // First Slider
  const cards1 = $('#card-container-1 .card_x');
  const cardWidth1 = cards1.outerWidth(true);
  const maxPosition1 = -(cardWidth1 * (cards1.length - 3));
  let currentPosition1 = 0;

  // Disable left arrow initially
  $('#left-arrow-1').prop('disabled', true);
  $('#left-arrow-1').hide();

  // Move cards left
  $('#left-arrow-1').click(function () {
    $('#right-arrow-1').show();
    if (currentPosition1 < 0) {
      currentPosition1 += 2 * cardWidth1;
      cards1.css('transform', `translateX(${currentPosition1}px)`);
      $('#right-arrow-1').prop('disabled', false);
    }
    if (currentPosition1 === 0) {
      $('#left-arrow-1').prop('disabled', true);
      $('#left-arrow-1').hide();
    }
  });

  // Move cards right
  $('#right-arrow-1').click(function () {
    $('#left-arrow-1').show();
    if (currentPosition1 > maxPosition1) {
      currentPosition1 -= 2 * cardWidth1;
      cards1.css('transform', `translateX(${currentPosition1}px)`);
      $('#left-arrow-1').prop('disabled', false);

    }
    if (currentPosition1 === maxPosition1) {
      $('#right-arrow-1').prop('disabled', true);
      $('#right-arrow-1').hide();
    }
  });


  // Second Slider
  const cards2 = $('#card-container-2 .card_x');
  const cardWidth2 = cards2.outerWidth(true);
  const maxPosition2 = -(cardWidth2 * (cards2.length - 3));
  let currentPosition2 = 0;

  // Disable left arrow initially
  $('#left-arrow-2').prop('disabled', true);
  $('#left-arrow-2').hide();

  // Move cards left
  $('#left-arrow-2').click(function () {
    $('#right-arrow-2').show();
    if (currentPosition2 < 0) {
      currentPosition2 += 2 * cardWidth2;
      cards2.css('transform', `translateX(${currentPosition2}px)`);
      $('#right-arrow-2').prop('disabled', false);
    }
    if (currentPosition2 === 0) {
      $('#left-arrow-2').prop('disabled', true);
      $('#left-arrow-2').hide();
    }
  });

  // Move cards right
  $('#right-arrow-2').click(function () {
    $('#left-arrow-2').show();
    if (currentPosition2 > maxPosition2) {
      currentPosition2 -= 2 * cardWidth2;
      cards2.css('transform', `translateX(${currentPosition2}px)`);
      $('#left-arrow-2').prop('disabled', false);
    }
    if (currentPosition2 === maxPosition2) {
      $('#right-arrow-2').prop('disabled', true);
      $('#right-arrow-2').hide();
    }
  });

});






//recommended products DYNAMIC
document.getElementById('recommended_products_cards').innerHTML = recommendedProductsDetails.map(product => 
  `            <!-- PRODUCT CARD -->
  <div class="d-flex flex-column my-4 mx-3
  recommended_product_card">

      <div class=" border-0 d-flex" style="height: 100%;">
          <div class="d-flex justify-content-between gap-4  align-items-center">

              <!-- card image -->
              <div class="">
                  <img src=${product.image} alt="Product Image">
              </div>

              <!-- card text desc -->
              <div>
                  <div class="">
                      <div class="my-1">
                          <span class="offer text-light px-2 py-1 rounded-pill"
                              style="background-color: rgb(221, 0, 0);">${product.off} % off</span>
                      </div>
                      <span class="recommended_product_name">CRUBECK PVC EDGE BAND</span>
                      <div class="rating">
                          <span class="bi bi-star-fill active"></span>
                          <span class="bi bi-star-fill active"></span>
                          <span class="bi bi-star-fill active"></span>
                          <span class="bi bi-star-fill active"></span>
                          <span class="bi bi-star-fill active"></span>
                      </div>
                      <div class="flex align-items-center justify-content-center">
                          <span class="fw-bold">
                              <s class="text-decoration-line-through small" style="font-weight: 300;">₹
                                  ${product.originalPrice}</s>
                              ₹ ${product.presentPrice}
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>



  </div>`
).join('')