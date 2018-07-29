const app = document.getElementById('root');

const logo = document.createElement('h1');
logo.textContent = 'All movies with title X-MEN from an API';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'http://www.omdbapi.com/?apikey=7a5af064&s=x-men', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log("data is " + data)

  if (request.status >= 200 && request.status < 400) {
    data.Search.forEach(movie => {
      console.log("hello!")
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.Title;

      const p = document.createElement('p');
      p.textContent = movie.Year;

      const img = document.createElement('img');
      img.src = movie.Poster;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(img);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
