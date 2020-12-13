//Create variables here
var dog, happyDog, database, foodS, foodStock;
var changingGameState, readingGameState;
var bedroomI, washroomI, gardenI, milkI;
var milk1, milk2, milk3, milk4, milk5, milk6, milk7, milk8, milk9, milk10, milk11, milk12, milk13, milk14, milk15, milk16, milk17, milk18, milk19, milk20;
function preload()
{
  //load images here
  bedroomI =  loadImage('images/virtual pet images/bedroom.png');
  gardenI = loadImage('images/virtual pet images/Garden.png');
  washroomI = loadImage('images/virtual pet images/washroom.png');
  happyDogI = loadImage('images/dogImg.png');
  hungryDogI = loadImage('images/dogImg1.png');
  milkI = loadImage('images/virtual pet images/milk.png')
}

function setup() {
	createCanvas(550, 550);
  Dog = createSprite(250,250,50,50);
  feed = createButton('Feed the Dog');
  feed.position(700,95);
  //feed.mousePressed(feedDog);

  addFood = createButton('Add Food');
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  //Dog.addImage(hungryDogI);
  Dog.scale = (0.2)
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)

  readState = database.ref('gameState');
  readState.on('value', function(data){
    gameState = data.val();
  })
milk1 = createSprite(10,50,5,5);
milk1.addImage(milkI);
milk1.scale = (0.1);
milk2 = createSprite(20,50,5,5);
milk2.addImage(milkI);
milk2.scale = (0.1);
milk3 = createSprite(30,50,5,5);
milk3.addImage(milkI);
milk3.scale = (0.1);
milk4 = createSprite(40,50,5,5);
milk4.addImage(milkI);
milk4.scale = (0.1);
milk5 = createSprite(50,50,5,5);
milk5.addImage(milkI);
milk5.scale = (0.1);
milk6 = createSprite(60,50,5,5);
milk6.addImage(milkI);
milk6.scale = (0.1);
milk7 = createSprite(70,50,5,5);
milk7.addImage(milkI);
milk7.scale = (0.1);
milk8 = createSprite(80,50,5,5);
milk8.addImage(milkI);
milk8.scale = (0.1);
milk9 = createSprite(90,50,5,5);
milk9.addImage(milkI);
milk9.scale = (0.1);
milk10 = createSprite(100,50,5,5);
milk10.addImage(milkI);
milk10.scale = (0.1);
milk11 = createSprite(110,50,5,5);
milk11.addImage(milkI);
milk11.scale = (0.1);
milk12 = createSprite(120,50,5,5);
milk12.addImage(milkI);
milk12.scale = (0.1);
milk13 = createSprite(130,50,5,5);
milk13.addImage(milkI);
milk13.scale = (0.1);
milk14 = createSprite(140,50,5,5);
milk14.addImage(milkI);
milk14.scale = (0.1);
milk15 = createSprite(150,50,5,5);
milk15.addImage(milkI);
milk15.scale = (0.1);
milk16 = createSprite(160,50,5,5);
milk16.addImage(milkI);
milk16.scale = (0.1);
milk17 = createSprite(170,50,5,5);
milk17.addImage(milkI);
milk17.scale = (0.1);
milk18 = createSprite(180,50,5,5);
milk18.addImage(milkI);
milk18.scale = (0.1);
milk19 = createSprite(190,50,5,5);
milk19.addImage(milkI);
milk19.scale = (0.1);
milk20 = createSprite(200,50,5,5);
milk20.addImage(milkI);
milk20.scale = (0.1);
}


function draw() {  
background(46,139,87)
if(feed.mousePressed()){
milk20.visible = false;
}
if(addFood.mousePressed()){
  milk20.visible = true;
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
    Dog.addImage(happyDogI);
  Dog.scale = (0.2)
}
/*if(gameState!='hungry'){
  feed.hide();
  addFood.hide();
  deg.remove();
}*/
else{
  feed.show();
  addFood.show();
  //dog.addImage(hungryDogI); 
}
if(frameCount>=1&&frameCount<=150){
  update('Playing');
  //Food.garden();
}
else if(frameCount>=151&&frameCount<=300){
  update('Sleeping');
  //Food.bedroom();
}
else if(frameCount>=301&&frameCount<=450){
  update('Bathing');
  //ood.washroom();
}
 fill(255,255,254);
 textSize(15);
 /*if(lastFed>=12){
   text("Last Fed : "+lastFed%12+"PM",350,30);
 }
else if(lastFed ==0){
  text('LastFed : 12 AM', 350,30)
}
else{
  text('Last Fed: '+lastFed+"AM",350,30);
}
*/
 drawSprites();
  text('Note: Press the button to feed the dog some milk!', 50, 100)
  //add styles here

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}
function feedDog(){
  foodS = foodS-1
  //Dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food1:foodObj.getFoodStock(),
    FeedTime:hour(),
    Food:foodS

  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })  
}
function update(state){
database.ref('/').update({
  gameState:state
});
}