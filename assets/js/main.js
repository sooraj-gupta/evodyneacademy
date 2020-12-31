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
document.getElementsByClassName("menu")[0].onclick = function()
{
	if( open )
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
		open = !open;
	}
}

document.getElementById("color").addEventListener( "keydown", event =>
{
	if( event.keyCode == 13 )
		document.documentElement.style.setProperty("--color", ""+ document.getElementById("color").value );
});

for( var i = 0; i < document.getElementsByClassName("horizmenuitem").length; i++ )
{
	document.getElementsByClassName("horizmenuitem")[i].onclick = function()
	{
		//changeHorizMenuElement( this );
	}
}

function changeHorizMenuElement( el )
{
	for( var j = 0; j < document.getElementsByClassName("horizmenuitem").length; j++ )
	{
		document.getElementsByClassName("horizmenuitem")[j].classList.remove("active");
	}
	el.classList.add("active");
}

let fhs = document.getElementsByClassName("faqheader");
let lastFH = "#forparents";
setInterval( ()=>{
	
	if( document.body.id == "faq" )
	{
		for( var i = 0; i < fhs.length; i++ )
		{
			if( fhs[i].getBoundingClientRect().top < 20 )
			{
				if( lastFH != document.getElementsByClassName("horizmenuitem")[i].getAttribute( "href" ) ) 
				{
					if( i < document.getElementsByClassName("horizmenuitem").length )
					{
						changeHorizMenuElement( document.getElementsByClassName("horizmenuitem")[i] )
						lastFH = document.getElementsByClassName("horizmenuitem")[i].getAttribute( "href" );
					}
					console.log( fhs[i] );
				}
			}
		}
	}
	
}, 300 );