function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  //add a paragraph to the body of the page with the text Welcome Holberton!
  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  var spookyButton = document.createElement("button");
  spookyButton.innerHTML = "Spooky";
  document.body.appendChild(spookyButton);

  var darkButton = document.createElement("button");
  darkButton.innerHTML = "Dark mode";
  document.body.appendChild(darkButton);
  
  var screamButton = document.createElement("button");
  screamButton.innerHTML = "Scream mode";
  document.body.appendChild(screamButton);
  
  screamButton.onclick = function() {
    screamMode();
  }
  spookyButton.onclick = function() {
    spooky();
  }
  darkButton.onclick = function() {
    darkMode();
  }
}

main();