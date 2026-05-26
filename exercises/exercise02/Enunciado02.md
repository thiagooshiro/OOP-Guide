# Exercício 02 — ProductCard

## O que já existe

O `PageContainer` está pronto e expõe a área de conteúdo via `getContentArea()`. A página tem estrutura, mas ainda não exibe nada.

## O que você vai construir

Crie o arquivo `exercise02/ProductCard.js` com a classe `ProductCard` — a menor unidade da página. Ela representa um produto individual e sabe como se transformar em um elemento DOM.

O `ProductList` (exercício 03) vai usar sua classe assim:

```js
const card = new ProductCard(product, () => modal.open(product));
contentArea.appendChild(card.getView());
```

Esse trecho descreve a interface completa que sua classe precisa ter.

## O que implementar

### Construtor

Recebe `product` e `onClickHandler` e guarda os dois em `this`.

`product` é um objeto com: `name`, `price`, `image`, `category`.

`onClickHandler` é uma função que será chamada quando o card for clicado. O `ProductCard` não sabe o que ela faz — só chama quando precisa.

### `getView()`

Cria e retorna um elemento DOM representando o card.

**Estrutura mínima:**

```html
<div class="product-card">
  <img class="product-image" src="..." alt="...">
  <h3 class="product-title">...</h3>
  <p class="product-price">...</p>
</div>
```

Use `this.product` para preencher os dados e `this.onClickHandler` no evento de clique.

> **Erro comum:** usar `product` ou `onClickHandler` diretamente dentro de `getView()`. Essas variáveis não existem lá — o que existe é `this.product` e `this.onClickHandler`.

## Ativando no index.js

O `ProductCard` não tem bloco próprio no `index.js` — ele é uma dependência do `ProductList`. Você vai ver ele em ação quando descomentar o exercício 03.

---

Ficou com dúvida sobre `constructor` e `this`? → [constructor.md](../constructor.md)