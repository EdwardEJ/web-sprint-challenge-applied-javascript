// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header() {

  const divHeader = document.createElement('div')
  const date = document.createElement('span')
  const headerOne = document.createElement('h1')
  const temp = document.createElement('span')

  date.textContent = 'March 28, 2020';
  headerOne.textContent = 'Lambda Times';
  temp.textContent = '98°';

  divHeader.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp')

  divHeader.appendChild(date)
  divHeader.appendChild(headerOne)
  divHeader.appendChild(temp)

  const headerContainer = document.querySelector('.header-container')
  headerContainer.appendChild(divHeader)

  return divHeader

}
Header()
