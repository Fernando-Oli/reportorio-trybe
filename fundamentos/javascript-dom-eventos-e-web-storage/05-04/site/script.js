let body = document.getElementById('body');
let colors = ['red', 'blue', 'white', 'black', 'green', 'yellow', 'brown', 'orange'];
let fonts = ['sans-serif', 'Times-New-Roman', 'Arial','monospace'];
let colorBack = document.getElementById('backColor');
let textColor = document.getElementById('textColor');
let fontSize = document.getElementById('fontSize');
let lessFontSize = document.getElementById('lessFont');
let article = document.getElementById('article');
let fontTypes = document.getElementById('fontType');
let colorsNum = 0;
let colorsText = 0;
let fonte = 20;
let espaco = 20;
let tipoDeFontes = 0;

function storageValues(){
  
let numerosDeCor = window.localStorage.getItem('corDoFundo');
colorsNum = numerosDeCor
}
storageValues()

function changeBackColor(){
  colorBack.addEventListener("click",function(){
      body.style.background = colors[colorsNum]
      colorsNum+=1
      localStorage.setItem('corDoFundo', JSON.stringify(colorsNum))
      if(colorsNum === 8){
        colorsNum = 0
      }
  })
}
changeBackColor()

function changeTextColor(){
    textColor.addEventListener("click", function(){
      body.style.color = colors[colorsText]
      colorsText+=1
      if(colorsText === colors.length){
        colorsText = 0
      }
    })
}
changeTextColor()

function moreFont(){
  fontSize.addEventListener("click", function(){
    body.style.fontSize = fonte + 'px'
    fonte+=3
    
  })
}
moreFont()

function lessFont(){
  lessFontSize.addEventListener("click", function(){
    fonte-=3
    body.style.fontSize = fonte + 'px'
    
  })
}
lessFont()

function changeEspaceText(){
  espaceText.addEventListener("click", function(){
    article.style.lineHeight = espaco + 'px'
    espaco+=5
    if(espaco === 60){
      espaco = 20
    }
  })
}
changeEspaceText()

function fontType(){
  fontTypes.addEventListener("click", function(){
    body.style.fontFamily = fonts[tipoDeFontes]
    tipoDeFontes+=1;
    if(tipoDeFontes === fonts.length){
      tipoDeFontes = 0;
    }
  })
}
fontType()
