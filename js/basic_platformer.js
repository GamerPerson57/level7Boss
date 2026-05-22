//Declare my variables
var canvas;
var context;
var timer;
var interval;
var player;
var gameOver = false;
var clearObj = false;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

//  |-------Game Objects-------|

	// Player(s)
	player = new GameObject({x:100, y:canvas.height/2-100});

	// Platform(s)
	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
	
	platform1 = new GameObject();
		platform1.width = 1000;
		platform1.x = platform1.width/2;
		platform1.y = canvas.height/2 - 350;
		platform1.color = "#50c42a";
	
	
	// Door(s)
	door0 = new GameObject();
		door0.width = 200;
		door0.height = 200;
		door0.x = canvas.width - 10;
		door0.y = canvas.height - 200;
		door0.color = "#535032"



	
	// Friction
	var fX = .85;
	var fY = .97;
	
	// Gravity
	var gravity = 1;
	var isGravity = true;
	
	// Cooldowns
	var gravityCooldown = false;
	var dashCooldown = false;

	// Keys Pressed
	var gPressed = false;
	var fPressed = false;

	// Iteractables
	var isTouchingDoor = false;
	var isTouchingItem = false;
	var isTouchingSign = false;
	var isTouchingNPC = false;



	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	// Text
	context.clearRect(0,0,canvas.width, canvas.height);	
	context.fillStyle = "black";
	context.font = "20px Arial";
	context.textAlign = "center";
	context.fillText("Interact Mechanic: Press E to interact with objects/NPCs, pick up items, or read signs!", canvas.width/2, canvas.height/2);


	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}


	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	if (f && !fPressed && !dashCooldown) {
        fPressed = true;
		dashCooldown = true;
		
		player.isDashing = true;
        player.dashDuration = 10;

		if (a)
		{
			player.vx = -player.dashSpeed;
		} 
		else if (d)
		{
			player.vx = player.dashSpeed;
		}
		else 
		{
			player.vx = player.dashSpeed; //set it to default
		}
       

		setTimeout(() => 
		{
			dashCooldown = false;
		}, 2000);
    }

	if (player.isDashing) {
		player.dashDuration--;
		if (player.dashDuration <= 0) {
			player.isDashing = false;
		}
	}

	if (!f) 
	{
		fPressed = false;
	}

	if(g && !gPressed && !gravityCooldown) 
	{
		gPressed = true;
		gravityCooldown = true;

		isGravity = !isGravity;
		
		if (isGravity == true)
		{
			gravity = 1;
		}
		if (isGravity == false) 
		{
			gravity = -1;
		}

		setTimeout(() => 
		{
			gravityCooldown = false;
		}, 3000);

	}

	if(!g) 
	{
		gPressed = false;
	}

	if (e) // and touching a type of iteractable (door, item, npc, sign, etc) 
	{

	}


	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	// Platform 0 Collision
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	// Platform 1 Collision
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
		
	
//  |-------Drawing Objects-------|

	// Platform(s)
	platform0.drawRect();
	platform1.drawRect();

	// Player(s)
	player.drawRect();

	// Door(s)
	door0.drawRect();

}