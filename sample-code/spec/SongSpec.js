describe('Song',function(){
  var song,$currentSongSpan;
  beforeEach(function(){
    song = new Song();
    song.title = 'Some Song Title';
    $.jasmine.inject('<span id="currentSong"></span>');
    $currentSongSpan = $('#currentSong');
  });
  it('prints title',function(){
    song.printTitle();
    expect($currentSongSpan).toHaveText(song.title);
  })
});