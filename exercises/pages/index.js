import PageContainer from '../exercise01/PageContainer.js';

// === Exercício 02: Após completar o ProductCard, descomente a linha abaixo ===
// import ProductCard from '../exercise02/ProductCard.js';

// === Exercício 03: Após completar o ProductList, descomente a linha abaixo ===
// import ProductList from '../exercise03/ProductList.js';

// === Exercício 04: Após completar o ProductModal, descomente a linha abaixo ===
// import ProductModal from '../exercise04/ProductModal.js';

// === Exercício 05: Após completar o SearchBar, descomente a linha abaixo ===
// import SearchBar from '../exercise05/SearchBar.js';

// === Exercício 06: Após completar o HighlightedCard, descomente a linha abaixo ===
// import HighlightedCard from '../exercise06/HighlightedCard.js';


// Mock data
const mockProducts = [
  {
    id: 1,
    name: "Camiseta",
    price: "R$ 49,90",
    image: "https://picsum.photos/200/150?random=1",
    category: "roupa"
  },
  {
    id: 2,
    name: "Caneca",
    price: "R$ 29,90",
    image: "https://picsum.photos/200/150?random=2",
    category: "casa"
  },
  {
    id: 3,
    name: "Boné",
    price: "R$ 39,90",
    image: "https://picsum.photos/200/150?random=3",
    category: "acessório"
  },
  {
    id: 4,
    name: "Caderno",
    price: "R$ 19,90",
    image: "https://picsum.photos/200/150?random=4",
    category: "papelaria"
  }
];


// Estado da aplicação
let productList = null;
let modal = null;
let searchBar = null;


// Inicializar estrutura da página
const container = new PageContainer();


// Regiões da página
const searchArea = container.getSearchArea();
const highlightedArea = container.getHighlightedArea();
const productsArea = container.getProductsArea();


// === Exercício 03: ProductList ===
// Descomente o bloco abaixo após criar as classes ProductCard e ProductList

/*
try {
  productList = new ProductList(productsArea);

  productList.setProducts(mockProducts);

  productList.setOnCardClick((product) => {
    if (modal) {
      modal.open(product);
    } else {
      console.warn('Modal não implementado ainda. Exercício 04 pendente.');
    }
  });

  productList.render();

  console.log('✓ ProductList carregado');

} catch (error) {

  console.warn('✗ ProductList com erro', error);

}
*/


// === Exercício 04: ProductModal ===
// Descomente o bloco abaixo após criar a classe ProductModal

/*
try {

  modal = new ProductModal();

  console.log('✓ ProductModal carregado');

} catch (error) {

  console.warn('✗ ProductModal com erro', error);

}
*/


// === Exercício 05: SearchBar ===
// Descomente o bloco abaixo após criar a classe SearchBar

/*
try {

  searchBar = new SearchBar(searchArea, {

    onSearch: (term) => {

      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

      if (productList) {
        productList.setProducts(filtered);
        productList.render();
      }

    },

    onFilter: (category) => {

      const filtered = category === 'todos'
        ? [...mockProducts]
        : mockProducts.filter(product => product.category === category);

      if (productList) {
        productList.setProducts(filtered);
        productList.render();
      }

    }

  });

  console.log('✓ SearchBar carregado');

} catch (error) {

  console.warn('✗ SearchBar com erro', error);

}
*/


// === Exercício 06: HighlightedCard ===
// Descomente o bloco abaixo após criar a classe HighlightedCard

/*
try {

  const highlighted = new HighlightedCard(
    mockProducts[0],
    (product) => {
      if (modal) {
        modal.open(product);
      }
    }
  );

  highlightedArea.append(highlighted.getView());

  console.log('✓ HighlightedCard carregado');

} catch (error) {

  console.warn('✗ HighlightedCard com erro', error);

}
*/