# Exercício 04 — ProductModal

## O que já existe

Os cards estão na tela e o `setOnCardClick` já está configurado no `index.js` para chamar `modal.open(product)` quando um card é clicado — mas `modal` ainda é `null` porque a classe não existe.

## O que você vai construir

Crie o arquivo `exercise04/ProductModal.js` e implemente a classe `ProductModal` do zero.

Quando você descomentar o bloco do exercício 04 no `index.js`, ele vai usar sua classe assim:

```js
modal = new ProductModal();
```

Só isso. O `index.js` não passa nada para o construtor e não configura nada — a classe cuida de tudo internamente.

## O que implementar

### Construtor

O modal precisa existir no DOM desde o início, mesmo que invisível. Crie o elemento no construtor e insira na página:

```js
document.body.appendChild(this.modal);
```

Inicialize também o estado de visibilidade:

```js
this.isOpen = false;
```

### `open(product)`

Recebe um objeto `product` e exibe o modal com os dados desse produto.

Esse método precisa:

1. Preencher o conteúdo do modal com os dados do produto
2. Tornar o modal visível

O objeto `product` tem: `name`, `price`, `image`, `category`.

### `close()`

Esconde o modal e limpa o conteúdo.

O `index.js` não chama `close()` — quem dispara o fechamento é o próprio modal, através de um botão ou clique no overlay. Implemente esse comportamento internamente no construtor.

## Estrutura do modal

O HTML fica a seu critério, mas o modal precisa ter no mínimo:

- Um overlay que cobre a página
- Uma área de conteúdo onde os dados do produto aparecem
- Uma forma de fechar — botão, clique no overlay, ou ambos

## Ativando no index.js

Quando sua implementação estiver pronta, descomente no `index.js`:

1. A importação do `ProductModal`
2. O bloco `try/catch` do exercício 04

Clique em um card — o modal deve abrir com os dados do produto.

---

Ficou com dúvida sobre como manipular o DOM dentro de uma classe? → [dom-in-classes.md](../dom-in-classes.md)