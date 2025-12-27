// 1-Problem 
const app = document.getElementById('app');
const heading = document.querySelector('h1');
const navLinks = document.querySelectorAll('.nav-link');
const activeLink = document.querySelector('.nav-link.active');
const cards = document.querySelectorAll('.card');
const secondCard = document.querySelector('.card[data-id="2"]');
const cardParagraphs = document.querySelectorAll('.card p');

/// 2-Create & Append Elements
function createProductCard(product) {
  const div = document.createElement('div');
  div.className = 'product-card';

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const h3 = document.createElement('h3');
  h3.textContent = product.name;

  const p = document.createElement('p');
  p.className = 'price';
  p.textContent = `$${product.price}`;

  const btn = document.createElement('button');
  btn.textContent = 'Add to Cart';

  div.append(img, h3, p, btn);
  return div;
}

const product = { name: 'Laptop', price: 999.99, image: 'product.image.jpg' };
document.body.appendChild(createProductCard(product));


/// 3-Modify Elements

function changeText(el, text) {
  el.textContent = text;
}

function addClass(el, className) {
  el.classList.add(className);
}

function toggleClass(el, className) {
  el.classList.toggle(className);
}

function setStyles(el, styles) {
  Object.assign(el.style, styles);
}

function setDataAttribute(el, key, value) {
  el.dataset[key] = value;
}

//// -4  Remove and Replace
function removeSecondItem() {
  document.querySelectorAll('#list li')[1].remove();
}

function replaceFirstItem() {
  const li = document.createElement('li');
  li.textContent = 'New Item 1';
  document.getElementById('list').replaceChild(li, document.querySelector('#list li'));
}

function insertBeforeLast(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.insertBefore(li, list.lastElementChild);
}

function clearList() {
  document.getElementById('list').innerHTML = '';
}

// 5 Button Events

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('Button clicked!');
  btn.textContent = 'Clicked!';
});

btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'lightblue';
});

btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = '';
});







//6 Form Event
document.getElementById('search-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('search-input');
  console.log(input.value);
  input.value = '';
});







// 7 Event Delegation
document.getElementById('todo-list').addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});








//8 Keyboard Events

document.addEventListener('keydown', e => {
  console.log(e.key);

  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('show');
  }
});




//9 Counter
let count = 0;
const countEl = document.getElementById('count');
const dec = document.getElementById('decrement');
const inc = document.getElementById('increment');

inc.onclick = () => {
  count++;
  countEl.textContent = count;
  dec.disabled = false;
};

dec.onclick = () => {
  if (count > 0) count--;
  countEl.textContent = count;
  if (count === 0) dec.disabled = true;
};






//10 Toggle Visibility
const btn = document.getElementById('toggle-btn');
const details = document.getElementById('details');

btn.onclick = () => {
  details.classList.toggle('hidden');
  btn.textContent = details.classList.contains('hidden')
    ? 'Show Details'
    : 'Hide Details';
};





// 11 Form Validation
document.getElementById('signup-form').addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const u = document.getElementById('username');
  const e1 = document.getElementById('email');

  if (u.value.length < 3) {
    valid = false;
    document.getElementById('username-error').textContent = 'Too short';
  }

  if (!e1.value.includes('@')) {
    valid = false;
    document.getElementById('email-error').textContent = 'Invalid email';
  }

  if (valid) console.log(u.value, e1.value);
});
