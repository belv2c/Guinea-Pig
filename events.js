//Defining variables
var outputTargetDiv = document.getElementById("output-target");
var guineaPigDiv = document.getElementById("guinea-pig");
/*var articleContainer = document.getElementsByClassName("article-section");*/
var thisIsDumb = document.getElementById("this-is-dumb");
var headerSection = document.getElementById("page-title");
var textInput = document.getElementById("keypress-input");

//Adds a click event to the article element and prints what section is clicked into the output-target div
thisIsDumb.addEventListener('click', function(e){
	outputTargetDiv.innerHTML = `You clicked on the ${e.target.innerHTML} section`;
})

//Adds a mouseover event to the header and prints a string into the output-target div
headerSection.addEventListener('mouseover', function(e){
	outputTargetDiv.innerHTML = "You moved your mouse over the header.";
})

//Adds a mouseout event to the header and prints a string into the output-target div
headerSection.addEventListener('mouseout', function(e){
	outputTargetDiv.innerHTML = "You left me!!";
})

//Adds a keypress event to the text input element and targets the value of textInput
textInput.addEventListener('keypress', function(e){
	outputTargetDiv.innerHTML = `${e.target.value}`;

})

