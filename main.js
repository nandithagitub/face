//104
Webcam.set({
width:300,
height:300,
image_format:'png',
quality:100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_selfie(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+">"
    console.log(data_uri);
    });
}

console.log("ml5 version:"+ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

