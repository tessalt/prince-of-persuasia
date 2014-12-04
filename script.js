(function(){

  var generator = {
    tips: [
      "Trap your princess: Physically corner her in a room, and eventually, in your life.",
      "Insult your princess: insult her face, her body, her brain, her car. The lower her self-esteem, the higher your chances, bro. It's been biologically proven, by me!",
      "Brag. Not lying, but close. Make up a story about how you single-handedly murdered a wild animal. Your story is going release a hormone deep inside her body called \"insatia.\" It makes women ovulate... for sex!",
      "Dress like her dad, it releases a hormone called moanatonin.",
      "When you get into an elevator with a woman, press a higher number than her, and then make a big deal about it.",
      "Push her in a lake!",
      "Be one of the tallest guys in the bar, and then brag about how long your but crack is.",
      "Use the word \"idiot\".",
      "NEVER make her pancakes, force her to make YOU pancakes, in the middle of the night."
    ],
    getTip: function(index) {
      history.pushState(null, null, '#' + index);
      return this.tips[index];
    },
    getRandomTip: function() {
      var index = Math.floor(Math.random() * this.tips.length);
      return this.getTip(index);
    },
    getTipFromHash: function() {
      var index = parseInt(window.location.hash.substr(1));
      return this.getTip(index);
    },
    render: function(string) {
      var el = document.getElementById('tip');
      el.innerHTML = string;
    },
    addEventListeners: function() {
      var self = this;
      var el = document.getElementById('getTip');
      el.addEventListener('click', function(){
        self.render(self.getRandomTip());
      }, false);
    },
    init: function() {
      this.addEventListeners();
      if (window.location.hash) {
        this.render(this.getTipFromHash());
      } else {
        this.render(this.getRandomTip());
      }
    }
  }

  generator.init();

})();

