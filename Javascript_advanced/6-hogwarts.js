 var studentHogwarts = {
  privateScore: 0,
  name: null,

  changeScoreBy: function(points) {
    this.privateScore += points;
  },

  setName: function(newName) {
    this.name = newName;
  },

  rewardStudent: function() {
    this.changeScoreBy(1);
  },

  penalizeStudent: function() {
    this.changeScoreBy(-1);
  },

  getScore: function() {
    console.log(this.name + ": " + this.privateScore);
  }
};

var harry = Object.create(studentHogwarts);
harry.name = "Harry";
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();

var draco = Object.create(studentHogwarts);
draco.name = "Draco";
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();
