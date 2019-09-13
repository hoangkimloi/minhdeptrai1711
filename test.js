  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var x =   document.getElementById('button-new');
var y =   document.getElementById('body');
var k =   document.getElementById('product');
var m =   document.getElementById('menu1');



x.addEventListener('click',function (e)
{

  document.getElementById('product').style.display = 'block';

}
)
y.addEventListener('dblclick',function()
{

  document.getElementById('product').style.display = 'none';
}
)
x.addEventListener('mouseover',function ()

{
  document.getElementById('menu1').style.display = 'block';
}
)
m.addEventListener('mouseover',function ()
{
  document.getElementById('menu1').style.display = 'block';
}

)
y.addEventListener('mouseout',function ()

{
  document.getElementById('menu1').style.display = 'none';

}
)



function livingroom()
{
  var x =document.getElementById("living-room-change").innerHTML;
    var y =document.getElementById("living-room2-change").innerHTML;
    document.getElementById("living-room").innerHTML =x;
      document.getElementById("living-room2").innerHTML =y;

}


function search()
{
  var text = document.getElementById("search-input").value;
    var c = text.toLowerCase();
    var d = ["vườn" , "làm" ,"garden", "ruộng" , "fammer"];
    var test = d.some(el => c.includes(el));
if(test==true)
{
  document.getElementById('main-backgrond').style.display = 'none';
  document.getElementById('menu-tholamvuon').style.display = 'block';
  document.getElementById('end-footer').style.display = 'block';
  document.getElementById('menu-footer').style.display = 'block';


}
}
var user1= document.getElementById('user-1').innerHTML;
var user2= document.getElementById('user-2').innerHTML;
var tg = document.getElementById('user-2').innerHTML;

function login()
{   
  document.getElementById('login-content').style.display = 'block';
  document.getElementById('login-sceen').setAttribute("class", "style1");
}
function logout()
{   
  document.getElementById("user-2").innerHTML = tg;
}
  
function login2()
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == "admin" && password == "123456")
  { 
    document.getElementById('user-2').innerHTML = document.getElementById('user-1').innerHTML;
      document.getElementById('login-content').style.display = 'none';
    document.getElementById('login-sceen').setAttribute("class", "style2");

  }
  else
  {
    alert("sai username hoặc password");
    document.getElementById("username").innerHTML='';
    document.getElementById("password").innerHTML='';
  }
}



