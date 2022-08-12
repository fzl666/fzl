let ig
let wb
function setup() {
createCanvas(windowWidth, windowHeight)
noLoop()
  
}

function draw() {
 background(250)
 text('@fzlmagazine',150,200)
 ig = createButton('Instagram')
 ig.position(150,260)
 ig.mousePressed(instagram)
 wb = createButton('Weibo')
 wb.position(160,300)
 wb.mousePressed(weibo)
 back = createButton('返回')
 back.position(163,340)
 back.mousePressed(go)
 text('程序设计：LuwenxiSong, 词库编写：LuwenxiSong & BenitaGuo', 20, 48)
}

function instagram(){
  window.open("https://www.instagram.com/fzlmagazine/")
}

function weibo(){
  window.open("https://www.weibo.com/u/7464383065")
}
function go(){
  window.location.href ="../index.html"
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);   
  }
