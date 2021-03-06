// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    const articlesArr = Object.values(response.data.articles)
    articlesArr.forEach(el => {
      el.forEach(item => {
        const article = cardMaker(item)
        document.querySelector('.cards-container').appendChild(article)
      })
    })
  })
  .catch(err => {
    console.log(err)
  })

function cardMaker(data) {
  const card = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  // const articlesArr = Object.values(articleObj.articles);
  // articlesArr.forEach(topic => {
  //   topic.forEach(key => {

  //   })
  // })

  headLine.textContent = data.headline
  img.src = data.authorPhoto
  authorName.textContent = `By ${data.authorName}`

  card.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container')

  card.appendChild(headLine)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authorName)

  const cardcontainer = document.querySelector('.cards-container')
  cardcontainer.appendChild(card)

  card.addEventListener('click', (e) => {
    console.log(headLine.innerText)
    event.stopImmediatePropagation
  })

  return card
}



