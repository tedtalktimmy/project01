var quoteText = document.getElementById('quote-text');
var quoteTags = document.getElementById('quote-tags');
var quoteAuthor = document.getElementById('quote-author');
var genQuoteBtn = document.getElementById('gen-quote-btn');

function randomQuote(){
  fetch('https://www.api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    quoteText.textContent = data.content;
    quoteTags.textContent = data.tags;
    quoteAuthor.textContent = `-- ${data.author}`;
  });
  }

  randomQuote();
  genQuoteBtn.addEventListener('click', () => {
    randomQuote();
  });