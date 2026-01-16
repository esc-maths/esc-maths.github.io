let canvasbox = document.getElementById("canvasbox")
let marblecount = document.getElementById("marblecount")
let pegcount = document.getElementById("pegcount")

let width = 966
let height = 801
let marblesize = 12
let marblefriction = 0.1
let pegfriction = 0.1
let dividerthickness = 20
let gravity = 1
let engine;
let world;
let paused = false

let mean = width / 2; // Mean of the bell curve
let stdDev = 10; // Standard deviation of the bell curve


let floor;
let roof
let leftwall
let rightwall


let tempboxes = []
let dividers = []
let pegs = []
let obstacles = []



let marblesizeinput = document.getElementById("marblesizeinput")
marblesizeinput.addEventListener("change", function (e) {
    console.log("marble size changed")

    marblesize = e.target.value
})

let marblefrictioninput = document.getElementById("marblefrictioninput")
marblesizeinput.addEventListener("change", function (e) {
    console.log("marble friction changed")

    marblefriction = e.target.value
})


let gravityinput = document.getElementById("gravityinput")
marblesizeinput.addEventListener("change", function (e) {
    console.log("gravity changed")

    gravity = e.target.value
})


let resetbutton = document.getElementById("resetbutton").addEventListener("click", function (e) {
    // delet all the marbles

    tempboxes.forEach(element => {
        Matter.Composite.remove(world, element);
    });
    tempboxes = []
    marblecount.innerText = 0

})

let pausebutton = document.getElementById("pausebutton")
pausebutton.addEventListener("click", function (e) {
    console.log("pause button pressed")

    if (paused == false) {
        tempboxes.forEach(element => {
            element.isStatic = true
        });
        pausebutton.innerText = "Resume"
        paused = true
    }

    else {
        tempboxes.forEach(element => {
            element.isStatic = false
        });
        pausebutton.innerText = "Pasue"
        paused = false
    }


})




function setup() {

    marblesizeinput.value = marblesize
    marblefrictioninput.value = marblefriction
    gravityinput.value = gravity
    // 800 / 3 = 267
    // 267 * 2 = 534
    let canvas = createCanvas(width, height);
    canvas.parent(canvasbox);

    engine = Matter.Engine.create();
    world = engine.world;
    world.gravity.y = gravity

    // Create the walls
    createthewalls()
    // create dividers
    createDividers(11);
    // create pegs
    createPegs(11, 6)
    addobstacles()

    // Run the engine
    Matter.Engine.run(engine);
}

function draw() {
    // Update the engine
    Matter.Engine.update(engine);

    background(256);
    fill(0);

    // lines
    // line(0, height / 3, width, height / 3);
    // line(0, (height / 3) * 2, width, (height / 3) * 2);

    // draw walls
    rectMode(CENTER);
    fill(150);
    noStroke()
    rect(floor.position.x, floor.position.y, width, 20);
    rect(roof.position.x, roof.position.y, width, 20);
    rect(leftwall.position.x, leftwall.position.y, 20, height);
    rect(rightwall.position.x, rightwall.position.y, 20, height);


    // draw dividers
    for (let index = 0; index < dividers.length; index++) {
        rectMode(CENTER);
        fill(150);
        noStroke()
        rect(dividers[index].position.x, dividers[index].position.y, dividerthickness, height / 3);
    }


    // draw pegs
    for (let index = 0; index < pegs.length; index++) {
        rectMode(CENTER);
        fill(150);
        noStroke()
        circle(pegs[index].position.x, pegs[index].position.y, 30);
    }


    // draw tempboxes
    for (let index = 0; index < tempboxes.length; index++) {
        rectMode(CENTER);
        fill("#C9F4AA");
        stroke(150)
        //  push();
        //   translate(tempboxes[index].position.x, tempboxes[index].position.y);
        //  rotate(tempboxes[index].angle);
        // rect(0, 0, 20, 20);
        circle(tempboxes[index].position.x, tempboxes[index].position.y, marblesize * 2)
        //   pop();
    }

    // draw obstacles
    for (let index = 0; index < obstacles.length; index++) {
        rectMode(CENTER);
        fill(150);
        noStroke()
        push();
        translate(obstacles[index].position.x, obstacles[index].position.y);
        rotate(obstacles[index].angle);

        rect(0, 0, width / 3 + 140, 20);
        pop();
    }


    // draw the bell curve
    stroke(150);
    strokeWeight(3)
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = 5000 * bellCurve(x);
        vertex(x, height - y);
    }
    endShape();

}

// Function to calculate the value of the bell curve at a given x-coordinate
function bellCurve(x) {
    let exponent = -0.002 * ((x - mean) / stdDev) ** 2;
    return (1 / (stdDev * sqrt(TWO_PI))) * exp(exponent);
}


function mouseDragged() {
    //  console.log(`Mouse clicked! x=${mouseX} y=${mouseY}`);
    // create a box on click
    let boxtemp = Matter.Bodies.circle(mouseX, mouseY, marblesize);
    boxtemp.mass = 10
    boxtemp.restitution = 0;
    boxtemp.friction = marblefriction
    tempboxes.push(boxtemp)
    console.log(boxtemp.mass)
    Matter.World.add(world, boxtemp);
    marblecount.innerText = tempboxes.length
}


function createDividers(numberofdivs) {
    let eachdivwidth = width / numberofdivs
    const divideroptions = {
        isStatic: true
    };
    for (let index = 0; index < numberofdivs - 1; index++) {

        let temdivider = Matter.Bodies.rectangle(eachdivwidth + index * eachdivwidth, height - (height / 3) / 2 + 70, dividerthickness, height / 3, divideroptions);
        dividers.push(temdivider)
    }
    Matter.World.add(world, dividers);
}

function createPegs(numberofdivs, rows) {
    let eachdivwidth = width / numberofdivs
    const pegoptions = {
        isStatic: true
    };

    // loop for rows
    for (let j = 0; j < rows; j++) {
        for (let index = 0; index < numberofdivs - 1; index++) {
            if (j % 2 === 0) {
                // Even iteration
                let temppeg = Matter.Bodies.circle(eachdivwidth + index * eachdivwidth + eachdivwidth / 2, (height / 3) + j * eachdivwidth / 1.5, 15, pegoptions);

                temppeg.restitution = 0;
                temppeg.friction = pegfriction

                pegs.push(temppeg)
            } else {
                // Odd iteration
                let temppeg = Matter.Bodies.circle(eachdivwidth + index * eachdivwidth, (height / 3) + j * eachdivwidth / 1.5, 15, pegoptions);
                temppeg.restitution = 0;
                temppeg.friction = pegfriction
                pegs.push(temppeg)
            }
        }
    }
    Matter.World.add(world, pegs);
    pegcount.innerText = pegs.length
}

function addobstacles() {

    const rotationAngle = 20; // Set the desired rotation angle in degrees
    const rotationInRadians = radians(rotationAngle);



    const divideroptions = {
        isStatic: true
    };

    let tempobstacle1 = Matter.Bodies.rectangle(width / 3 - 110, (height / 3) - 120, width / 3 + 140, 20, divideroptions);
    Matter.Body.rotate(tempobstacle1, rotationInRadians);


    obstacles.push(tempobstacle1)
    let tempobstacle2 = Matter.Bodies.rectangle(width / 3 * 2 + 110, (height / 3) - 120, width / 3 + 140, 20, divideroptions);
    Matter.Body.rotate(tempobstacle2, - rotationInRadians);

    obstacles.push(tempobstacle2)

    Matter.World.add(world, obstacles);

}

function createthewalls() {
    //floor
    const groundOptions = {
        isStatic: true
    };
    floor = Matter.Bodies.rectangle(width / 2, height - 10, width, 20, groundOptions);
    //roof
    roof = Matter.Bodies.rectangle(width / 2, 10, width, 20, groundOptions);
    //leftwall
    leftwall = Matter.Bodies.rectangle(10, height / 2, 20, height, groundOptions);
    //rightwall
    rightwall = Matter.Bodies.rectangle(width - 10, height / 2, 20, height, groundOptions);
    Matter.World.add(world, [floor, roof, leftwall, rightwall]);
}