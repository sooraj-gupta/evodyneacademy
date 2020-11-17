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