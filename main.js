
var canvas = new fabric.Canvas('myCanvas');

Avengers_image_width = 30;
Avengers_image_height = 30;

var Avengers_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	Avengers_image_object = Img;

    Avengers_image_object.scaleToWidth(Avengers_image_width);
	Avengers_image_object.scaleToHeight(Avengers_image_height);
	Avengers_image_object.set();
	canvas.add(Avengers_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	Avengers_image_width = Avengers_image_width + 10;
	block_image_height = Avengers_image_height + 10;
	document.getElementById("current_width").innerHTML = Avengers_image_width;
	document.getElementById("current_height").innerHTML = Avengers_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	Avengers_image_width = Avengers_image_width - 10;
	Avengers_image_height = Avengers_image_height - 10;
	document.getElementById("current_width").innerHTML = Avengers_image_width;
	document.getElementById("current_height").innerHTML = Avengers_image_height;
}

	if(keyPressed == '65')
	{
		new_image('Iron Man - Head.png'); 
		console.log("a");
	}

	if(keyPressed == '66')
	{
		new_image('Iron Man - Body.png'); 
		console.log("b");
	}

	if(keyPressed == '67')
	{
		new_image('Iron Man - Left A.png'); 
		console.log("c");
	}

	if(keyPressed == '68')
	{
		new_image('Iron Man - Left L.png'); 
		console.log("d");
	}

	if(keyPressed == '69')
	{
		new_image('Iron Man - Right A.png'); 
		console.log("e");
	}

	if(keyPressed == '70')
	{
		new_image('Iron Man - Right L.png'); 
		console.log("f");
	}

	if(keyPressed == '71')
	{
		new_image('Hulk - Head.png'); 
		console.log("g");
	}

	if(keyPressed == '72')
	{
		new_image('Hulk - Body.png'); 
		console.log("h");
	}

	if(keyPressed == '73')
	{
		new_image('Hulk - Left A.png'); 
		console.log("i");
	}

	if(keyPressed == '74')
	{
		new_image('Hulk - Left L.png'); 
		console.log("j");
	}

    if(keyPressed == '74')
	{
		new_image('Hulk - Right A.png'); 
		console.log("j");
	}
	
    if(keyPressed == '75')
	{
		new_image('Hulk - Right L.png'); 
		console.log("k");
	}
}