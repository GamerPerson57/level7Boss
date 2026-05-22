var w = false;
var a = false;
var s = false;
var d = false;
var f = false;
var g = false;
var e = false;


document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);
	
	// Movement
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}

	// Dash
    if(e.keyCode == 70)
	{
		f = true;
	}

	// Gravity Shift
	if(e.keyCode == 71)
	{
		g = true;
	}

	// Interact
	if(e.keyCode == 69)
	{
		e = true;
	}



}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	// Movement 
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}

	// Dash
    if(e.keyCode == 70)
	{
		f = false;
	}

	// Gravity Shift
	if(e.keyCode == 71)
	{
		g = false;
	}

	// Interact
	if(e.keyCode == 69)
	{
		e = false;
	}
}