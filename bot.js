let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let doorCount = 3;
let door1Image;
let door2Image;
let door3Image;
let buttonChange = document.getElementById('play-button');
let currentlyPlaying = true;

let isBot = (door) => {
    if (door.src === botDoorPath){
        return true;
    }
    else {
        return false;
    }
}

let playOn = (door) => {
    doorCount--;
    if(doorCount === 0){
        buttonChange.innerHTML = "<p>You win! Play Again?</p>"
        currentlyPlaying = false;
    }
    else if (isBot(door)){
        buttonChange.innerHTML = "<p>Game Over. Try Again?</p>"
        currentlyPlaying = false;
    }
}


door1.onclick = () => {
    if (currentlyPlaying === true){
    door1.src = door1Image;
    playOn(door1);
    }
}

door2.onclick = () => {
    if (currentlyPlaying === true){
    door2.src = door2Image;
    playOn(door2);
    }
}

door3.onclick = () => {
    if (currentlyPlaying === true){
    door3.src = door3Image;
    playOn(door3);
    }
}

let randomDoorNumber = () => {
    botDoor = Math.floor(Math.random() * doorCount);
    if (botDoor === 1){
        door1Image = botDoorPath;
        door2Image = beachDoorPath;
        door3Image = spaceDoorPath;
    }
    else if (botDoor === 2){
        door2Image = botDoorPath;
        door1Image = beachDoorPath;
        door3Image = spaceDoorPath;
    }
    else { (botDoor === 3)
        door3Image = botDoorPath;
        door1Image = beachDoorPath;
        door2Image = spaceDoorPath;
    }
}


let restartGame = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    buttonChange.innerHTML = "<p>Good Luck!</p>"
    doorCount = 3;
    currentlyPlaying = true;
    randomDoorNumber();
}

buttonChange.onclick = () => {
    if (currentlyPlaying === false){
    restartGame();
    }
}

restartGame();