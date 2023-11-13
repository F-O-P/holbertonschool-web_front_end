function createClassroom(numberOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }
  var students = [];
  while (students.length < numberOfStudents) {
    students.push(studentSeat(students.length + 1)); //calls the function studentSeat
  }
  return students;
};

var classRoom = createClassroom(10);