var wrapper = document.body;

var numbers = [-30, 14, 66, 21, 72, -4];

function lister(obj) {
  var that = this;
  this.nList = document.createElement("div");
  this.nList.innerHTML=obj;
  this.lEle = document.createElement("h2");
  if (obj < 0) {
    this.lEle.innerHTML = "This number is " + obj + " This number is below 0.";
  }else if (obj > 50) {
    this.lEle.innerHTML = "This number is " + obj + " This number is over 50.";
  }else if (obj === 14) {
    this.lEle.innerHTML = "This number is " + obj + " This number is fourteen.";
  }else {
    this.lEle.innerHTML = "This number is " + obj;
  }
  this.lEle.addEventListener("click", function () {
    that.changer(obj);
    this.innerHTML++;
  });
  
  wrapper.appendChild(this.lEle);
}

for (var i = 0; i < numbers.length; i++) {
  new lister(numbers[i]);
}

lister.prototype.changer = function (obj) {
  if (obj < 0) {
    this.lEle.innerHTML = "This number is " + obj++ + " This number is below 0.";
  }else if (obj > 50) {
    this.lEle.innerHTML = "This number is " + obj++ + " This number is over 50.";
  }else if (obj === 14) {
    this.lEle.innerHTML = "This number is " + obj++ + " This number is fourteen.";
  }else {
    this.lEle.innerHTML = "This number is " + obj++;
  }
};