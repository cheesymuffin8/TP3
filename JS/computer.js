import { games, getGames } from './MODULES/gameData.js';

const desktopIconGroups = document.getElementsByClassName("desktopIconGroup")
const gameCoverGroups = document.getElementsByClassName("gameCoverGroup")
const examinedCoverGroup = document.getElementById("examinedCoverGroup")
const gameName = document.getElementById("gameName")
const gameDesc = document.getElementById("gameDesc")
const vignette = document.getElementById("vignette")
const closeExamButton = document.getElementById("closeExamButton")

const appWindows = {
    "FavoriteGames": document.getElementById("gamesApp")
}

for (let i = 0; i < desktopIconGroups.length; i++) {
    const app = desktopIconGroups[i];

    app.addEventListener("dblclick", (event) => {
        const currentApp = event.currentTarget
        const appName = currentApp.dataset.appname
        console.log(appName)
        if (appWindows[appName]) {
            appWindows[appName].style.zIndex = "4";
        }
    });
}

for (const name in appWindows) {
    const app = appWindows[name];
    const xButton = app.querySelector("#xButton");

    xButton.addEventListener("click", () => {
        app.style.zIndex = "-1";
    });
}

for (let i = 0; i < gameCoverGroups.length; i++) {
    const coverGroup = gameCoverGroups[i];

    coverGroup.addEventListener("click", (event) => {

        for (let cover of gameCoverGroups) {
            console.log(cover)
            cover.style.display = "none"
        }

        // 1. Find the image inside the group
        const img = coverGroup.querySelector(".gameCover");
        if (!img) return;

        // 2. Get full src and extract filename
        const fullSrc = img.src;                     // e.g. ".../GMOD.png"
        const fileName = fullSrc.split("/").pop()    // "GMOD.png"
            .replace(/\.(png|jpg|jpeg)$/i, ""); // "GMOD"

        console.log("Cover clicked:", fileName);

        // 3. Get game object from module
        const gameData = getGames(fileName); // or getSong() if you're using that name
        if (!gameData) {
            console.log("No data found for:", fileName);
            return;
        }

        const dataGameName = gameData.name
        gameName.innerHTML = dataGameName
        gameName.style.display = "flex"

        const dataGameDesc = gameData.desc
        gameDesc.innerHTML = `<b>Description:</b><br>` + dataGameDesc
        gameDesc.style.display = "block"

        const examinedCoverGroupCover = examinedCoverGroup.querySelector(".gameCover")
        examinedCoverGroupCover.src = img.src
        examinedCoverGroup.style.display = "flex"

        closeExamButton.style.display = "flex"
        vignette.style.display = "none"

        // 4. Open the window (same as your desktop app logic)
        const appName = "FavoriteGames";
        if (appWindows[appName]) {
            appWindows[appName].style.zIndex = "4";
        }
    });
}

closeExamButton.addEventListener("click", () => {
    gameName.style.display = "none"
    gameDesc.style.display = "none"
    examinedCoverGroup.style.display = "none"
    closeExamButton.style.display = "none"
    vignette.style.display = "flex"
    for (let cover of gameCoverGroups) {
        console.log(cover)
        cover.style.display = "flex"
    }
});