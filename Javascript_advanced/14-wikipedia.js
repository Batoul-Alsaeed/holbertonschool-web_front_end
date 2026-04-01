function createElement(data) {
  let paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  req.open('GET', url, true);
  
  req.onload = function() {
    if (req.status === 200) {
      let response = JSON.parse(req.responseText);
      
      let pages = response.query.pages;
      let pageId = Object.keys(pages)[0];
      let extract = pages[pageId].extract;
      
      callback(extract);
    }
  };
  
  req.send();
}

queryWikipedia(createElement);
