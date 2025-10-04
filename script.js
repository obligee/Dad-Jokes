const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function generateJoke() {
   const config = {
     headers: {
       Accept: 'application/json',
     },
   };

   await fetch('https://icanhazdadjoke.com', config)
     .then((res) => res.json())
     .then((data) => {
       jokeEl.textContent = data.joke;
     });
 }

generateJoke();

// Button event listener
jokeBtn.addEventListener('click', generateJoke);