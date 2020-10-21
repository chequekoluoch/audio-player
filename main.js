var songs=["./songs/song1.mp3","./songs/song2.mp3","./songs/song3.mp3"]
var poster=["./poster/poster1.jpeg", "./poster/poster2.jpeg", "./poster/poster3.jpg"]

var songTitle = document.getElementById("songTitle")
var fillBar = document.getElementById("fill")

var currentTime = document.getElementById("currentTime")

var song= new Audio();
var currentSong=0;

window.onload=playSong;

function playSong(){
    song.src=songs[currentSong];
    songTitle.textContent=songs[currentSong];
    song.play();
}

function playOrPauseSong(){
    if(song.paused){
        song.play();
        document.getElementById("playb").className="fa fa-pause"
    }else{
        song.pause();
        document.getElementById("playb").className="fa fa-play"
    }
}
song.addEventListener('timeupdate', function(){
    var position=song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
    convertTime(Math.round(song.currentTime))
    if(song.ended){
        next()
    }
})

function convertTime(seconds){

    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? "0" + min : min;
    sec = (sec < 10 ) ? "0" + sec : sec;
    currentTime.textContent=min + ":" + sec;

    totalTime(Math.round(song.duration))
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10 ) ? "0" + min : min;
    sec = (sec < 10 ) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;
}

function next(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    document.getElementById("playb").className="fa fa-pause";
    document.getElementById("imag").src=poster[currentSong];
    document.getElementById("imeg").src=poster[currentSong];
}

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    document.getElementById("playb").className="fa fa-pause";
    document.getElementById("imag").src=poster[currentSong];
    document.getElementById("imeg").src=poster[currentSong];
}

function decreaseVolume(){
    song.volume -= 0.20;
}
function increaseVolume(){
    song.volume += 0.20;
}