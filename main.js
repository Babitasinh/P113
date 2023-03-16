tent_color="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function Filter_color()
{
tent_color=document.getElementById("color_name").value;
}

function draw()
{
    image(video,250,200,100,100);
    tint(tent_color);
    fill("red")
    circle(30, 30, 50);
    circle(550, 30, 50);
    circle(30, 450, 50);
    circle(550, 450, 50);
    fill("Green")
    rect(15, 35, 25, 410);
    rect(25, 15, 520, 30);
    rect(550, 35, 25, 410);
    rect(25, 450, 520, 30);
}

function take_snapshot()
{
    save('image.png');
}