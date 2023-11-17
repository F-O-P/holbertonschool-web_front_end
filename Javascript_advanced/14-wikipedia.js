//add to browser console or input in html file
//<script src="14-wikipedia.js"></script>

function createElement(data) {
  var p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {

  xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

  xhttp.responseType = 'json';

  xhttp.send();

  xhttp.onload = function() {
    if (xhttp.status == 200) {
      callback(xhttp.response.query.pages[21721040].extract);
    }
  };
}

queryWikipedia(createElement);