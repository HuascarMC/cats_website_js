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
 var appendCat = function(name, food, image) {
  var atcle = article();
  var theList = document.querySelector('#cats');
  var theName = nameIt(name);
  var theFood = feedIt(food);
  var theImage = makeImage(image)

  theList.appendChild(atcle);
  atcle.appendChild(theName);
  theName.appendChild(theFood);
  theFood.appendChild(theImage);

 }

 appendCat("Jack", "Sparrow", "https://animalso.com/wp-content/uploads/2017/02/Golden-Retriever-10.jpg");
 appendCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg")
 appendCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg")
 appendCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")
}

document.addEventListener('DOMContentLoaded', app);
