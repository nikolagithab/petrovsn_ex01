// myscript.js for Exercise 1
// Nikola
$(document).ready(function() {
	console.log("in doc ready");
	//Enter YOUR NAME in the <title> tags (0.25)
	$("title").html("Nikola");
	//On document load, append Nikola Petrovski in the <h3> after "Ex #1.
	$("h3").append("Nikola Petrovski");
	//First button: Change all paragraphs that contain the text "dolor" to have a teal background with yellow text
	$("#clickText").click(function(){
		$("p:contains('dolor')").css({"background-color": "teal", "color": "yellow"});
	});
	//Second button: Change all paragraphs that contain an "img" tag to use the class "imgClass"
	$("#clickImg").click(function(){
		$("p:has(img)").addClass("imgClass");
	});
    //Third button: Outline all images that end in ".png" with a thick solid teal border
    $("#clickPng").click(function(){
	    $("p img[src $= '.png']").css("border", "thick solid teal");
	});
}); //end doc ready
