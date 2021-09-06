
function setup(){
canvas=createCanvas(500,500)
canvas.position(250,250)
video=createCapture(VIDEO)
video.hide()
canvas.center()
}
function draw(){
 image(video,145,150,250,250)
 fill("red")
rect(100,90,350,20)
fill("green")
circle(100,100,50)
circle(450,100,50)
fill("red")
rect(100,450,350,20)
fill("green")
circle(100,460,50)
circle(450,460,50)
fill("red")
rect(90,125,20,315)
rect(440,125,20,315)
}
function Save(){
save('image.png')
}