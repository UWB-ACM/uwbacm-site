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
      if (counter === 1) {
        wait = 25;
      }
    }
    if (wait > 0) {
      wait--;
      return;
    }
    $("#changing-word").html(topWords[counter].slice(0, wordCounter));
    wordCounter++;
  }, 150);
}

function checkScroll() {
  var topHeight = $("#top-fold").height();
  var topOffset = topHeight - 30;
  var quickNav = $("#quick-nav");
  var navClass = quickNav.hasClass("scrolled");
  if (window.scrollY >= topOffset && !navClass) {
    quickNav.addClass("scrolled");
  } else if (window.scrollY < topOffset && navClass) {
    quickNav.removeClass("scrolled");
  }
}

$(document).ready(function() {
  startShowingWords();
  checkScroll();
  $(window).scroll(checkScroll);
});
