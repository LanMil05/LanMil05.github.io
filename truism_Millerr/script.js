console.log("SCRIPT LOADED");
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Video list
const videoSources = [
    "video/doom.mp4",
    "video/mario.mp4",
    "video/party.mp4",
    "video/rain.mp4",
    "video/falls.mp4"
];

// Track which video is active
let currentVideoIndex = 0;

// Save playback times for each video
const videoTimes = [0, 0, 0, 0, 0];

// Only unmute on first click
let isSoundEnabled = false;

function toggleVideo() {
    console.log("Switching from:", videoSources[currentVideoIndex]);

    // First click: unmute
    if (!isSoundEnabled) {
        videoPlayer.muted = false;
        isSoundEnabled = true;
    }

    // Save current video's time
    videoTimes[currentVideoIndex] = videoPlayer.currentTime;

    // Pick a random new video index that's different from the current
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);

    currentVideoIndex = newIndex;

    console.log("Switching to:", videoSources[currentVideoIndex]);

    // Set new video source
    videoPlayer.src = videoSources[currentVideoIndex];

    // Load the new video
    videoPlayer.load();

    // Wait until the video actually loads BEFORE seeking
    videoPlayer.addEventListener("loadedmetadata", function onLoad() {
        videoPlayer.currentTime = videoTimes[currentVideoIndex] || 0;
        videoPlayer.play();

        // Remove listener so it only runs once per switch
        videoPlayer.removeEventListener("loadedmetadata", onLoad);
    });
}

// Listen for button click
textBox.addEventListener("click", toggleVideo);