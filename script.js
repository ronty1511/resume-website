AOS.init();

var i = 0;
var txt1 = `Hi I'm Saptarshi Ganguly Welcome to my website!`;
var speed = 50;
function typedtext() {
  if (i < txt1.length) {
    if(i == 23)
        document.querySelector("#welcomeText").innerHTML += txt1.charAt(i)+"<br />";
    else
        document.querySelector("#welcomeText").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typedtext, speed);
  }
}
anime({
  targets: '.mypic',
  backgroundColor: '#FFF',
  borderRadius: ['20%', '50%'],
  easing: 'easeInOutQuad'
});

