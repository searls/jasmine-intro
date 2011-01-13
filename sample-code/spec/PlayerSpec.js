describe("Player", function() {
  var player;
  beforeEach(function(){
    player = new Player();
    spyOn(loading,'show');
    player.play();
  });
  it('shows a loading indicator',function(){
    expect(loading.show).toHaveBeenCalled();
  });
  it('plays',function(){
    expect(player.isPlaying).toBe(true);
  });
  describe('pausing',function(){
    beforeEach(function(){
      player.pause();
    });
    it('pauses',function() {
      expect(player).not.toBePlaying();
    });    
  });
});