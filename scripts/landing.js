var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");

img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

$(function(){
  $("#nav-list a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });
});

var waypoint = new Waypoint({
  element: $('#portfolio'),
  handler: function(direction) {
    if (direction == "up") {
      $('.navs').css("color", "black");
      $('#nav-portfolio').css("color", "rgb(68,132,206)");
    }
  },
  offset: '-100%'
})

var waypoint = new Waypoint({
  element: $('#portfolio'),
  handler: function(direction) {
    if (direction == "down") {
      $('.navs').css("color", "black");
      $('#nav-portfolio').css("color", "rgb(68,132,206)");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: $('#about-me'),
  handler: function(direction) {
    if (direction == "up") {
      $('.navs').css("color", "black");
      $('#nav-about-me').css("color", "rgb(68,132,206)");
    }
  },
  offset: '-100%'
})

var waypoint = new Waypoint({
  element: $('#about-me'),
  handler: function(direction) {
    if (direction == "down") {
      $('.navs').css("color", "black");
      $('#nav-about-me').css("color", "rgb(68,132,206)");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: $('#resume'),
  handler: function(direction) {
    if (direction == "up") {
      $('.navs').css("color", "black");
      $('#nav-resume').css("color", "rgb(68,132,206)");
    }
  },
  offset: '-100%'
})

var waypoint = new Waypoint({
  element: $('#resume'),
  handler: function(direction) {
    if (direction == "down") {
      $('.navs').css("color", "black");
      $('#nav-resume').css("color", "rgb(68,132,206)");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: $('#contact'),
  handler: function(direction) {
    if (direction == "up") {
      $('.navs').css("color", "black");
      $('#nav-contact').css("color", "rgb(68,132,206)");
    }
  },
  offset: '-30%'
})

var waypoint = new Waypoint({
  element: $('#contact'),
  handler: function(direction) {
    if (direction == "down") {
      $('.navs').css("color", "black")
      $('#nav-contact').css("color", "rgb(68,132,206)");
    }
  },
  offset: '30%'
})
