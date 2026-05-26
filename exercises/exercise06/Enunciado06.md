# Exercício 06 — HighlightedCard

## O que já existe

A página está completa — cards, modal, busca e filtro funcionando.

## O que você vai construir

Crie o arquivo `exercise06/HighlightedCard.js` com a classe `HighlightedCard`, que **estende** `ProductCard`.

A ideia é simples: um `HighlightedCard` é um `ProductCard` com visual diferenciado — ocupa largura total, imagem maior, badge "Destaque" e zoom mais pronunciado no hover.

```js
class HighlightedCard extends ProductCard {
  // ...
}
```

## O que isso significa na prática

`HighlightedCard` herda tudo que `ProductCard` já tem — o construtor, os dados do produto, o callback de clique. Você só precisa sobrescrever o `getView()` para retornar um elemento com visual diferente.

## O que implementar

### `getView()`

Sobrescreva o método `getView()` para retornar o card destacado. O restante da classe você herda de graça.

A estrutura do elemento muda — em vez de um card simples, o `HighlightedCard` tem layout em duas colunas: imagem de um lado, informações do outro.

## Classes CSS sugeridas

Use essas classes e o visual já aparece pronto:

| Elemento | Classe |
|---|---|
| Container do card | `highlighted-card` |
| Área de texto | `highlighted-card-body` |
| Badge de destaque | `highlighted-badge` |
| Título | `product-title` |
| Preço | `product-price` |
| Imagem | `product-image` |

## Ativando no index.js

Quando sua implementação estiver pronta, descomente no `index.js`:

1. A importação do `HighlightedCard`
2. O bloco `try/catch` do exercício 06

O card destacado deve aparecer acima da grid com um produto do catálogo em evidência.