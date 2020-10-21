const baseURL = ('https://cat-fact.herokuapp.com/facts');

let random = Math.floor(Math.random() * 50);

fetch(baseURL)
    .then(response => response.json())
    .then(json => display(json))

function display(json){
    const fact1 = json.all[random].text;
    let text = document.querySelector('h1') 
    text.textContent = fact1;

    const firstName = json.all[random].user.name.first;
    const lastName = json.all[random].user.name.last;

    
    let quote = document.querySelector('p');
    quote.textContent = firstName + ' ' + lastName

    const btn = document.querySelector('a')
    
    
}











window.onload = function() {
    Particles.init({
      selector: '.background'
    
    });
  };