# Exercício 03 — ProductList

## O que já existe

O `ProductCard` está pronto. Agora precisamos de algo que pegue a lista de produtos e os renderize na página usando esses cards.

## O que você vai construir

Crie o arquivo `exercise03/ProductList.js`. Quando você descomentar o bloco do exercício 03 no `index.js`, ele vai usar sua classe assim:

```js
productList = new ProductList(contentArea);
productList.setProducts(mockProducts);
productList.render();

productList.setOnCardClick((product) => {
  if (modal) {
    modal.open(product);
  } else {
    console.warn('Modal não implementado ainda. Exercício 04 pendente.');
  }
});
```

## O que implementar

### Construtor

Recebe `containerElement` e guarda em `this.container`.

Inicialize também:

```js
this.products = [];
this.onCardClick = null;
```

### `setProducts(products)`

Guarda o array em `this.products`.

### `setOnCardClick(callback)`

Guarda a função em `this.onCardClick`.

### `render()`

1. Limpa o container: `this.container.innerHTML = ''`
2. Cria uma `div.products-grid` para receber os cards
3. Para cada produto em `this.products`, cria um `ProductCard` e insere na grid:

```js
const grid = document.createElement('div');
grid.className = 'products-grid';

this.products.forEach(product => {
  const card = new ProductCard(product, () => this.onCardClick(product));
  grid.appendChild(card.getView());
});

this.container.appendChild(grid);
```

## Classes CSS sugeridas

Use essas classes e o visual já aparece pronto:

| Elemento | Classe |
|---|---|
| Container da grid | `products-grid` |

Os cards já usam as classes do `ProductCard` automaticamente.

## Ativando no index.js

Quando sua implementação estiver pronta, descomente no `index.js`:

1. A importação do `ProductCard`
2. A importação do `ProductList`
3. O bloco `try/catch` do exercício 03

Os 4 cards devem aparecer na tela.

---

Ficou com dúvida sobre manipulação de DOM dentro de classes? → [dom-in-classes.md](../dom-in-classes.md)