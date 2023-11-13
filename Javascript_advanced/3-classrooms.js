function createClassroom(numberOfStudents) {
  function studentSeat(seat) {
    //returns a function that returns the seat number
    return function() {
      return seat;
    };
  }
  var students = [];
  while (students.length < numberOfStudents) {
    students.push(studentSeat(students.length + 1));
  }
  return students;
};

var classRoom = createClassroom(10);