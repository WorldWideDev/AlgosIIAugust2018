var musicPlayer = new SLQueue();
renderSongName();

var next = document.getElementById("next-song"),
    add =  document.getElementById("add-song"),
    songVal = document.getElementById("song-value"),
    artist = document.getElementById("artist-value"),
    curr = document.getElementById("curr-song");

add.addEventListener("click", function(){
    musicPlayer.enqueue(new Song(songVal.value, artist.value));
    songVal.value = "";
    artist.value = "";
    renderSongName();

})

next.addEventListener("click", function(){
    musicPlayer.dequeue();
    renderSongName();
})  

function renderSongName(){
    var curr = document.getElementById("curr-song");
    var currSong = (musicPlayer.head == null)
        ? "No songs in playlist!"
        : `${musicPlayer.head.value.title} - ${musicPlayer.head.value.artist}`;
    
    curr.innerText = currSong;
}