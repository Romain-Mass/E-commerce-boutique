async function getProducts() {
  try {
    const reponse = await fetch('https://fakestoreapi.com/products');
    if (!reponse.ok) throw new Error(`Erreur HTTP : ${reponse.status}`);

    const donnees = await reponse.json();
    return donnees;
  } catch (erreur) {
    console.error('Échec de la requête :', erreur);
    return [];
  }
}

function createCards(products) {
  const isole = document.querySelector('#list-shopping');

  for (let i = 0; i < products.length; i++) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const category = document.createElement('p');
    const description = document.createElement('p');
    const price = document.createElement('h3');
    const btnAdd = document.createElement('button');

    card.classList.add('card');
    btnAdd.classList.add('cart');

    img.setAttribute('src', products[i].image);
    name.textContent = products[i].title;
    category.textContent = products[i].category;
    description.textContent = products[i].description;
    price.textContent = products[i].price + ' €';
    btnAdd.textContent = 'Ajouter au panier';

    card.append(img, name, category, description, price, btnAdd);
    isole.appendChild(card);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  createCards(products);

  const menuButton = document.querySelector('#menuButton');
  const mainMenu = document.querySelector('#mainMenu');

  function setMenuOpen(isOpen) {
    menuButton.classList.toggle('is-open', isOpen);
    mainMenu.classList.toggle('is-open', isOpen);

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  mainMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
});
