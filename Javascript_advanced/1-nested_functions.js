var globalVariable = 'Welcome';

function outer() {
  alert(globalVariable); // Welcome
  
  var course = 'Holberton';

  function inner() {
    alert(globalVariable + ' ' + course); // Welcome Holberton
  
    var exclamation = '!';

    function inception() {
      alert(globalVariable + ' ' + course + exclamation); // Welcome Holberton!
    }
    inception();
  }
  inner();
}

outer();