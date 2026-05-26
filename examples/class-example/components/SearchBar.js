export class SearchBar {
  constructor(onSearch, onFilter) {
    this.searchInput = document.getElementById('search-input');
    this.filterButtons = document.querySelectorAll('.filter-buttons button');
    this.onSearch = onSearch;
    this.onFilter = onFilter;
    this._bindEvents();
  }

  _bindEvents() {
    this.searchInput.addEventListener('input', (e) => {
      this.onSearch(e.target.value);
    });
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.onFilter(btn.dataset.category);
      });
    });
  }

  getCurrentFilter() {
    const active = this.filterButtons?.find(btn => btn.classList.contains('active'));
    return active ? active.dataset.category : 'all';
  }
}