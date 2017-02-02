//var xhr = new XMLHttpRequest();
//
//xhr.onreadystatechange = function() {
//  if(xhr.readystate === 4) {
//    console.log("Yeah baby");
//  }
//};
//
//xhr.open('GET', 'https://api.chucknorris.io/');
//xhr.send();
//
//console.log(xhr.readyState);

$.getJSON("https://api.chucknorris.io/", function(json) {
  $("#quote").html(JSON.stringify(json));
});

var putDowns = [
  "Spastic",
  "Retard",
  "That's pathetic",
  "You're going to have to try harder than that",
  "You look so fucking dumb",
  "Is that all you've got?",
  "You suck at this",
  "You're the suckiest suck that ever sucked",
  "You should hang your head in shame",
  "You need to have a good, long look at yourself",
  "There are blind, quadruple amputees who are better at this than you"
  
];


$(function(){
    $("button").on({
        click:function(){
        
          $insult = Math.floor(Math.random() * putDowns.length + 1);
          
          $('#quote').html(putDowns[$insult]);
          
        }
    });
});