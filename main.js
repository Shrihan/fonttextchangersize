function setup(){
canvas=createCanvas(400, 400)
canvas.center()
video=createCapture(VIDEO)
video.size(500, 500)
poseNet=ml5.poseNet(video, modelloaded)
poseNet.on("pose", gotPoses);
}
function draw(){
    background("lightblue")
text("Shrihan", 200, 200)
}
function modelloaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}