// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
let button = document.getElementById("takeoff");
let land = document.getElementById("landing");
let missionAbort = document.getElementById("missionAbort");

let flightStatus = document.getElementById("flightStatus");
let shuttleBackground = document.getElementById("shuttleBackground");
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

let moveUp = document.getElementById("up");
let moveRight = document.getElementById("right");
let moveDown = document.getElementById("down");
let moveLeft = document.getElementById("left");

let rocket = document.getElementById("rocket");
rocket.style.position = "relative";

    button.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = '10,000';
        };
    });    

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = "green";   
        spaceShuttleHeight.innerHTML = '0';

    });

    missionAbort.addEventListener("click", function(){
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "green";   
            spaceShuttleHeight.innerHTML = '0';
        }
    });

// number 5: move rocket
    moveUp.addEventListener("click", function(){
    //    rocket.style.bottom += "10px";
        positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });

    moveDown.addEventListener("click", function(){
    //    rocket.style.bottom += "10px";
        positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    });    

    moveLeft.addEventListener("click", function(){
        //    rocket.style.bottom += "10px";
        positionString = rocket.style.right;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.right = Number(position) + 10 + "px";
    });    

    moveRight.addEventListener("click", function(){
        //    rocket.style.bottom += "10px";
        positionString = rocket.style.right;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.right = Number(position) - 10 + "px";
    });

});

