//setInterval( function(){ console.log( window.scrollY ) }, 100 );

var open = false;

function toggleMenu()
{
	var button = document.getElementById( "menubutton" );
	var menu = document.getElementById("menumob");
	if( !open )
	{	
		button.style.right = "150px";
		button.style.transform = "rotate(-270deg)";
		//menu.style.right = "0px"
		menu.style.display = "flex";
		menu.style.boxShadow = "-2px -2px 10px #00000022"
	}
	else
	{	
		button.style.right = "20px";
		button.style.transform = "rotate(0deg)";
		//menu.style.right = "-120px"
		menu.style.display = "none";
		menu.style.boxShadow = "-2px -2px 10px #00000000"
	}
	open = !open;
}
 setInterval( checkScroll, 200 );

function checkScroll()
{
	if( document.getElementById("videocontainer").getBoundingClientRect().top < 0 )
	{
		document.getElementById( "socialmediabutton" ).style.visibility = "visible";
	}
	else
	{
		if( !clicked )
		{
			document.getElementById( "socialmediabutton" ).style.visibility = "hidden";
		}
	}
}

var facebookLink = 'https://facebook.com/evodyneroboticsacademy';
var instagramLink = 'https://instagram.com/evodyneacademy';
var twitterLink = '';

/*To omit a button, leave the value of the link variable as blank. (eg. twitterLink = '')*/

var pathToFolder = 'assets/socialmediaanimation/'; /* YOU MUST HAVE A SLASH AT THE END */