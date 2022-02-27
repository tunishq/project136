//hello//

Status = "";

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;

}

function modelLoaded()
    {
console.log("model loaded");
Status = true;
    }

    function draw()
    {
        image(video, 0, 0, 500, 500);
    }