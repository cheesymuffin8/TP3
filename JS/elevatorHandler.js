const ElevatorButtons = document.getElementsByClassName("elevatorButton")
const LeftDoor = document.getElementById("LDoor")
const RightDoor = document.getElementById("RDoor")
const FloorNumberText = document.getElementById("floorTextDiv")

const CurrentFileNumber = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1).match(/\d+/)[0].replace(/^0+/, "") || "0";

if (sessionStorage.getItem("buttonDebounce") === null) {
    sessionStorage.setItem("buttonDebounce", "false");
}

if (sessionStorage.getItem("floor") === null) {
    sessionStorage.setItem("floor", "0");
}
if (sessionStorage.getItem("lastFloor") === null) {
    sessionStorage.setItem("lastFloor", CurrentFileNumber);
}
if (Number(sessionStorage.getItem("floor")) > Number(sessionStorage.getItem("lastFloor"))) {
    FloorNumberText.textContent = "▴" + sessionStorage.getItem("floor")
} else if (Number(sessionStorage.getItem("floor")) < Number(sessionStorage.getItem("lastFloor"))) {
    FloorNumberText.textContent = "▾" + sessionStorage.getItem("floor")
} else if (Number(sessionStorage.getItem("floor")) == Number(sessionStorage.getItem("lastFloor"))) {
    FloorNumberText.textContent = "-" + sessionStorage.getItem("floor") + "-"
}

if (sessionStorage.getItem("doorsClosed") === null) {
    sessionStorage.setItem("doorsClosed", "false");
    LeftDoor.style.transform = "translate(15%)";
    RightDoor.style.transform = "translate(-15%)";
} else {
    if (sessionStorage.getItem("doorsClosed") === "false") {
        LeftDoor.style.transform = "translate(0%)";
        RightDoor.style.transform = "translate(0%)";
    } else {
        for (let button of ElevatorButtons) {
                button.style.pointerEvents = "none"
                button.style.opacity = 0.5
        }
        const ElevatorSFX = new Audio("../../RESOURCES/SOUNDS/SFXS/Elevator.mp3")
        ElevatorSFX.play();
        setTimeout(() => {
            const ElevatorDoorSFX = new Audio("../../RESOURCES/SOUNDS/SFXS/ElevatorDoorSFX.mp3")
            ElevatorDoorSFX.play();
            const ElevatorChime = new Audio("../../RESOURCES/SOUNDS/SFXS/ElevatorChime.mp3")
            ElevatorChime.play();
            LeftDoor.style.animation = "OpenLeftDoor 4s forwards"
            RightDoor.style.animation = "OpenRightDoor 4s forwards"
            sessionStorage.setItem("buttonDebounce", "false")
            sessionStorage.setItem("doorsClosed", "false")
            for (let button of ElevatorButtons) {
                button.style.pointerEvents = "auto"
                button.style.opacity = 1
            }
            FloorNumberText.textContent = "- " + CurrentFileNumber + " -"
        }, 8250);

    }    
}

function isNumeric(num) {
    return !isNaN(num)
}

const Floors = {
    0: "floor_00.html",
    1: "floor_01.html",
    2: "floor_02.html",
    3: "floor_03.html",
    4: "floor_04.html",
    5: "floor_05.html",
    6: "floor_06.html",
}

function moveFloor(elevatorButton, buttonList) {
    const CurrentButton = elevatorButton.currentTarget
    const FloorDirectionStr = CurrentButton.textContent

    if (CurrentFileNumber === FloorDirectionStr) {
        return
    } else {
        const ElevatorButtonPressSFX = new Audio("../../RESOURCES/SOUNDS/SFXS/ElevatorButtonPress.mp3")
        ElevatorButtonPressSFX.play();
    }

    if (sessionStorage.getItem("buttonDebounce") === "false" || sessionStorage.getItem("buttonDebounce") === null) {
        sessionStorage.setItem("buttonDebounce", "true")
        if (isNumeric(FloorDirectionStr)) {
            sessionStorage.setItem("lastFloor", CurrentFileNumber)
            sessionStorage.setItem("floor", FloorDirectionStr)
        } else if (FloorDirectionStr === "★G") {
            sessionStorage.setItem("floor", "0")
        }

        sessionStorage.setItem("doorsClosed", "true")

        for (let button of buttonList) {
            button.style.pointerEvents = "none"
            button.style.opacity = 0.5
        }

        CurrentButton.style.border = "0.4vh rgba(255, 255, 255, 1) solid"
        LeftDoor.style.animation = "CloseLeftDoor 4s forwards"
        RightDoor.style.animation = "CloseRightDoor 4s forwards"
        const ElevatorDoorSFX = new Audio("../../RESOURCES/SOUNDS/SFXS/ElevatorDoorSFX.mp3")
        ElevatorDoorSFX.play();

        setTimeout(() => {
            window.location.href = Floors[Number(sessionStorage.getItem("floor"))]
        }, 4000);
    }
}

for (let i = 0; i < ElevatorButtons.length; i++) {
    ElevatorButtons[i].addEventListener("mouseover", (event) => {
        if (sessionStorage.getItem("buttonDebounce") === "false") {
            const CurrentButton = event.currentTarget
            CurrentButton.style.border = "0.4vh rgb(120, 255, 115) solid"
            CurrentButton.style.cursor = "pointer"
        }
    })
    ElevatorButtons[i].addEventListener("mouseout", (event) => {
        const CurrentButton = event.currentTarget
        CurrentButton.style.border = "0.4vh rgba(255, 255, 255, 1) solid"
    })
    ElevatorButtons[i].addEventListener("click", (event) => {
        moveFloor(event, ElevatorButtons)
    });
};