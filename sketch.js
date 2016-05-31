// Finds minimum number of squares that can fit in a given rectangle
//Input is a text file consisting of width and height of a rectangle
//Output is a text file cosisting of square size, number of x's in width and number of x's in height
var rectW=0;
var rectH=0;
var inputW;
var inputH;
var nx=0; 
var x=0;
var ny=0;
function  setup()
{createCanvas(windowWidth,windowHeight);
inputW = createInput();
inputW.position(width/2, height*2/10);
inputH = createInput();
inputH.position(width/2, height*4/10);

//calculateButton.mousePressed(calculate(inputW.value(),inputH.value()));
}


function draw()
{background(255);
fill(color(255,0,0));
textAlign(CENTER,CENTER);
textSize(width/50);
text("What is the minimum number\n of squares needed to fill up a rectangle?",width/2,height/10);
textAlign(LEFT,CENTER);
text("Rectangle Width: "+inputW.value(),width/5,height*2.2/10);
text("Rectangle Height: "+inputH.value(),width/5,height*4.2/10);
text("Results \nNumber of Squares Wide: "+nx+"\nNumber of Squares Tall: "+ny+"\nSquare Side Size: "+x,width/5,height*7/10);
calculate(inputW.value(),inputH.value());

}




function calculate(tw,th)
{var w=float(tw);
var h=float(th);
if(w>0 && h>0)
  {
  var even=false;
  nx=1; 
  x=0;
  ny=0;

  while(!even)
    {
    x=w/nx;
    ny=h/x;
    if(ny==int(ny)){even=true;}
    else{nx++;}
    }
  }
println("Square Size= " +x);
println("nx= " +int(nx));
println("ny= " +int(ny));

}
