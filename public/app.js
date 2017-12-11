// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
var app = function() {

 var article = function() {
  var ul = document.createElement('ul');
  ul.classList.add('.cat');
  return ul;
 }

 var nameIt = function(name) {
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
 }

 var feedIt = function(food) {
  var catFood = document.createElement('li');
  catFood.innerText = food;
  return catFood;
 }

var makeImage = function(img) {
 var catImage = document.createElement('img');
 catImage.src = img;
 return catImage;
}
 var appendCat = function(name, food) {
  var atcle = article();
  var theList = document.querySelector('#cats');
  var theName = nameIt(name);
  var theFood = feedIt(food);
  var theImage = makeImage("https://animalso.com/wp-content/uploads/2017/02/Golden-Retriever-10.jpg")

  theList.appendChild(atcle);
  atcle.appendChild(theName);
  theName.appendChild(theFood);
  theFood.appendChild(theImage);

 }
 appendCat("Jack", "Sparrow");
}

document.addEventListener('DOMContentLoaded', app);
