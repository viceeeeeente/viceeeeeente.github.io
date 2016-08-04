//2016 08 04 jueves
//colegio oratorio don bosco
//santiago de chile
//latinoameria
//clase de programacion
//funciona con p5.js
//vicente villalon
//saludos a la mamasita del vazku

var diametro;
diametro = 100;

//stup() corre una vez
//al principio



function setup() {
//crea un lienzo
//crerateCanvas(dimHor,  dimVer);
//pinta el fondo verde
//backgroud(red, green, blue);
//0 es nada,,  255 es todo



createCanvas(800,  600) ;

background(0,255,0);

}

// draw()  se ejecuta despues
//de stup
//se hace 60 veces por segundo


function draw() {
  

//desfinir estilo de la elipse
//definir ancho del borde
//strokeWeight(px);
strokeWeight(10);

//definir color

//stroke(color);

//exploicacion de color
//1: grayscale, 0 es negro  255 es blanco
//2: grayscale + alpha
//3: RGB, red, green, blue
//4: RGB + alpha

//alpha: 0 es transparente, 255 es solido
//definir color del borde
//stroke(color);
//borde azul semitransparente
stroke(0, 0, 255, 255/2);

//definir color de relleno
//fill(color);
//azul semitransparente


fill(255*mouseX/width, 0, 0);


//dibujar elipse que sigue al mouse
//ellipse(posX, posY, width,  heigth);


ellipse(mouseX, mouseY, diametro, diametro);


 diametro = diametro = 1;

}