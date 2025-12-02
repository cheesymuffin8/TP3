const ElevatorButtons = document.getElementsByClassName("elevatorButton")
const LeftDoor = document.getElementById("LDoor")
const RightDoor = document.getElementById("RDoor")

if (sessionStorage.getItem("buttonDebounce") === null) {
    sessionStorage.setItem("buttonDebounce", "false");
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
        setTimeout(() => {
            LeftDoor.style.animation = "OpenLeftDoor 3s forwards"
            RightDoor.style.animation = "OpenRightDoor 3s forwards"
            sessionStorage.setItem("buttonDebounce", "false")
            sessionStorage.setItem("doorsClosed", "false")
            for (let button of ElevatorButtons) {
                button.style.pointerEvents = "auto"
                button.style.opacity = 1
            }
        }, 3000);
    }    
}

function isNumeric(num) {
    return !isNaN(num)
}

const Floors = {
    0: "elevatorGroundFloor.html",
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

    let FloorNum = 0

    if (sessionStorage.getItem("buttonDebounce") === "false" || sessionStorage.getItem("buttonDebounce") === null) {
        sessionStorage.setItem("buttonDebounce", "true")
        if (isNumeric(FloorDirectionStr)) {
            FloorNum = Number(FloorDirectionStr)
        } else if (FloorDirectionStr === "★G") {
            FloorNum = 0
        }

        sessionStorage.setItem("doorsClosed", "true")

        for (let button of buttonList) {
            button.style.pointerEvents = "none"
            button.style.opacity = 0.5
        }

        CurrentButton.style.border = "0.4vh rgba(255, 255, 255, 1) solid"
        LeftDoor.style.animation = "CloseLeftDoor 3s forwards"
        RightDoor.style.animation = "CloseRightDoor 3s forwards"

        setTimeout(() => {
            window.location.href = Floors[FloorNum]
        }, 3000);
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