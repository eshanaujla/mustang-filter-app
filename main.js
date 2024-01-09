noseX=0;
noseY=0;
function preload() {
    img_mustage=loadImage("https://static.vecteezy.com/system/resources/previews/014/455/858/non_2x/mexican-mustache-on-transparent-background-free-png.png");
}
function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('pose net is initialized');
}
function draw() {
image(video,0,0,300,300);
image(img_mustage,noseX-25,noseY-10,50,50);
}
function take_snapshot() {
save('you.png');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}