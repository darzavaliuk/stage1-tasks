let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
// let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector(".play .player-icon");
let next_btn = document.querySelector(".play-next .player-icon");
let prev_btn = document.querySelector(".play-prev .player-icon");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
// let wave = document.getElementById('wave');
// let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name: "Aqua Caelestis",
        music: "sounds/Aqua Caelestis.mp3",
    },
    {
        name: "Ennio Morricone",
        music: "sounds/Ennio Morricone.mp3",
    },
    {
        name: "River Flows In You",
        music: "sounds/River Flows In You.mp3",
    },
    {
        name: "Summer Wind",
        music: "sounds/Summer Wind.mp3",
    },
];

let audio_index = 0;

for (var track in music_list) {
    var tb = document.createElement("div");
    var pb = document.createElement("button");
    var tn = document.createElement("div");
    tb.className = "trackbar";
    pb.className = "play1 player-icon1";
    // pb.IdName = 'player1'
    tn.className = "trackname";
    tn.innerHTML = music_list[audio_index].name;
    console.log(music_list[audio_index].name);
    pb.id = audio_index;
    pb.addEventListener("click", switchTrack);
    tb.appendChild(pb);
    tb.appendChild(tn);
    trackbox.appendChild(tb);
    audio_index++;
}

let playingtrack = 0;

function switchTrack(event) {
    // console.log(playingtrack, event.target.id);
    // console.log(curr_track.durationSeconds)
    if (isPlaying) {
        if (playingtrack != event.target.id) {
            isPlaying = true;
            loadTrack(event.target.id - 0);
            track_index = event.target.id - 0;
            playTrack();
            document.getElementById(playingtrack + "").classList.add("play1");
            document
                .getElementById(playingtrack + "")
                .classList.remove("pause1");
        } else {
            // audio.pause();
            isPlaying = false;
            track_index = event.target.id - 0;
            pauseTrack();
        }
    } else {
        isPlaying = true;
        // event.target.style.background = "url(images/ak_pausebtn.png)";
        if (playingtrack != event.target.id) {
            // console.log('khjfgd')
            loadTrack(event.target.id - 0);
            document.getElementById(playingtrack + "").classList.add("play1");
            document
                .getElementById(playingtrack + "")
                .classList.remove("pause1");
        }
        track_index = event.target.id - 0;
        playTrack();
    }
    playingtrack = event.target.id;
}

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    // console.log(music_list[track_index].music)
    curr_track.load();

    // track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    // track_artist.textContent = music_list[track_index].artist;
    // now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 10);

    curr_track.addEventListener("ended", nextTrack1);
    // random_bg_color();
}

function nextTrack1() {
    document.getElementById(track_index).classList.remove("pause1");
    document.getElementById(track_index).classList.add("play1");
    nextTrack();
}

function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

window.playpauseTrack = playpauseTrack;

export function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    // playingtrack = event.target.id;
    isPlaying = true;
    document.getElementById("player").classList.remove("play");
    document.getElementById("player").classList.add("pause");
    console.log("!!!" + track_index);
    document.getElementById(track_index).classList.add("pause1");
    document.getElementById(track_index).classList.remove("play1");
    // track_art.classList.add('rotate');
    // wave.classList.add('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    // playingtrack = event.target.id;
    isPlaying = false;
    document.getElementById("player").classList.add("play");
    document.getElementById("player").classList.remove("pause");
    console.log("!!!" + track_index);
    document.getElementById(track_index).classList.add("play1");
    document.getElementById(track_index).classList.remove("pause1");
    // track_art.classList.remove('rotate');
    // wave.classList.remove('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

window.nextTrack = nextTrack;

export function nextTrack() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
    playingtrack = track_index;
    // document.getElementById(track_index).classList.add("pause1");
    document
        .getElementById(track_index != 0 ? track_index - 1 + "" : "3")
        .classList.remove("pause1");
    document
        .getElementById(track_index != 0 ? track_index - 1 + "" : "3")
        .classList.add("play1");
}

window.prevTrack = prevTrack;

export function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
    playingtrack = track_index;
    document
        .getElementById(track_index != 3 ? track_index + 1 + "" : "0")
        .classList.remove("pause1");
    document
        .getElementById(track_index != 3 ? track_index + 1 + "" : "0")
        .classList.add("play1");
}

window.seekTo = seekTo;

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

window.setVolume = setVolume;

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
    console.log(curr_track.volume);
}

window.turnOffSound = turnOffSound;

let saved = 0;

function turnOffSound() {
    if (curr_track.volume == 0) curr_track.volume = saved;
    else {
        saved = curr_track.volume;
        curr_track.volume = 0;
    }
    document.querySelector(".fa").classList.toggle("fa-volume-down");
    document.querySelector(".fa").classList.toggle("fa-volume-off");
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(
            curr_track.currentTime - currentMinutes * 60
        );
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(
            curr_track.duration - durationMinutes * 60
        );

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        console.log();
    }
}
