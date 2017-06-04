$(document).ready(function() {

  // Prepare "quotes loading" message
  $('.instructions h3').html("Loading quotes");

  var quoteHTML = '<h4 class="quote">';

  quoteHTML += 'Uno momento por favor!';
  quoteHTML += '</h4>';
  quoteHTML += '<p class="author">';
  quoteHTML += 'Jerry: Season 3, Episode 20';
  quoteHTML += '</p>';

  $('#quote-text').html(quoteHTML);

  // Create array for storing API quotes
  var quotes = [];

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      $('.quote').html('Giddyup!');
      $('.author').html('Kramer: Season 5, Episode 10');
      $('.fa-spinner').hide();

      $('.instructions h3').html("Click the Seinfeld logo for a random quote");
      var response = JSON.parse(xhr.responseText);
        quotes.push(response['quotes']);
        console.log(quotes[0].length);
    }
  };

  xhr.open('GET', 'https://seinfeld-quotes.herokuapp.com/quotes');
  xhr.send();

$('#button').click(function() {

var i = Math.floor(Math.random() * quotes[0].length) + 1;


console.log(i);
  // generate random quote
  var quote = quotes[0][i]['quote'];
  var author = quotes[0][i]['author'];
  var season = quotes[0][i]['season'];
  var episode = quotes[0][i]['episode'];

  // create quote HTML and populate with quote data
  quoteHTML = '<h4 class="quote">';

  quoteHTML += quote;
  quoteHTML += '</h4>';
  quoteHTML += '<p class="author">';
  quoteHTML += author;
  quoteHTML += ': ';
  quoteHTML += 'Season ';
  quoteHTML += season;
  quoteHTML += ', Episode ';
  quoteHTML += episode;
  quoteHTML += '</p>';

  // add quote HTML to

  $('#quote-text').html(quoteHTML);
});

});
