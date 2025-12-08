import { songs, getSong } from './MODULES/musicData.js';

const recordGroups = document.getElementsByClassName("recordGroup")

const playerCover = document.getElementById("playerCover")
const playerTitle = document.getElementById("playerTitle")
const playerArtist = document.getElementById("playerArtist")
const playerAlbum = document.getElementById("playerAlbum")
const playerAudio = document.getElementById("playerAudio")
const sourceElement = playerAudio.querySelector('source');

for (let i = 0; i < recordGroups.length; i++) {
    const group = recordGroups[i];

    // Hover animations (optional)
    group.addEventListener("mouseover", () => {
        const recordSelf = group.querySelector(".recordSelf");
        recordSelf.style.animation = "showRecord 0.5s ease-in-out forwards";
        group.style.animation = "growRecordGroup 0.2s ease-in-out forwards";
        group.style.cursor = "pointer";
    });

    group.addEventListener("mouseout", () => {
        const recordSelf = group.querySelector(".recordSelf");
        recordSelf.style.animation = "hideRecord 0.5s ease-in-out forwards";
        group.style.animation = "shrinkRecordGroup 0.2s ease-in-out forwards";
    });

    group.addEventListener("click", () => {
    const recordCover = group.querySelector(".recordCover");
    if (recordCover) {
        // Get the filename from the image URL
        let imgFile = recordCover.src.split("/").pop();

        // Decode URL-encoded characters and replace extension
        const fileName = decodeURIComponent(imgFile.replace(".jpg", ".mp3")); // "Bring It Back to Me.mp3"

        // Lookup song in the module
        const songData = getSong(fileName);

        if (songData) {
            console.log(`Song clicked: ${songData.song}`);
            console.log(`Artist: ${songData.artist}`);
            console.log(`Album: ${songData.album}`);

            playerCover.src = recordCover.src;
            playerTitle.textContent = songData.song;
            playerArtist.textContent = songData.artist;
            playerAlbum.textContent = songData.album;
            sourceElement.src = `../../RESOURCES/SOUNDS/MUSIC/${fileName}`;
            playerAudio.load();
        } else {
            console.log("Song not found for file:", fileName);
        }
    }
});
}