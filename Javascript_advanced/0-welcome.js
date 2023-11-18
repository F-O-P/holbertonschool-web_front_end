function welcome(firstName, lastName) { // firstName = 'John', lastName = 'Cena'
  var fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!'); // Welcome John Cena!
  }

  displayFullName();
}

welcome('John', 'Cena');  //change the name if you wish