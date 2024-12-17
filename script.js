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
  volumeIcon = document.getElementById("volume-icon");
  volumeSliderContainer = document.querySelector(".volume-slider-container");
  volumeSlider = document.getElementById("volume-slider");
  
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

  // Add class to rotate image when music starts
  wrapper.classList.add("playing");
}

// Pause music
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  mainAudio.pause();

  // Remove class to stop image rotation when music is paused
  wrapper.classList.remove("playing");
}


// Handle previous and next buttons
function prevMusic() {
  musicIndex = musicIndex === 0 ? musicLibrary.length - 1 : musicIndex - 1;
  loadMusic(musicIndex);
  playMusic();
}

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

  // Dynamically change progress bar color based on percentage
  progressBar.style.background = `linear-gradient(to right, #CE380D ${progressPercent}%, #CE380D 0)`;

  // Update the current time display
  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60).toString().padStart(2, "0");
  currentTimeEl.textContent = `${currentMin}:${currentSec}`;

  // Update the total duration display
  const totalMin = Math.floor(duration / 60);
  const totalSec = Math.floor(duration % 60).toString().padStart(2, "0");
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


// Set initial state to mute when app loads
window.onload = function () {
  mainAudio.volume = 1; // Set initial volume
  volumeSlider.value = 1; // Sync slider value
  applyVolumeColor(); // Apply initial color
  updateVolumeIcon(); // Set initial volume icon
};

// Toggle slider visibility on icon click
volumeIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  volumeSliderContainer.style.display =
    volumeSliderContainer.style.display === "block" ? "none" : "block";
  volumeIcon.classList.toggle("active");
});

// Adjust the volume slider with user interaction
volumeSlider.addEventListener("input", function () {
  mainAudio.volume = volumeSlider.value; // Update audio volume
  applyVolumeColor();
  updateVolumeIcon(); // Update icon based on volume level
});

// Function to change the range color based on volume
function applyVolumeColor() {
  if (mainAudio.volume == 1) { // Full volume
    volumeSlider.style.background = "linear-gradient(to right, #FFFFFF, green)";
  } else if (mainAudio.volume >= 0.3 && mainAudio.volume < 1) { // Medium volume
    volumeSlider.style.background = "linear-gradient(to right, orange, #CE380E)";
  } else { // Low volume
    volumeSlider.style.background = "linear-gradient(to right, red, #CE380E)";
  }
}

// Function to update the volume icon based on volume level
function updateVolumeIcon() {
  if (mainAudio.volume == 1) {
    volumeIcon.className = "fa-solid fa-volume-up"; // Full volume
  } else if (mainAudio.volume <= 0.5 && mainAudio.volume > 0) {
    volumeIcon.className = "fa-solid fa-volume-down"; // 50% ya usse kam
  } else if (mainAudio.volume == 0) {
    volumeIcon.className = "fa-solid fa-volume-mute"; // Mute
  }
}

// Hide slider when clicking outside the volume area
document.addEventListener("click", function (e) {
  if (
    !volumeSliderContainer.contains(e.target) &&
    !volumeIcon.contains(e.target)
  ) {
    volumeSliderContainer.style.display = "none";
    volumeIcon.classList.remove("active");
  }
});


// Select the element where the time will be displayed
const timeElement = document.querySelector(".phone-time p");

// Function to update the time
function updateTime() {
  const now = new Date(); // Get current date and time

  let hours = now.getHours(); // Get hours
  let minutes = now.getMinutes(); // Get minutes
  let isPM = hours >= 12; // Determine if it's PM

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Format minutes to always have 2 digits
  minutes = minutes.toString().padStart(2, "0");

  // Set AM/PM
  const period = isPM ? "PM" : "AM";

  // Update the time in the element
  timeElement.textContent = `${hours}:${minutes} ${period}`;
}

// Call updateTime once immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
