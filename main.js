img = "";
status = "";

result1 = "";
result2 = "";

accuracy1 = 0;
accuracy2 = 0;

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
   canvas = createCanvas(640, 420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    result1 = results[0].label;
    result2 = results[1].label;

    accuracy1 = results[0].confidence.toFixed(2);
    accuracy2 = results[1].confidence.toFixed(2);
}


function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text(result2, 45, 75);
    text("accuracy : " + accuracy2, 80, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000")
    text(result1, 320, 120);
    text("accuracy : " + accuracy1, 355, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 270, 320);
}