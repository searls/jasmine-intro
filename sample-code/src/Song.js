function Song() {
}

Song.prototype.printTitle = function(){
  $('#currentSong').text(this.title);
}

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};