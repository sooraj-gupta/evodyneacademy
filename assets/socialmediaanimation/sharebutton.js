/**********************************
* sharebutton.js by Sooraj Gupta *
***********************************/

var clicked = false;

console.log("HTML for button: \n\n<div id = \"socialmediabutton\" onclick = \"clickButton()\">\n\t<span id = dots><i class=\"fa fa-share-alt\"></i></span>\n\t<span id = \"message\"></span>\n</div>\n\n");

console.log("To set color, copy this code into CSS: \n\n:root\n{\n\t--maincolorforsharebutton: lightcoral /* change to set color */ \n}\n\n");

console.log("To set social media links, copy this code into JavaScript: \n\nvar facebookLink = 'https://facebook.com';\nvar instagramLink = 'https://instagram.com';\nvar twitterLink = 'https://twitter.com';\n\n/*To omit a button, leave the value of the link variable as blank. \(eg. twitterLink = ''\)*/\n\n");

console.log("\nTo set the path to THIS folder, copy this code into JavaScript: \n\nvar pathToFolder = 'path/to/folder/'; /* YOU MUST HAVE A SLASH AT THE END */");

function clickButton( state )
{
	clicked = !clicked;
	var clickfunc = "clickButton()";
	var state;
	if( clicked ){
		state = "open";
		clickfunc = "";
	} 
	else{
		clickfunc = "clickButton()";
		state = "close";
	}
	doAnimation( "socialmediabutton", state, "div", 
				"<span id = 'dots'><i class='fa fa-share-alt'></i></span> <span id = 'message'></span>",
				clickfunc, document.body );

	doAnimation( "dots", "dots" + state, "span", 			
				"<i class='fa fa-share-alt'></i>", 
				"", document.getElementById("socialmediabutton") );

	if( clicked )
		document.getElementById( "dots" ).style.transform = "rotate(-90deg)";

	var facebookEl = ( facebookLink == "" ) ? "" :"<img class = socialmedia src = '" + pathToFolder + "images/facebook.png' onclick = \"l('" + facebookLink + "')\">"
	var igEl = ( instagramLink == "" ) ? "" :"<img class = socialmedia src = '" + pathToFolder + "images/instagram.png' onclick = \"l('" + instagramLink + "')\">"
	var twitterEl = ( twitterLink == "" ) ? "" :"<img class = socialmedia src = '" + pathToFolder + "images/twitter.png' onclick = \"l('" + twitterLink + "')\">"
	doAnimation( "message", "message"+state, "span", 
				"<div style = 'width: 100%; display: flex; align-items: center; justify-content: center; text-align: center;'> <a class = 'exit' onclick = 'clickButton()' >&#x2715;</a> " + facebookEl + igEl + twitterEl + "</div>", 
				"", document.getElementById("socialmediabutton") );
}

function doAnimation( idname, classname, element, innerhtml, clickfunction, parent )
{
	document.getElementById(idname).remove();
	var d = document.createElement( element );
	d.id = idname;
	d.setAttribute( "onclick", clickfunction );
	d.innerHTML = innerhtml;	
	d.className = classname;
	parent.appendChild( d );
}
function l( link )
{
	if( clicked ) window.location = link;
}