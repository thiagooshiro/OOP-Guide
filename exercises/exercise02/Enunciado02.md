# Exercício 02 — ProductCard

## Objetivo

Criar a classe `ProductCard`, responsável por representar visualmente um produto individual na tela.

---

# O que essa classe representa

Cada card da galeria representa apenas um produto.

O `ProductCard` será a menor unidade visual da aplicação.

Ele será usado futuramente pelo `ProductList`, que será responsável por criar vários cards automaticamente.

---

# Como a arquitetura funciona

O `PageContainer` já organiza a página em regiões específicas.

O arquivo `pages/index.js` funciona como o orquestrador da aplicação e será responsável por conectar os componentes.

Neste exercício, o `ProductCard` ainda NÃO será renderizado diretamente na página.

Ele será utilizado posteriormente pelo `ProductList`.

---

# O que a classe precisa fazer

A partir de um objeto de produto recebido no constructor:

* criar a estrutura visual do card
* exibir:

  * imagem
  * nome
  * preço
* armazenar a estrutura criada internamente
* permitir acesso ao elemento HTML do card
* permitir registrar uma função executada ao clicar no card

---

# Estrutura esperada

O card precisa possuir:

* imagem do produto
* nome do produto
* preço do produto

A forma de criar essa estrutura fica a seu critério.

---

# Classes CSS sugeridas

Use essas classes para aproveitar o visual já preparado no CSS:

| Elemento          | Classe          |
| ----------------- | --------------- |
| Card principal    | `product-card`  |
| Imagem do produto | `product-image` |
| Nome do produto   | `product-title` |
| Preço do produto  | `product-price` |

---

# Comportamento esperado

Quando um `ProductCard` for criado:

* ele deve representar apenas um produto
* deve possuir sua própria estrutura HTML
* deve ficar pronto para ser inserido futuramente pelo `ProductList`

Quando o card for clicado:

* a função registrada através de `setOnClick()` deve ser executada

---

# Estrutura inicial da classe

Use a estrutura abaixo como ponto de partida:

```js id="65r8fx"
export default class ProductCard {
  constructor(product) {
    // seu código aqui
  }

  setOnClick(callback) {
    // seu código aqui
  }

  getView() {
    // seu código aqui
  }
}
```

---

# Métodos esperados

## `setOnClick(callback)`

Responsável por registrar uma função executada quando o card for clicado.

O `ProductList` utilizará esse método futuramente para reagir ao clique dos cards.

---

## `getView()`

Responsável por retornar o elemento HTML principal do card.

Esse método será usado futuramente pelo `ProductList` para inserir o card na página.

---

# Importante

O `ProductCard` NÃO controla listas de produtos.

Ele representa apenas um item individual.

A responsabilidade de controlar vários cards será do `ProductList`.

---

# Dicas

Você provavelmente vai precisar usar:

* `createElement()`
* `innerHTML`
* `addEventListener()`
* manipulação de classes CSS

---

# Próximo exercício

No Exercício 03, você vai criar o `ProductList`, responsável por controlar e renderizar vários `ProductCard`.
