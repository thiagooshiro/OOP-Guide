export default class PageContainer {
  constructor() {
    this.root = document.getElementById('root');
    this.searchArea = null;
    this.highlightedArea = null;
    this.productsArea = null;
    this.build();
  }

  build() {
    this.root.innerHTML = `
      <div class="page-container">
        <header class="header">
          <h1 class="title">Galeria de Produtos</h1>
          <div class="search-area" id="search-area"></div>
        </header>
        <main class="main-content">
          <div class="highlighted-area" id="highlighted-area"></div>
          <div class="products-area" id="products-area"></div>
        </main>
        <footer class="footer">
          <p>© 2025 - Galeria de Produtos</p>
        </footer>
      </div>
    `;

    this.searchArea = document.getElementById('search-area');
    this.highlightedArea = document.getElementById('highlighted-area');
    this.productsArea = document.getElementById('products-area');
  }

  getSearchArea() {
    return this.searchArea;
  }

  getHighlightedArea() {
    return this.highlightedArea;
  }

  getProductsArea() {
    return this.productsArea;
  }
}