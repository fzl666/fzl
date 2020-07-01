let ig
let wb
function setup() {
noLoop()
  
}

function draw() {
 createCanvas(400,400)
 background(250)
 text('@fzlmagazine',150,200)
 ig = createButton('Instagram')
 ig.position(150,260)
 ig.mousePressed(instagram)
 wb = createButton('Weibo')
 wb.position(160,300)
 wb.mousePressed(weibo)
}

function instagram(){
  window.open("https://www.instagram.com/fzlmagazine/")
}

function weibo(){
  window.open("https://www.weibo.com/u/7464383065")
}