var MakeGreenBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green');
};

MakeGreenBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeGreenBlinkyDancer.prototype.constructor = MakeGreenBlinkyDancer;
MakeGreenBlinkyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
