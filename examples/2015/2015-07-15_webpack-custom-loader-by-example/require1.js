module.exports = {
	do: function(hello) {
    console.log("ddddddd");
    this.doAgainAgain();
    this.doNotAgainAgain();
	},
  doAgain: function() {
    console.log("none it");
  },
  doAgainAgain: function() {
    console.log("titi");
  },
  doNotAgainAgain: function() {
    console.log("tudddddtdddu");
  }

};
