prediction_1 = "";
prediction_2 = "";
Webcam.set({
	width: 350,
	height: 300,
	img_format: 'png',
	img_quality: 90
});
camera = document.getElementById("tsAbm");
Webcam.attach('#camera');
function tuteO(){
	Webcam.snap(function(data_uri){
		document.getElementById("ouyLkgcr").innerHTML = '<img id="caIm" src="'+data_uri+'">';
	});
}
console.log("ML5 Version - "+ml5.version);
classifier = ml5.imageClassifier("", modelLoaded);
function modelLoaded(){
	console.log("Yourrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr modellllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss loaded!");
}
function speak(){
	var synth = window.speechSynthesis;
	speOn = "The first prediction is - "+prediction_1;
	speTw = "The second prediction is - "+prediction_2;
	var utterThis = new SpeechSynthesisUtterance(speOn+speTw);
	synth.speak(utterThis);
}
function check(){
	img = document.getElementById("caIm");
	classifier.classify(img, gotResult);
}
function gotResult(error, result){
	if (error){
		console.error(error);
	} else {
		console.log(result);
		document.getElementById("result_emotion_name").innerHTML = result[0].label;
		document.getElementById("result_emotion_name2").innerHTML = result[1].label;
		prediction_1 = result[0].label;
		prediction_2 = result[1].label;
		speak();
		if (result[0].label == "happy"){
			document.getElementById("upEm").innerHTML = "&#128522;";
		}
		if (result[0].label == "sad"){
			document.getElementById("upEm").innerHTML = "&#128532;";
		}
		if (result[0].label == "angry"){
			document.getElementById("upEm").innerHTML = "&#128548;";
		}
		if (result[1].label == "happy"){
			document.getElementById("upEm2").innerHTML = "&#128522;";
		}
		if (result[1].label == "sad"){
			document.getElementById("upEm2").innerHTML = "&#128532;";
		}
		if (result[1].label == "angry"){
			document.getElementById("upEm2").innerHTML = "&#128548;";
		}
	}
}