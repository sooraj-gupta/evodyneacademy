let cats = {
	"regular":{
		"els":[], 
		"func": regular
	},
	"hinge":{
		"els":[], 
		"func": hinge
	},
	"halfrot":{
		"els":[], 
		"func": halfrot
	},
	"fullrot":{
		"els":[], 
		"func": fullrot
	},
	"flip":{
		"els":[], 
		"func": flip
	},
	"underline":{
		"els":[], 
		"func": underline
	},
	"fill":{
		"els":[], 
		"func": fillbutton
	}
	
};
function init()
{
	let color = parseInt(getComputedStyle( document.documentElement ).getPropertyValue( "--mainbutton" ).substring(2), 16);
	console.log( color );
	let light = color + parseInt( "111111", 16 );
	console.log( light );
	let dark = color - parseInt( "111111", 16 );
	document.documentElement.style.setProperty( "--lightbutton", "#" + light.toString(16) );
	document.documentElement.style.setProperty( "--darkbutton", "#" + dark.toString(16) );
	function getElsByClass( className )
	{
		cats[className].els = document.getElementsByClassName( className );
	}
	for( var i = 0; i < Object.keys(cats).length; i++ )
	{
		getElsByClass( Object.keys(cats)[i] );
	}
	for( var i = 0; i < Object.keys(cats).length; i++ )
	{
		for( var j = 0; j < cats[Object.keys(cats)[i]].els.length; j++ )
			cats[Object.keys(cats)[i]].func( cats[Object.keys(cats)[i]].els[j] );
	}
	
}
 
function goTo( href, tab )
{
	if (!tab)
		window.location = href;
	else
	{
		window.open(href, '_blank');
	}
}
function regular(el)
{
	el.className += " button";
	var target = el.getAttribute( "target" ) == "_blank";
	el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
	
}
function hinge(el)
{
	let title, msg;
	if( el.innerText.indexOf(";") != -1 )
	{
		title = el.innerText.substring( 0, el.innerText.indexOf(";") );
		msg = el.innerText.substring( el.innerText.indexOf(";")+1 );
		el.className += " button";
		el.innerHTML = `
		<div class = "hingescene">
			<div class = "fig">
				<button class = "face title">${title}</button>
				<button class = "face msg">${msg}</button>
			<\div>
		<\div>
		`;
		if( el.getAttribute( "data-jaroos-open" ) == "always" )
		{
			el.firstElementChild.firstElementChild.querySelector(".msg").style.transform = "rotateX(-0deg) translateZ(20px) translateY(41px)";
			el.firstElementChild.firstElementChild.querySelector(".msg").style.opacity = "1";
		}
		
		el.querySelector(".title").style.display = "block";
		console.log( el.querySelector(".title").offsetWidth );
		el.style.width = el.querySelector(".title").offsetWidth + "px";
		el.style.height = (el.querySelector( ".title").offsetHeight) + "px";
		var target = el.getAttribute( "target" ) == "_blank";
			
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
	}
	
}
function halfrot(el)
{
	let title, msg;
	if( el.innerText.indexOf(";") != -1 )
	{
		title = el.innerText.substring( 0, el.innerText.indexOf(";") );
		msg = el.innerText.substring( el.innerText.indexOf(";")+1 );
		el.className += " button";
		el.innerHTML = `
		<div class = "halfrotscene">
			<div class = "fig">
				<button class = "face title">${title}</button>
				<button class = "face msg">${msg}</button>
			<\div>
		<\div>
		`;
		if( el.getAttribute( "data-jaroos-open" ) == "always" )
		{
			el.firstElementChild.firstElementChild.style.transform = "rotateX(-45deg) translateZ(0px) translateY(0px)";
			if( el.getAttribute( "data-jaroos-orientation" ) == "reverse" ) {
				el.firstElementChild.firstElementChild.style.transform = "rotateX(45deg) translateZ(0px) translateY(0px)";
			}
		}
		if( el.getAttribute( "data-jaroos-orientation" ) == "reverse" ) {
			el.classList.add( "reverse" );
		}
		let maxWidth = Math.max( el.firstElementChild.firstElementChild.querySelector(".title").offsetWidth, el.firstElementChild.firstElementChild.querySelector(".msg").offsetWidth );
		el.firstElementChild.firstElementChild.querySelector(".msg").style.width = maxWidth + "px";
		el.firstElementChild.firstElementChild.querySelector(".title").style.width = maxWidth +"px";
		el.style.width =(el.firstElementChild.firstElementChild.firstElementChild.offsetWidth + 10 ) + "px";
		
		el.style.height = el.firstElementChild.firstElementChild.firstElementChild.offsetHeight + "px";
		var target = el.getAttribute( "target" ) == "_blank";
			
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
	}
	
}

function fullrot(el)
{
	let title, msg;
	if( el.innerText.indexOf(";") != -1 )
	{
		title = el.innerText.substring( 0, el.innerText.indexOf(";") );
		msg = el.innerText.substring( el.innerText.indexOf(";")+1 );
		el.className += " button";
		el.innerHTML = `
		<div class = "fullrotscene">
			<div class = "fig">
				<button class = "face title">${title}</button>
				<button class = "face msg">${msg}</button>
			<\div>
		<\div>
		`;
		if( el.getAttribute( "data-jaroos-orientation" ) == "reverse" ) {
			el.classList.add( "reverse" );
		}
		let maxWidth = Math.max( el.firstElementChild.firstElementChild.querySelector(".title").offsetWidth, el.firstElementChild.firstElementChild.querySelector(".msg").offsetWidth );
		el.firstElementChild.firstElementChild.querySelector(".msg").style.width = maxWidth + "px";
		el.firstElementChild.firstElementChild.querySelector(".title").style.width = maxWidth +"px";
		el.style.width =(el.firstElementChild.firstElementChild.firstElementChild.offsetWidth + 10 ) + "px";
		
		el.style.height = el.firstElementChild.firstElementChild.firstElementChild.offsetHeight + "px";
		var target = el.getAttribute( "target" ) == "_blank";
			
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
	}
	
}

function flip(el)
{
	let title, msg;
	if( el.innerText.indexOf(";") != -1 )
	{
		title = el.innerText.substring( 0, el.innerText.indexOf(";") );
		msg = el.innerText.substring( el.innerText.indexOf(";")+1 );
		el.className += " button";
		el.innerHTML = `
		<div class = "flipscene">
			<div class = "fig">
				<button class = "face title">${title}</button>
				<button class = "face msg">${msg}</button>
			<\div>
		<\div>
		`;
		if( el.getAttribute( "data-jaroos-orientation" ) == "reverse" ) {
			el.classList.add( "reverse" );
		}
		let maxWidth = Math.max( el.firstElementChild.firstElementChild.querySelector(".title").offsetWidth, el.firstElementChild.firstElementChild.querySelector(".msg").offsetWidth );
		el.firstElementChild.firstElementChild.querySelector(".msg").style.width = maxWidth + "px";
		el.firstElementChild.firstElementChild.querySelector(".title").style.width = maxWidth +"px";
		el.style.width =(el.firstElementChild.firstElementChild.firstElementChild.offsetWidth + 5 ) + "px";
		
		
		
		el.style.height = el.firstElementChild.firstElementChild.firstElementChild.offsetHeight + "px";
		el.firstElementChild.style.height = el.firstElementChild.firstElementChild.firstElementChild.offsetHeight + "px";
		var target = el.getAttribute( "target" ) == "_blank";
			
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
	}
}

function underline( el )
{
	if( el.getAttribute("data-jaroos-orientation") != null )
	{
		if( !el.getAttribute("data-jaroos-orientation").includes("reverse") )
		{
			el.classList.add( "forward" );
		}
		el.className += " " + el.getAttribute("data-jaroos-orientation");
	}
	else
	{
		el.classList.add( "forward" );
	}
	var target = el.getAttribute( "target" ) == "_blank";	
	if( el.getAttribute( "href" ) != null )
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
}

function fillbutton( el )
{
	if( el.getAttribute("data-jaroos-orientation") != null )
	{
		if( !el.getAttribute("data-jaroos-orientation").includes("reverse") )
		{
			el.classList.add( "forward" );
		}
		el.className += " " + el.getAttribute("data-jaroos-orientation");
	}
	else
	{
		el.classList.add( "forward" );
	}
	var target = el.getAttribute( "target" ) == "_blank";	
	if( el.getAttribute( "href" ) != null )
		el.setAttribute( "onclick", `goTo('${el.getAttribute( "href" )}', ${target});`);
}
if( document.body.display = "block" )
	init();