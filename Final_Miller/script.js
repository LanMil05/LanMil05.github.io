const videoPart1 = [
   { src: "videos/wake.mp4", caption: "We all must get up at some point" }
   
];

const videoPart2 = [
    { src: "videos/bed.mp4", caption: "Making your bed every morning helps with productivity" },
    { src: "videos/fresh.mp4", caption: "I have to make sure I am clean and ready for the day" },
	{ src: "videos/brush.mp4", caption: "My hair is such a mess after waking up" },
	{ src: "videos/coffee.mp4", caption: "Do not talk to me until I have had my coffee" }
];

const videoPart3 = [
    { src: "videos/exit.mp4", caption: "Off to pursue my education" }
];

const generateBtn = document.getElementById("generateBtn");
const player = document.getElementById("player"); // <--- THIS WAS MISSING
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

let playlist = [];
let currentIndex = 0;

function picker(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log("Random video:", array[randomIndex]);
    return array[randomIndex];
}

function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
    playlist = [
        picker(videoPart1),
        picker(videoPart2),
        picker(videoPart3)
    ];
    currentIndex = 0;

    playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
titleText.textContent = current.caption;
	
    player.src = current.src;
    player.load();
    player.play().catch(err => {
        console.warn("Play interrupted (autoplay policy?):", err);
    });
}

// Advance when a video ends
player.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex < playlist.length) {
        playCurrent();
    } else {
        console.log("All three parts finished.");
		replayBtn.style.display = "block";
    }
});

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);
