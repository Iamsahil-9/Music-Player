console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/_Heeriye(PagalWorld.com.sb).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Heeriye", filePath: "songs/_Heeriye(PagalWorld.com.sb).mp3", coverPath: "covers/1.jpg" },
    { songName: "Chaleya", filePath: "songs/Chaleya(PagalWorld.com.sb).mp3", coverPath: "covers/2.jpg" },
    { songName: "Dekha Tenu Pehli Pehli Baar Ve", filePath: "songs/Dekha Tenu Pehli Pehli Baar Ve(PagalWorld.com.sb).mp3", coverPath: "covers/3.jpg" },
    { songName: "Kabhi Shaam Dhale", filePath: "songs/Kabhi Shaam Dhale(PagalWorld.com.sb).mp3", coverPath: "covers/4.jpg" },
    { songName: "Maan Meri Jaan", filePath: "songs/Maan Meri Jaan(PagalWorld.com.sb).mp3", coverPath: "covers/6.jpg" },
    { songName: "Kahani Suno", filePath: "songs/Kahani Suno(PagalWorld.com.sb).mp3", coverPath: "covers/7.jpg" },
    { songName: "O Mahi O Mahi", filePath: "songs/O Mahi O Mahi(PagalWorld.com.sb).mp3", coverPath: "covers/8.jpg" },
    { songName: "Ve Kamleya", filePath: "songs/Ve Kamleya(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },
    { songName: "Dil Kya Kare", filePath: "songs/Dil Kya Kare(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },
    { songName: "Dil Pe Zakhm", filePath: "songs/Dil Pe Zakhm(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },
    { songName: "Kaash Tu Meri Ho Jaaye", filePath: "songs/Kaash Tu Meri Ho Jaaye(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },
    { songName: "Kesariya Tera Ishq Hai Piya", filePath: "songs/Kesariya Tera Ishq Hai Piya(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },
    { songName: "Pehli Pehli Baarish", filePath: "songs/Pehli Pehli Baarish(PagalWorld.com.sb).mp3", coverPath: "covers/10.jpg" },

];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log(`Playing: ${songs[songIndex].songName}`);
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    console.log(`Next: ${songs[songIndex].songName}`);
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    console.log(`Previous: ${songs[songIndex].songName}`);
});
