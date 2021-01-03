if ( localStorage.getItem("jan2021warn") != "closed" )
{
	document.getElementById( "jan2021warn" ).style.display = "table";
}
document.documentElement.style.setProperty("--color", "#f90" );

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

//document.getElementById("color").addEventListener( "keydown", event =>
//{
//	if( event.keyCode == 13 )
//		document.documentElement.style.setProperty("--color", ""+ document.getElementById("color").value );
//});

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
if( document.body.id == "faq" )
{
	setInterval( ()=>{
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
	}, 300 );
}
if( document.body.id == "evoarm")
{
	let sidearm = document.getElementById("armfromside").getBoundingClientRect().top + window.scrollY;
	let ak1 = document.getElementById("ak1").getBoundingClientRect().top + window.scrollY;
	let ak2 = document.getElementById("ak2").getBoundingClientRect().top + window.scrollY;
	let ak3 = document.getElementById("ak3").getBoundingClientRect().top + window.scrollY;
	let margin = document.getElementById("armfromside").offsetHeight;
	document.addEventListener( "scroll", () => 
							 {
			console.log ( Math.max ( ( ak1 - margin ) - window.scrollY  , 0 )  )
			
			
				document.getElementById("armfromside").style.transform = "translateX( -"+Math.max ( ( ( sidearm - margin/(window.innerWidth/400) ) - window.scrollY )  , 0 )+"px )"
				document.getElementById("ak1").style.transform = "translateX( "+Math.max ( ( ( ak1 - margin/(window.innerWidth/600)  ) - window.scrollY )  , 0 )+"px )"
				document.getElementById("ak2").style.transform = "translateX( "+Math.max ( ( ( ak2 - margin/(window.innerWidth/600)  ) - window.scrollY )  , 0 )+"px )"
				document.getElementById("ak3").style.transform = "translateX( "+Math.max ( ( ( ak3 - margin/(window.innerWidth/600)  ) - window.scrollY )  , 0 )+"px )"
	});
}