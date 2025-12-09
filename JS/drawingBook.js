const dirButtons = document.getElementsByClassName("dirButton")
const nextButton = document.getElementById("nextDrawingButton")
const prevButton = document.getElementById("prevDrawingButton")
const drawingArt = document.getElementById("drawingArt")

let currentDrawing = 0

if (currentDrawing === 0) {
    prevButton.style.display = "none"
}

const drawings = [
    "1.avif",
    "2.avif",
    "3.avif",
    "4.avif",
    "5.avif",
    "6.avif",
    "7.avif",
    "8.avif",
    "9.avif",
    "10.avif",
    "11.avif",
    "12.avif",
    "13.avif",
]

for (let i = 0; i < dirButtons.length; i++) {
    const button = dirButtons[i];

    button.addEventListener("mouseover", () => {
        button.style.cursor = "pointer";

    });

    button.addEventListener("mouseout", () => {
    });

    button.addEventListener("click", (event) => {
        const currentButton = event.currentTarget
        if (currentButton.id == "nextDrawingButton") {
            if (currentDrawing < drawings.length - 1) {
                currentDrawing += 1;
                drawingArt.src = `../../RESOURCES/IMAGES/DRAWINGS/${drawings[currentDrawing]}`;
            }
        } else if (currentButton.id == "prevDrawingButton") {
            if (currentDrawing > 0) {
                currentDrawing -= 1;
                drawingArt.src = `../../RESOURCES/IMAGES/DRAWINGS/${drawings[currentDrawing]}`;
            }
        }
        prevButton.style.display = currentDrawing === 0 ? "none" : "flex";
        nextButton.style.display = currentDrawing === drawings.length - 1 ? "none" : "flex";
        const ChangePageSFX = new Audio("../../RESOURCES/SOUNDS/SFXS/ChangePage.mp3")
        ChangePageSFX.play();
    });
}