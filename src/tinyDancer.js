var MakeTinyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tiny');
};

MakeTinyDancer.prototype = Object.create(MakeDancer.prototype);
MakeTinyDancer.prototype.constructor = MakeTinyDancer;
MakeTinyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
};
