$(document).ready(function() {

  $('#button').click(function(){

    // Set JSON API properties

      var seinfeldAPI = "https://seinfeld-quotes.herokuapp.com/quotes";
      var seinfeldOptions = "GET";

     // create function for displaying quotes at click of a button

      function displayQuotes(data) {

        // Find length of returned array and generate a random number less than or equal to the array length

        var length = Object.keys(data.quotes).length;
        var quoteID = Math.floor(Math.random(length + 1) * 100);

        // generate random quote

        var quote = data.quotes[quoteID].quote;
        var author = data.quotes[quoteID].author;
        var season = data.quotes[quoteID].season;
        var episode = data.quotes[quoteID].episode;

        // create quote HTML and populate with quote data

        var quoteHTML = '<h4 class="quote">';

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
      };

  // Send JSON get request

  $.getJSON(seinfeldAPI, seinfeldOptions, displayQuotes);

    });

});
