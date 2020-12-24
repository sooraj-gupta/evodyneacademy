var open = false;
document.getElementById("ham").onclick = function()
{
	window.scrollTo(0, 0);
	if( !open )
	{
		document.getElementsByClassName('menu')[0].classList.toggle( 'open' ); 
		document.getElementsByClassName('logo')[0].classList.toggle( 'open' ); 
		document.body.classList.toggle( 'open' );
		setTimeout( ()=>{
			document.getElementsByClassName('menu')[0].style.height = "100vh";
			setTimeout( ()=>{
				for( var i = 0; i < document.getElementsByClassName('underline').length; i++  )
				{
					document.getElementsByClassName('underline')[i].style.opacity = "1"
				}
			}, 50 );
		}, 10 )
	}
	else
	{
		for( var i = 0; i < document.getElementsByClassName('underline').length; i++  )
		{
			document.getElementsByClassName('underline')[i].style.opacity = "0"
		}
		setTimeout( ()=>{document.getElementsByClassName('menu')[0].style.height = "0vh";}, 100 );
		setTimeout( ()=>{
			document.getElementsByClassName('menu')[0].classList.toggle( 'open' ); 
			document.getElementsByClassName('logo')[0].classList.toggle( 'open' ); 
			document.body.classList.toggle( 'open' );
		}, 200 )
	}
	open = !open;
}