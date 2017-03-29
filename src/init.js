$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    var newDancer = dancer.$node;
    window.dancers.push(newDancer);
    $('body').append(window.dancers[window.dancers.length - 1]);

  });

  $('.lineUpButton').on('click', function(event) {
    $('.dancer').toggleClass('lineUp');
  });

  $('body').on('mouseenter', '.tiny', function(event) {
    $(this).css('background-image', 'url(img/pizzaCat.gif)');
  });

  $('body').on('mouseleave', '.tiny', function(event) {
    $(this).css('background-image', 'url(img/tiny.jpg)');
  });

  var withinRange = function(epicenter, dancer) {
    var range = 360;
    var epX = epicenter.position().left;
    var epY = epicenter.position().top;
    var targetX = dancer.position().left;
    var targetY = dancer.position().top;
    var x = Math.abs(targetX - epX);
    var y = Math.abs(targetY - epY);
    var dist = Math.sqrt(x * x + y * y);
    if (dist <= range) {
      return true;
    }
    return false;
  };

  $('body').on('click', '.dancer', function(event) {
    //itterate through dancers array
    var epicenter = $(this);
    window.dancers.forEach(function(dancer) {
      if (withinRange(epicenter, dancer)) {
        if (epicenter.position().top !== dancer.position().top) {
          dancer.css('background-image', 'url(img/pizza.png)');
        }
      }
    });
  });
});
