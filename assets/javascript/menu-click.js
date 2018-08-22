var classname = document.getElementsByClassName("nav-item");

console.log("We're loaded");

var myFunction = function() {
  var menuIcon = document.getElementById("menuIcon");
  menuIcon.checked = false;
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}