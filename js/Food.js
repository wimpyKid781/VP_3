class Food{
constructor(){
    this.image = loadImage('images/Milk(1).png')
    this.foodStock;
    this.lastFedl
}
display(){
    var x= 80, y = 100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
if(this.foodStock!=0){
for(var i = 0; i<this.foodStock; i++){
    if(1%10==0){
        x=80;
        y=y+50;
    }
}
image(this.image,x,y,50,50);
x=x+30
}
}
bedroom(){
background(bedroomI,550,500);
}
garden(){
background(gardenI, 550, 500);
}
washroom(){
background(washroomI, 550, 500);
}
}