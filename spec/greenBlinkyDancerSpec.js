describe('greenBlinkyDancer', function() {

  var greenBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    greenBlinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(greenBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(greenBlinkyDancer.$node, 'toggle');
    greenBlinkyDancer.step();
    expect(greenBlinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(greenBlinkyDancer, 'step');
      expect(greenBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(greenBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(greenBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
