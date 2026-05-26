# Exercício 06 — HighlightedCard

## Objetivo

Criar a classe `HighlightedCard`, responsável por exibir um produto em destaque na página.

---

# O que já existe

A aplicação já possui:

* cards de produto
* lista de produtos
* modal
* busca e filtros

Agora você vai criar um componente visual especial para destacar um produto específico do catálogo.

---

# Como a arquitetura funciona

O `PageContainer` já divide a página em regiões específicas.

Uma dessas regiões é destinada ao produto destacado.

No `pages/index.js`, essa região será obtida através do container e usada para renderizar o `HighlightedCard`.

---

# O que você vai construir

Crie o arquivo `exercise06/HighlightedCard.js` com a classe `HighlightedCard`.

Essa classe deve **estender** `ProductCard`.

```js id="d7s5n0"
class HighlightedCard extends ProductCard {
  // ...
}
```

---

# O que herança significa nesse exercício

O `HighlightedCard` é uma variação visual do `ProductCard`.

Isso significa que:

* ele continua representando um único produto
* continua reutilizando os dados recebidos
* continua podendo responder ao clique
* mas possui uma estrutura visual diferente

Ao estender `ProductCard`, sua classe já herda:

* dados do produto
* comportamento de clique
* métodos da classe base

Você só precisa adaptar o visual do componente.

---

# O que a classe precisa fazer

O `HighlightedCard` deve:

* representar um único produto
* possuir visual diferente do card comum
* ocupar uma área de destaque da página
* permitir clique no card
* reutilizar o comportamento herdado do `ProductCard`

---

# Método esperado

## `getView()`

Sobrescreva o método `getView()` para retornar a estrutura visual do card destacado.

Diferente do `ProductCard`, o `HighlightedCard` deve possuir:

* layout maior
* imagem mais destacada
* área textual separada
* badge visual de destaque

A forma de montar essa estrutura fica a seu critério.

---

# Estrutura mínima esperada

O componente precisa possuir:

* imagem do produto
* nome
* preço
* categoria
* badge indicando destaque

---

# Classes CSS sugeridas

Use essas classes para aproveitar o visual já preparado no CSS:

| Elemento          | Classe                  |
| ----------------- | ----------------------- |
| Container do card | `highlighted-card`      |
| Área de texto     | `highlighted-card-body` |
| Badge de destaque | `highlighted-badge`     |
| Título            | `product-title`         |
| Preço             | `product-price`         |
| Imagem            | `product-image`         |

---

# Comportamento esperado

Quando o card for clicado:

* o comportamento herdado do `ProductCard` deve continuar funcionando

O componente deve continuar se comportando como um card de produto, mas com visual diferenciado.

---

# Importante

O objetivo deste exercício NÃO é recriar toda a lógica do `ProductCard`.

A ideia principal é reutilizar comportamento através de herança.

O `HighlightedCard` deve aproveitar o que já existe na classe base e modificar apenas o necessário para criar uma versão destacada do componente.

---

# Dicas

Você provavelmente vai precisar usar:

* `extends`
* `super()`
* sobrescrita de métodos
* `createElement()`
* manipulação de classes CSS

---

# Ativando no `index.js`

Quando sua implementação estiver pronta:

1. Descomente a importação do `HighlightedCard`
2. Descomente o bloco do exercício 06

Depois disso:

* o card destacado deve aparecer acima da grid
* o produto destacado deve responder ao clique normalmente

---

# Material de apoio

Se ficou com dúvida sobre herança em classes JavaScript, consulte a documentação da MDN:

[MDN — Classes e Herança em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes?utm_source=chatgpt.com)
