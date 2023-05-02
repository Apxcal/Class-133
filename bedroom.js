statuss="";
img="";
objects=[];

function setup(){
    canvas=createCanvas(500, 320);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
    objectDetector.detect("img", gotResult);
}

function draw(){
    image(img, 0, 0, 620, 360);
    if(statuss !=""){
        for(i=0; i<objects.length; i++){
            fill("FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width. objects[i].height);
            document.getElementById("heading2").innerHTML="There are 5 big objects from which cocossd model has detected "+objects.length+"objects";
        }
    }
}

function preload(){
    img=loadImage("bedroom.png");
}

function modelLoaded(){
    console.log("Model is Loaded");
    statuss="true";
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function back(){
    window.location="index.html";
}