//Defining variables
var outputTargetDiv = document.getElementById("output-target");
/*var articleContainer = document.getElementsByClassName("article-section");*/
var thisIsDumb = document.getElementById("this-is-dumb");
var headerSection = document.getElementById("page-title");
var textInput = document.getElementById("keypress-input");
var guineaPigDiv = document.getElementById("guinea-pig");
var colorButton = document.getElementById("add-color");
var bigButton = document.getElementById("make-large");
var addBorderButton = document.getElementById("add-border");
var roundButton = document.getElementById("add-rounding");
var articleSection = document.getElementById("article-section");

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

//Adds a click event to the Add color button and targets the css color attribute
colorButton.addEventListener('click', function(e){
	guineaPigDiv.setAttribute("class", "color");
})

//Adds a click event to the Hulkify button and targets the css font size attribute
bigButton.addEventListener('click', function(e){
	guineaPigDiv.setAttribute("class", "big");
})

//Adds a click event to the Capture it button and targets the css border attribtue
addBorderButton.addEventListener('click', function(e){
	guineaPigDiv.setAttribute("class", "solid");
})

//Adds a click event to the Rounded button and targets the css border attributes
roundButton.addEventListener('click', function(e){
	guineaPigDiv.setAttribute("class", "round");
})

//Targets the article section class at the 0 index and adds the 'introduction' to the class list and makes it bold in the CSS
document.getElementsByClassName('article-section')[0].classList.add('introduction');

//Targets the article section class at the 5 idex and adds the 'conclusion' to the class list and makes it bold and italic in the CSS
document.getElementsByClassName('article-section')[5].classList.add('conclusion');

//Makes buttons inline
["add-color", "make-large", "add-border", "add-rounding"].forEach(function(id){
	document.getElementById(id)classList.add('button-group');
});

