describe("Player", function() {
  var player;
  beforeEach(function(){ 
    player = new Player();
    spyOn(loading,'show');
    player.play();
  });
  it('shows loading indicator',function(){
    expect(loading.show).toHaveBeenCalled();
  });
  
  it('is playing',function(){
    expect(player.isPlaying).toBeTruthy();
  })
  describe('pausing',function(){
    beforeEach(function(){ player.pause(); });
    it('is not playing',function(){
      expect(player).not.toBePlaying();
    })
  });
});