$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    $('.dancer').toggleClass('lineUp');
    alert('clicked');
  });

  $('body').on('mouseover', '.tiny', function(event) {
    $(this).css('background-image', 'url(img/pizzaCat.gif)');
    // alert('hovered');
  });

});
