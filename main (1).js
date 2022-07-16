const { savePreview } = require("./webcamjs-master/webcam.js");
const Webcam = require("./webcamjs-master/webcam.js");

var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking my selfie");
        speak();
    }
    document.getElementById("textbox").innerHTML=content;
    
}
function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie.jpeg")
        document.getElementById("result1").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    
        if(img_id=="selfie2.jpeg")
        document.getElementById("result2").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    
        if(img_id=="selfie3.jpeg")
        document.getElementById("result3").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
                  
    });
}
function save(){
    link=documen.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}