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
    return (this.name + ": " + this.privateScore);
  }
};

var harry = Object.create(studentHogwarts);
harry.name = "Harry";
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

var draco = Object.create(studentHogwarts);
draco.name = "Draco";
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
