// const wrapper = document.querySelector(".wrapper"),
//   musicImg = wrapper.querySelector("img"),
//   musicName = wrapper.querySelector(".name"),
//   musicArtist = wrapper.querySelector(".artist"),
//   playPauseBtn = wrapper.querySelector(".play-pause"),
//   prevBtn = wrapper.querySelector("#prev"),
//   nextBtn = wrapper.querySelector("#next"),
//   mainAudio = wrapper.querySelector("#main-audio"),
//   progressArea = wrapper.querySelector(".progress-area"),
//   progressBar = progressArea.querySelector(".progress-bar");

// let musicIndex = Math.floor((Math.random() * allMusic.lenght) + 1);
// isMusicPaused = true;


// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
// })


// function loadMusic(indexNumb) {
//   musicName.innertext = allMusic[indexNumb - 1].name;
//   musicArtist.innertext = allMusic[indexNumb - 1].artist;
//   musicImg.src = `assets/images/${allMusic[indexNumb - 1].src}.jpg`;
//   mainAudio.src = `assets/songs/${allMusic[indexNumb - 1].src}.mp3`;
// }


// function playMusic() {
//   wrapper.classList.add(paused);
//   musicImg.classList.add(rotate);
//   playPauseBtn.innerHTML = <i class="fa-solid fa-pause"></i>
//   mainAudio.play();
// }


// function pauseMusic() {
//   wrapper.classList.remove(paused);
//   musicImg.classList.remove(rotate);
//   playPauseBtn.innerHTML = <i class="fa-solid fa-play"></i>
//   mainAudio.pause();
// }


// function prevMusic() {
//   musicIndex--;
//   musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
// }

// function prevMusic() {
//   musicIndex++;
//   musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
// }


// function nextMusic() {
//   musicIndex++;
//   musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
// }


// playPauseBtn.addEventListener("click", () => {
//   const isMusicPlay = wrapper.classList.contains("paused");
//   isMusicPlay ? pauseMusic() : playMusic();
// })


// prevBtn.addEventListener("click", () => {
//   prevMusic();
// })


// nextBtn.addEventListener("click", () => {
//   nextMusic();
// })


// mainAudio.addEventListener("timeupdate", (e) => {
//   const currentTime = e.target.currentTime;
//   const duration = e.target.duration;
//   let progressWidth = (currentTime / duration) * 100;
//   progressBar.style.width = `${progressWidth}%`;

//   let musicCurrentTime = wrapper.querySelector(".current-time"),
//     musicDuration = wrapper.querySelector(".max-duration");
//   mainAudio.addEventListener("loadeddate", () => {
//     let mainAdDuration = mainAudio.duration;
//     let totalMin = Math.floor(mainAdDuration / 60);
//     let totalSec = Math.floor(mainAdDuration % 60);

//     if (totalSec < 10) {
//       totalSec = `0${totalSec}`;
//     }

//     musicDuration.innerText = `${totalMin}: ${totalSec}`;
//   });


//   let currentMin = Math.floor(currentTime / 60);
//   let currentSec = Math.floor(currentTime % 60);
//   if (currentSec < 10) {
//     currentSec = `0${currentSec}`;
//   }

//   musicCurrentTime.innerText = `${currentMin}: ${currentSec}`;

// });


// progressArea.addEventListener("click", () => {
//   let progressWidth = progressArea.clientWidth;
//   let clickedOffsetX = e.offsetX;
//   let songDuration = mainAudio.duration;

//   mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//   playMusic();
// }) 


// mainAudio.addEventListener("ended", () => {
//   nextMusic();
// })











// const musicLibrary = [
//   {
//       name: "Shape of You",
//       artis: "Ed Sheeran",
//       img: "shape_of_you.jpg", // Image ka file path
//       src: "music-1-shape_of_you.mp3" // Music ka file path
//   },
//   {
//       name: "Blinding Lights",
//       artis: "Abel Tesfaye",
//       img: "blinding_lights.jpg",
//       src: "music-2-blinding_lights.mp3"
//   },
//   {
//       name: "Levitating",
//       artis: "Dua Lipa",
//       img: "levitating.jpg",
//       src: "music-3-levitating.mp3"
//   },
//   {
//       name: "Peaches",
//       artis: "Justin Bieber",
//       img: "peaches.jpg",
//       src: "music-4-peaches.mp3"
//   },
//   {
//       name: "Someone Like You",
//       artis: "Adele",
//       img: "someone_like_you.jpg",
//       src: "music-5-someone_like_you.mp3"
//   },
//   {
//       name: "Faded",
//       artis: "Alan Walker",
//       img: "faded.jpg",
//       src: "music-6-faded.mp3"
//   },
//   {
//       name: "Stay",
//       artis: "The Kid LAROI & Justin Bieber",
//       img: "stay.jpg",
//       src: "music-7-stay.mp3"
//   },
//   {
//       name: "On My Way",
//       artis: "Alan Walker, Sabrina Carpenter & Farruko",
//       img: "on-my-way.jpg",
//       src: "music-8-on-my-way.mp3"
//   }
// ];

// const wrapper = document.querySelector(".wrapper"),
//   musicImg = wrapper.querySelector(".img-area img"),
//   musicName = wrapper.querySelector(".name"),
//   musicArtist = wrapper.querySelector(".artist"),
//   playPauseBtn = wrapper.querySelector(".play-pause"),
//   prevBtn = wrapper.querySelector("#prev"),
//   nextBtn = wrapper.querySelector("#next"),
//   mainAudio = wrapper.querySelector("#main-audio"),
//   progressArea = wrapper.querySelector(".progress-area"),
//   progressBar = progressArea.querySelector(".progress-bar"),
//   currentTimeEl = wrapper.querySelector(".current-time"),
//   maxDurationEl = wrapper.querySelector(".max-duration");

// let musicIndex = Math.floor(Math.random() * musicLibrary.length) + 1;
// let isMusicPaused = true;

// // Load initial music on page load
// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
// });

// // Load music function
// function loadMusic(index) {
//   const song = musicLibrary[index - 1];
//   musicName.textContent = song.name;
//   musicArtist.textContent = song.artist;
//   musicImg.src = `assets/images/${song.img}`;
//   mainAudio.src = `assets/songs/${song.src}`;
// }

// // Play music function
// function playMusic() {
//   wrapper.classList.add("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//   mainAudio.play();
// }

// // Pause music function
// function pauseMusic() {
//   wrapper.classList.remove("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//   mainAudio.pause();
// }

// // Previous music function
// function prevMusic() {
//   musicIndex--;
//   musicIndex < 1 ? (musicIndex = musicLibrary.length) : musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Next music function
// function nextMusic() {
//   musicIndex++;
//   musicIndex > musicLibrary.length ? (musicIndex = 1) : musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Event listeners
// playPauseBtn.addEventListener("click", () => {
//   const isPlaying = wrapper.classList.contains("paused");
//   isPlaying ? pauseMusic() : playMusic();
// });

// prevBtn.addEventListener("click", prevMusic);
// nextBtn.addEventListener("click", nextMusic);

// // Update progress bar and timer
// mainAudio.addEventListener("timeupdate", (e) => {
//   const currentTime = e.target.currentTime;
//   const duration = e.target.duration;

//   // Update progress bar
//   const progressWidth = (currentTime / duration) * 100;
//   progressBar.style.width = `${progressWidth}%`;

//   // Update current time
//   let currentMin = Math.floor(currentTime / 60);
//   let currentSec = Math.floor(currentTime % 60);
//   if (currentSec < 10) currentSec = `0${currentSec}`;
//   currentTimeEl.textContent = `${currentMin}:${currentSec}`;

//   // Update total duration
//   if (!isNaN(duration)) {
//     let totalMin = Math.floor(duration / 60);
//     let totalSec = Math.floor(duration % 60);
//     if (totalSec < 10) totalSec = `0${totalSec}`;
//     maxDurationEl.textContent = `${totalMin}:${totalSec}`;
//   }
// });

// // Seek music by clicking progress bar
// progressArea.addEventListener("click", (e) => {
//   const progressWidth = progressArea.clientWidth;
//   const clickedOffsetX = e.offsetX;
//   const songDuration = mainAudio.duration;

//   mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//   playMusic();
// });

// // Play next song when the current one ends
// mainAudio.addEventListener("ended", nextMusic);
// // Music Library
// const musicLibrary = [
//   {
//     name: "Shape of You",
//     artis: "Ed Sheeran",
//     img: "assets/images/shape_of_you.jpg",
//     src: "assets/songs/music-1-shape_of_you.mp3",
//   },
//   {
//     name: "Blinding Lights",
//     artis: "Abel Tesfaye",
//     img: "assets/images/blinding_lights.jpg",
//     src: "assets/songs/music-2-blinding_lights.mp3",
//   },
//   {
//     name: "Levitating",
//     artis: "Dua Lipa",
//     img: "assets/images/levitating.jpg",
//     src: "assets/songs/music-3-levitating.mp3",
//   },
//   {
//     name: "Peaches",
//     artis: "Justin Bieber",
//     img: "assets/images/peaches.jpg",
//     src: "assets/songs/music-4-peaches.mp3",
//   },
//   {
//     name: "Someone Like You",
//     artis: "Adele",
//     img: "assets/images/someone_like_you.jpg",
//     src: "assets/songs/music-5-someone_like_you.mp3",
//   },
//   {
//     name: "Faded",
//     artis: "Alan Walker",
//     img: "assets/images/faded.jpg",
//     src: "assets/songs/music-6-faded.mp3",
//   },
//   {
//     name: "Stay",
//     artis: "The Kid LAROI & Justin Bieber",
//     img: "assets/images/stay.jpg",
//     src: "assets/songs/music-7-stay.mp3",
//   },
//   {
//     name: "On My Way",
//     artis: "Alan Walker, Sabrina Carpenter & Farruko",
//     img: "assets/images/on-my-way.jpg",
//     src: "assets/songs/music-8-on-my-way.mp3",
//   },
// ];












// const wrapper = document.querySelector(".wrapper"),
//   musicImg = wrapper.querySelector(".img-area img"),
//   musicName = wrapper.querySelector(".name"),
//   musicArtist = wrapper.querySelector(".artist"),
//   playPauseBtn = wrapper.querySelector(".play-pause"),
//   prevBtn = wrapper.querySelector("#prev"),
//   nextBtn = wrapper.querySelector("#next"),
//   mainAudio = wrapper.querySelector("#main-audio"),
//   progressArea = wrapper.querySelector(".progress-area"),
//   progressBar = progressArea.querySelector(".progress-bar"),
//   currentTimeEl = wrapper.querySelector(".current-time"),
//   maxDurationEl = wrapper.querySelector(".max-duration");

// let musicIndex = Math.floor(Math.random() * musicLibrary.length); // Random index initialize
// let isMusicPaused = true;

// // Load initial music on page load
// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
// });

// // Load music function
// function loadMusic(index) {
//   const song = musicLibrary[index];
//   musicName.textContent = song.name;
//   musicArtist.textContent = song.artist; // Fixed key name
//   musicImg.src = `${song.img}`;
//   mainAudio.src = `${song.src}`;
//   mainAudio.load();
// }

// // Play music function
// function playMusic() {
//   wrapper.classList.add("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//   mainAudio.play();
// }

// // Pause music function
// function pauseMusic() {
//   wrapper.classList.remove("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//   mainAudio.pause();
// }

// // Previous music function
// function prevMusic() {
//   musicIndex = (musicIndex - 1 + musicLibrary.length) % musicLibrary.length; // Ensure looping back
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Next music function
// function nextMusic() {
//   musicIndex = (musicIndex + 1) % musicLibrary.length; // Ensure looping forward
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Event listeners
// playPauseBtn.addEventListener("click", () => {
//   const isPlaying = wrapper.classList.contains("paused");
//   isPlaying ? pauseMusic() : playMusic();
// });

// prevBtn.addEventListener("click", prevMusic);
// nextBtn.addEventListener("click", nextMusic);

// // Update progress bar and timer
// mainAudio.addEventListener("timeupdate", (e) => {
//   const currentTime = e.target.currentTime;
//   const duration = e.target.duration;

//   if (duration) {
//     // Update progress bar
//     const progressWidth = (currentTime / duration) * 100;
//     progressBar.style.width = `${progressWidth}%`;

//     // Update current time
//     let currentMin = Math.floor(currentTime / 60);
//     let currentSec = Math.floor(currentTime % 60);
//     if (currentSec < 10) currentSec = `0${currentSec}`;
//     currentTimeEl.textContent = `${currentMin}:${currentSec}`;

//     // Update total duration
//     let totalMin = Math.floor(duration / 60);
//     let totalSec = Math.floor(duration % 60);
//     if (totalSec < 10) totalSec = `0${totalSec}`;
//     maxDurationEl.textContent = `${totalMin}:${totalSec}`;
//   }
// });

// // Seek music by clicking progress bar
// progressArea.addEventListener("click", (e) => {
//   const progressWidth = progressArea.clientWidth;
//   const clickedOffsetX = e.offsetX;
//   const songDuration = mainAudio.duration;

//   mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//   playMusic();
// });

// // Play next song when the current one ends
// mainAudio.addEventListener("ended", nextMusic);

// // Music Library
// const musicLibrary = [
//   {
//     name: "Shape of You",
//     artist: "Ed Sheeran",
//     img: "assets/images/shape_of_you.jpg",
//     src: "assets/songs/music-1-shape_of_you.mp3",
//   },
//   {
//     name: "Blinding Lights",
//     artist: "Abel Tesfaye",
//     img: "assets/images/blinding_lights.jpg",
//     src: "assets/songs/music-2-blinding_lights.mp3",
//   },
//   {
//     name: "Levitating",
//     artist: "Dua Lipa",
//     img: "assets/images/levitating.jpg",
//     src: "assets/songs/music-3-levitating.mp3",
//   },
//   {
//     name: "Peaches",
//     artist: "Justin Bieber",
//     img: "assets/images/peaches.jpg",
//     src: "assets/songs/music-4-peaches.mp3",
//   },
//   {
//     name: "Someone Like You",
//     artist: "Adele",
//     img: "assets/images/someone_like_you.jpg",
//     src: "assets/songs/music-5-someone_like_you.mp3",
//   },
//   {
//     name: "Faded",
//     artist: "Alan Walker",
//     img: "assets/images/faded.jpg",
//     src: "assets/songs/music-6-faded.mp3",
//   },
//   {
//     name: "Stay",
//     artist: "The Kid LAROI & Justin Bieber",
//     img: "assets/images/stay.jpg",
//     src: "assets/songs/music-7-stay.mp3",
//   },
//   {
//     name: "On My Way",
//     artist: "Alan Walker, Sabrina Carpenter & Farruko",
//     img: "assets/images/on-my-way.jpg",
//     src: "assets/songs/music-8-on-my-way.mp3",
//   },
// ];













// const wrapper = document.querySelector(".wrapper"),
//   musicImg = wrapper.querySelector(".img-area img"),
//   musicName = wrapper.querySelector(".name"),
//   musicArtist = wrapper.querySelector(".artist"),
//   playPauseBtn = wrapper.querySelector(".play-pause"),
//   prevBtn = wrapper.querySelector("#prev"),
//   nextBtn = wrapper.querySelector("#next"),
//   mainAudio = document.querySelector("#main-audio"),
//   progressArea = wrapper.querySelector(".progress-area"),
//   progressBar = progressArea.querySelector(".progress-bar"),
//   currentTimeEl = wrapper.querySelector(".current-time"),
//   maxDurationEl = wrapper.querySelector(".max-duration");

// let musicIndex = 0;
// let isMusicPaused = true;

// // Music Library
// const musicLibrary = [
//   {
//     name: "Shape of You",
//     artist: "Ed Sheeran",
//     img: "assets/images/shape_of_you.jpg",
//     src: "assets/songs/music-1-shape_of_you.mp3",
//   },
//   {
//     name: "Blinding Lights",
//     artist: "Abel Tesfaye",
//     img: "assets/images/blinding_lights.jpg",
//     src: "assets/songs/music-2-blinding_lights.mp3",
//   },
//   {
//     name: "Levitating",
//     artist: "Dua Lipa",
//     img: "assets/images/levitating.jpg",
//     src: "assets/songs/music-3-levitating.mp3",
//   },
//   {
//     name: "Peaches",
//     artist: "Justin Bieber",
//     img: "assets/images/peaches.jpg",
//     src: "assets/songs/music-4-peaches.mp3",
//   },
//   {
//     name: "Someone Like You",
//     artist: "Adele",
//     img: "assets/images/someone_like_you.jpg",
//     src: "assets/songs/music-5-someone_like_you.mp3",
//   },
//   {
//     name: "Faded",
//     artist: "Alan Walker",
//     img: "assets/images/faded.jpg",
//     src: "assets/songs/music-6-faded.mp3",
//   },
//   {
//     name: "Stay",
//     artist: "The Kid LAROI & Justin Bieber",
//     img: "assets/images/stay.jpg",
//     src: "assets/songs/music-7-stay.mp3",
//   },
//   {
//     name: "On My Way",
//     artist: "Alan Walker, Sabrina Carpenter & Farruko",
//     img: "assets/images/on-my-way.jpg",
//     src: "assets/songs/music-8-on-my-way.mp3",
//   },
// ];

// function loadMusic(index) {
//   const song = musicLibrary[index];
//   musicName.textContent = song.name;
//   musicArtist.textContent = song.artist;
//   musicImg.src = song.img;
//   mainAudio.src = song.src;

//   console.log("Loading song at path:", song.src); // Debugging
//   mainAudio.load();
// }

// function playMusic() {
//   wrapper.classList.add("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//   mainAudio.play().catch(error => console.error("Error playing audio:", error));
// }

// function pauseMusic() {
//   wrapper.classList.remove("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//   mainAudio.pause();
// }

// playPauseBtn.addEventListener("click", () => {
//   if (isMusicPaused) {
//     playMusic();
//   } else {
//     pauseMusic();
//   }
//   isMusicPaused = !isMusicPaused;
// });

// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
// });


// // Previous song
// function prevMusic() {
//   musicIndex = musicIndex === 0 ? musicLibrary.length - 1 : musicIndex - 1;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Next song
// function nextMusic() {
//   musicIndex = (musicIndex + 1) % musicLibrary.length;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Update progress bar
// mainAudio.addEventListener("timeupdate", (e) => {
//   const currentTime = e.target.currentTime;
//   const duration = e.target.duration || 1; // avoid divide by 0 error
//   const progressPercent = (currentTime / duration) * 100;

//   progressBar.style.width = `${progressPercent}%`;

//   let currentMin = Math.floor(currentTime / 60);
//   let currentSec = Math.floor(currentTime % 60);
//   currentSec = currentSec < 10 ? `0${currentSec}` : currentSec;
//   currentTimeEl.textContent = `${currentMin}:${currentSec}`;

//   let totalMin = Math.floor(duration / 60);
//   let totalSec = Math.floor(duration % 60);
//   totalSec = totalSec < 10 ? `0${totalSec}` : totalSec;
//   maxDurationEl.textContent = `${totalMin}:${totalSec}`;
// });

// // Set up listeners
// playPauseBtn.addEventListener("click", () => {
//   isMusicPaused ? playMusic() : pauseMusic();
//   isMusicPaused = !isMusicPaused;
// });

// prevBtn.addEventListener("click", prevMusic);
// nextBtn.addEventListener("click", nextMusic);

// // When music ends, play next song
// mainAudio.addEventListener("ended", nextMusic);

// // Initial song load
// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
// });















// const wrapper = document.querySelector(".wrapper"),
//   musicImg = wrapper.querySelector(".img-area img"),
//   musicName = wrapper.querySelector(".name"),
//   musicArtist = wrapper.querySelector(".artist"),
//   playPauseBtn = wrapper.querySelector(".play-pause"),
//   prevBtn = wrapper.querySelector("#prev"),
//   nextBtn = wrapper.querySelector("#next"),
//   mainAudio = document.querySelector("#main-audio"),
//   progressArea = wrapper.querySelector(".progress-area"),
//   progressBar = progressArea.querySelector(".progress-bar"),
//   currentTimeEl = wrapper.querySelector(".current-time"),
//   maxDurationEl = wrapper.querySelector(".max-duration");

// let musicIndex = 0;
// let isMusicPaused = true;

// // Music Library
// const musicLibrary = [
//   {
//     name: "Shape of You",
//     artist: "Ed Sheeran",
//     img: "assets/images/shape_of_you.jpg",
//     src: "assets/songs/music-1-shape_of_you.mp3",
//   },
//   {
//     name: "Blinding Lights",
//     artist: "Abel Tesfaye",
//     img: "assets/images/blinding_lights.jpg",
//     src: "assets/songs/music-2-blinding_lights.mp3",
//   },
//   {
//     name: "Levitating",
//     artist: "Dua Lipa",
//     img: "assets/images/levitating.jpg",
//     src: "assets/songs/music-3-levitating.mp3",
//   },
//   {
//     name: "Peaches",
//     artist: "Justin Bieber",
//     img: "assets/images/peaches.jpg",
//     src: "assets/songs/music-4-peaches.mp3",
//   },
//   {
//     name: "Someone Like You",
//     artist: "Adele",
//     img: "assets/images/someone_like_you.jpg",
//     src: "assets/songs/music-5-someone_like_you.mp3",
//   },
//   {
//     name: "Faded",
//     artist: "Alan Walker",
//     img: "assets/images/faded.jpg",
//     src: "assets/songs/music-6-faded.mp3",
//   },
//   {
//     name: "Stay",
//     artist: "The Kid LAROI & Justin Bieber",
//     img: "assets/images/stay.jpg",
//     src: "assets/songs/music-7-stay.mp3",
//   },
//   {
//     name: "On My Way",
//     artist: "Alan Walker, Sabrina Carpenter & Farruko",
//     img: "assets/images/on-my-way.jpg",
//     src: "assets/songs/music-8-on-my-way.mp3",
//   },
// ];

// function loadMusic(index) {
//   const song = musicLibrary[index];
//   musicName.textContent = song.name;
//   musicArtist.textContent = song.artist;
//   musicImg.src = song.img;
//   mainAudio.src = song.src;

//   console.log("Loading song at path:", song.src); // Debugging
//   mainAudio.load();
// }

// // Play Music
// function playMusic() {
//   wrapper.classList.add("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//   mainAudio.play().catch(error => console.error("Error playing audio:", error));
// }

// // Pause Music
// function pauseMusic() {
//   wrapper.classList.remove("paused");
//   playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//   mainAudio.pause();
// }

// // Previous Song
// function prevMusic() {
//   musicIndex = musicIndex === 0 ? musicLibrary.length - 1 : musicIndex - 1;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Next Song
// function nextMusic() {
//   musicIndex = (musicIndex + 1) % musicLibrary.length;
//   loadMusic(musicIndex);
//   playMusic();
// }

// // Update progress bar
// mainAudio.addEventListener("timeupdate", (e) => {
//   const currentTime = e.target.currentTime;
//   const duration = e.target.duration || 1;

//   const progressPercent = (currentTime / duration) * 100;
//   progressBar.style.width = `${progressPercent}%`;

//   let currentMin = Math.floor(currentTime / 60);
//   let currentSec = Math.floor(currentTime % 60);
//   currentSec = currentSec < 10 ? `0${currentSec}` : currentSec;
//   currentTimeEl.textContent = `${currentMin}:${currentSec}`;

//   let totalMin = Math.floor(duration / 60);
//   let totalSec = Math.floor(duration % 60);
//   totalSec = totalSec < 10 ? `0${totalSec}` : totalSec;
//   maxDurationEl.textContent = `${totalMin}:${totalSec}`;
// });

// // Set up listeners only once
// playPauseBtn.addEventListener("click", () => {
//   if (isMusicPaused) {
//     playMusic();
//   } else {
//     pauseMusic();
//   }
//   isMusicPaused = !isMusicPaused;
// });

// prevBtn.addEventListener("click", prevMusic);
// nextBtn.addEventListener("click", nextMusic);

// // When music ends, play next song
// mainAudio.addEventListener("ended", nextMusic);

// // Initial song load on window load
// window.addEventListener("load", () => {
//   loadMusic(musicIndex);
//   mainAudio.play().catch(error => console.error("Error auto-playing:", error));
// });






















const wrapper = document.querySelector(".wrapper"),
  musicImg = wrapper.querySelector(".img-area img"),
  musicName = wrapper.querySelector(".name"),
  musicArtist = wrapper.querySelector(".artist"),
  playPauseBtn = wrapper.querySelector(".play-pause"),
  prevBtn = wrapper.querySelector("#prev"),
  nextBtn = wrapper.querySelector("#next"),
  mainAudio = document.querySelector("#main-audio"),
  progressArea = wrapper.querySelector(".progress-area"),
  progressBar = progressArea.querySelector(".progress-bar"),
  currentTimeEl = wrapper.querySelector(".current-time"),
  maxDurationEl = wrapper.querySelector(".max-duration");

let musicIndex = 0;
let isMusicPaused = true;

// Music Library
const musicLibrary = [
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    img: "assets/images/shape_of_you.jpg",
    src: "assets/songs/music-1-shape_of_you.mp3",
  },
  {
    name: "Blinding Lights",
    artist: "Abel Tesfaye",
    img: "assets/images/blinding_lights.jpg",
    src: "assets/songs/music-2-blinding_lights.mp3",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    img: "assets/images/levitating.jpg",
    src: "assets/songs/music-3-levitating.mp3",
  },
  {
    name: "Peaches",
    artist: "Justin Bieber",
    img: "assets/images/peaches.jpg",
    src: "assets/songs/music-4-peaches.mp3",
  },
  {
    name: "Someone Like You",
    artist: "Adele",
    img: "assets/images/someone_like_you.jpg",
    src: "assets/songs/music-5-someone-like-you.mp3",
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    img: "assets/images/faded.jpg",
    src: "assets/songs/music-6-faded.mp3",
  },
  {
    name: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    img: "assets/images/stay.jpg",
    src: "assets/songs/music-7-stay.mp3",
  },
  {
    name: "On My Way",
    artist: "Alan Walker, Sabrina Carpenter & Farruko",
    img: "assets/images/on-my-way.jpg",
    src: "assets/songs/music-8-on-my-way.mp3",
  },
];

// Load selected music details
function loadMusic(index) {
  const song = musicLibrary[index];
  musicName.textContent = song.name;
  musicArtist.textContent = song.artist;
  musicImg.src = song.img;
  mainAudio.src = song.src;

  mainAudio.load();
  console.log("Loading song at path:", song.src); // Debugging
}

// Play music
function playMusic() {
  wrapper.classList.add("paused");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  mainAudio.play().catch(error => console.error("Error playing audio:", error));
}

// Pause music
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  mainAudio.pause();
}

// Handle prev button click
function prevMusic() {
  musicIndex = musicIndex === 0 ? musicLibrary.length - 1 : musicIndex - 1;
  loadMusic(musicIndex);
  playMusic();
}

// Handle next button click
function nextMusic() {
  musicIndex = (musicIndex + 1) % musicLibrary.length;
  loadMusic(musicIndex);
  playMusic();
}

// Update progress bar on music playback
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration || 1; // Avoid divide-by-zero errors
  const progressPercent = (currentTime / duration) * 100;

  progressBar.style.width = `${progressPercent}%`;

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  currentSec = currentSec < 10 ? `0${currentSec}` : currentSec;
  currentTimeEl.textContent = `${currentMin}:${currentSec}`;

  let totalMin = Math.floor(duration / 60);
  let totalSec = Math.floor(duration % 60);
  totalSec = totalSec < 10 ? `0${totalSec}` : totalSec;
  maxDurationEl.textContent = `${totalMin}:${totalSec}`;
});

// Handle play/pause toggle
playPauseBtn.addEventListener("click", () => {
  if (isMusicPaused) {
    playMusic();
  } else {
    pauseMusic();
  }
  isMusicPaused = !isMusicPaused;
});

// Handle previous and next buttons
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);

// When music ends, go to the next track
mainAudio.addEventListener("ended", nextMusic);

// On window load, just load the first track, don't auto-play
window.addEventListener("load", () => {
  loadMusic(musicIndex);
});
// Forward/Backward by clicking on the progress area
progressArea.addEventListener("click", (e) => {
  const progressWidth = progressArea.clientWidth; // Width of the progress area
  const clickOffsetX = e.offsetX; // Click position relative to the progress area
  const duration = mainAudio.duration; // Total duration of the audio

  // Calculate the new time based on click position
  const newTime = (clickOffsetX / progressWidth) * duration;
  mainAudio.currentTime = newTime;

  // Smoothly update the progress bar
  progressBar.style.transition = "width 0.2s ease-in-out";
  const newProgressPercent = (newTime / duration) * 100;
  progressBar.style.width = `${newProgressPercent}%`;

  // Remove transition after the update
  setTimeout(() => {
    progressBar.style.transition = "none";
  }, 200);
});

// Update progress bar on music playback
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration || 1; // Avoid divide-by-zero errors
  const progressPercent = (currentTime / duration) * 100;

  // Smooth progress bar update during playback
  progressBar.style.width = `${progressPercent}%`;

  // Update the current time display
  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60).toString().padStart(2, "0");
  currentTimeEl.textContent = `${currentMin}:${currentSec}`;

  // Update the total duration display
  const totalMin = Math.floor(duration / 60);
  const totalSec = Math.floor(duration % 60).toString().padStart(2, "0");
  maxDurationEl.textContent = `${totalMin}:${totalSec}`;
});
// Keyboard event listener for play/pause and scrolling forward/backward
document.addEventListener("keydown", (e) => {
  const skipSeconds = 5; // Number of seconds to skip forward or backward

  switch (e.key) {
    case " ": // Space bar for play/pause
      e.preventDefault(); // Prevent page from scrolling
      if (isMusicPaused) {
        playMusic();
      } else {
        pauseMusic();
      }
      isMusicPaused = !isMusicPaused;
      break;

    case "ArrowRight": // Right arrow for scrolling forward
      e.preventDefault(); // Prevent default action
      if (mainAudio.currentTime + skipSeconds < mainAudio.duration) {
        mainAudio.currentTime += skipSeconds;
      } else {
        mainAudio.currentTime = mainAudio.duration; // Cap at song's end
      }
      break;

    case "ArrowLeft": // Left arrow for scrolling backward
      e.preventDefault(); // Prevent default action
      if (mainAudio.currentTime - skipSeconds > 0) {
        mainAudio.currentTime -= skipSeconds;
      } else {
        mainAudio.currentTime = 0; // Cap at song's start
      }
      break;

    default:
      break;
  }
});

