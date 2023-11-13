function welcomeMessage(fullName) {
  return function() {
    alert('Welcome ' + fullName);
  };
}

var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');

// test in web console by copying and pasting the above
// code into the console.
// Execute the following in the console:
// guillaume();
// alex();
// fred();
// The return should be Welcome Guillaume, Welcome Alex,
// and Welcome Fred as alerts.