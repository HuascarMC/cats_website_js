// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
var app = function() {

 var article = function() {
  var ul = document.createElement('ul');
  ul.classList.add('.cat');
  return ul;
 }

 var nameIt = function(name) {
  var catName = document.createElement('li');
  return catName;
 }

 var feedIt = function(food) {
  var catFood = document.createElement('li');
  return catFood;
 }

 var appendCat = function(name, favoriteFood) {
  var atcle = article();
  var theList = document.querySelector('#cats');
  var theName = nameIt(name);
  var theFood = feedIt(favoriteFood);

  theList.appendChild(theName);



 }
 appendCat("Jack", "Sparrow");
}

document.addEventListener('DOMContentLoaded', app);
