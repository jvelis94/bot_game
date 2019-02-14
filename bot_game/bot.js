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


door1.onclick = () => {
    doorCount--;
    door1.src = door1Image;
    if (door1Image === botDoorPath){
        buttonChange.innerHTML = "<p>You lost! Try Again?</p>"
    }
    else {
        buttonChange.innerHTML = "<p>Keep going!</p>"
    }
}

door2.onclick = () => {
    doorCount--;
    door2.src = door2Image;
    if (door2Image === botDoorPath){
        buttonChange.innerHTML = "<p>You lost! Try Again?</p>"
    }
    else {
        buttonChange.innerHTML = "<p>Keep going!</p>"
    }
}

door3.onclick = () => {
    doorCount--;
    door3.src = door3Image;
    if (door3Image === botDoorPath){
        buttonChange.innerHTML = "<p>You lost! Try Again?</p>"
    }
    else {
        buttonChange.innerHTML = "<p>Keep going!</p>"
    }
}

let continuePlay = () => {
    if (doorCount === 0){
        door1Image = closedDoorPath;
        door2Image = closedDoorPath;
        door3Image = closedDoorPath;
        buttonChange.innerHTML = "<p>Good Luck!</p>"
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



randomDoorNumber();
continuePlay();