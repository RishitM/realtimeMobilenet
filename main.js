var object_name
var object_accuracy
function preload(){

}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5.version+" is the version of ml5")
  classifier=ml5.imageClassifier("MobileNet",modelLoaded);
  
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult)
}

function modelLoaded(){
console.log("model Loaded")
}
function gotResult(error,results){
  if (error){
    console.error("3rr0r")
  }
  else{
    console.log(results);
    object_name= results[0].label;
    object_accuracy= results[0].confidence.toFixed(2);
    object_accuracy= object_accuracy*100+"%"
    document.getElementById("object").innerHTML= object_name;
    document.getElementById("accuracy").innerHTML= object_accuracy;
  }
}