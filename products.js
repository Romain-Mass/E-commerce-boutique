document.addEventListener('DOMContentLoaded', () => {
  async function getProducts() {
    try {
      const reponse = await fetch('https://fakestoreapi.com/products');
      if (!reponse.ok) throw new Error(`Erreur HTTP : ${reponse.status}`);

      const donnees = await reponse.json();
    } catch (erreur) {
      console.error('Échec de la requête :', erreur);
    }
  }

  function createCards(image) {}
});

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
