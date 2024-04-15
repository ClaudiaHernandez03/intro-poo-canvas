const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//Establece el tamaño del canvas
canvas.height = window_height;
canvas.width = window_width;

//Establece el color de fondo
canvas.style.backgroundColor = 'pink';

class Circle {

    constructor(x, y, radius, color, text){
        this.posx = x;
        this.posy = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

    }
    draw(context){
        context.beginPath();

        context.strokeStyle = this.color;

        context.textAlign= "center"
        context.textBaseline="middle"
        context.font = "20px Arial"
        context.fillText(this.text,this.posx, this.posy)
        

        context.lineWidth=4;
        context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2);
        context.stroke();
        context.closePath();
        context.fillStyle = 'Black'; // Establece el color de relleno en blanco


    }
}

let arrayCircle=[];

for (let i=0; i<10; i++){

    let randomX = Math.random()* window_width;
    let randomY = Math.random()* window_height;
    let randomR = Math.random()* Math.floor(Math.random()* 100 + 60);


    let miCirculo = new Circle (randomX,randomY, randomR,"white", i+1);

    //agrega el objeto al array
    arrayCircle.push(miCirculo);

    arrayCircle[i].draw(ctx);
    
}