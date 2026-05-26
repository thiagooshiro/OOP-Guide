export default class PageContainer {
  constructor() {
    this.root = document.getElementById('root');
    this.mainContent = null;
    this.build();
  }

  build() {
    this.root.innerHTML = `
      <div class="page-container">
        <header class="header">
          <h1 class="title">Galeria de Produtos</h1>
        </header>
        <main class="main-content" id="main-content"></main>
        <footer class="footer">
          <p>© 2025 - Galeria de Produtos</p>
        </footer>
      </div>
    `;
    this.mainContent = document.getElementById('main-content');
  }

  getContentArea() {
    return this.mainContent;
  }
}