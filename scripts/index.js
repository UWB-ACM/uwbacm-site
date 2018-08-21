var topWords = ["UWB ACM", "visionaries", "diverse", "proactive"];

function startShowingWords() {
  var counter = 0;
  var wordCounter = 0;
  var wait = 0;
  setInterval(function() {
    if (topWords.length <= counter) {
      counter = 0;
    }
    if (topWords[counter].length < wordCounter) {
      wordCounter = 0;
      counter++;
      wait = 5;
    }
    if (wait > 0) {
      wait--;
      return;
    }
    $("#changing-word").html(topWords[counter].slice(0, wordCounter));
    wordCounter++;
  }, 150);
}

$(document).ready(function() {
  startShowingWords();
});
