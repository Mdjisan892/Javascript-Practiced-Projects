const audio = document.getElementById("audio");


let songs = [
    {
        title : "CUTE DEPRESSED.mp3",
        preview : "./SONG/CUTE DEPRESSED.mp3"
    },
    {
        title : "DERNIERE DANCE FUNK",
        preview : "./song/DERNIERE DANCE FUNK.MP3"
    },
    {
        title : "Eternzlkj",
        preview : "./song/Eternxlkz - SLAY! (Official Audio).mp3"
    },
    {
        title : "ncts-NEXT|",
        preview : "./song/ncts - NEXT! [Brazilian Phonk].mp3"
    },
    {
        title : "Ugly Andz x Prod...",
        preview : "./song/Ugly Andz x Prodbycpkshawn - Yo Bunny (Pop Like This Pt.2 Remix) Lyrics.mp3"
    },
    {
        title : "viral hx",
        preview : "./song/Vyral H+3+ЯД7luCJIo0T6 __ Extreme Bass Boosted __ A.S Bass Boosted Songs __.mp3"
    }
];

let currentSongIndex = 0 ;
let isSong = false ;

function loading(index){
 let song = songs[index];
 document.getElementById("song-title").textContent = song.title;
 audio.src = song.preview;
 playSong()
};


function  isPlay(){
 if(isSong) playSong() 
}

function playSong (){
 audio.play()
}

function songPush(){
 audio.pause()
}

function nextSong(){
    currentSongIndex = (currentSongIndex + 1) % songs.length ;
    loading(currentSongIndex)
    playSong()
}

function prevSong(){
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  loading(currentSongIndex)
  playSong()
}

document.getElementById("prev").addEventListener("click" , prevSong)
document.getElementById("play").addEventListener("click" , playSong)
document.getElementById("pause").addEventListener("click" , songPush)
document.getElementById("next").addEventListener("click" , nextSong);

loading(currentSongIndex)