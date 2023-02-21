function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(850, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet model is initialized");
}

function draw()
{
    background("lightgrey");
    textSize(difference);
    fill("coral");
    text("Shwetha", 20, 20); 
    
    document.getElementById("update_textsize").innerHTML = "The updated font size is " + difference + "px";
}

leftWristX = 0;
rightWristX = 0;
difference = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist x = " + leftWristX + "Right Wrist x = " + rightWristX + "difference = " + difference);
    }
}