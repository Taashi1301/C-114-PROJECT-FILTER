NoseX=0;
NoseY=0;
function preload(){

}

function setup(){
canvas=createCanvas(400, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose", Getposes);
}
function Getposes(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x-10;
        NoseY=results[0].pose.nose.y-10;
        console.log(NoseX, NoseY);
    }
}
function modelloaded(){
    console.log("Model Is Ready");
}
function draw(){
image(video, 0,0, 450, 400);
}
function snapshot(){
save("yourpic.png");
}