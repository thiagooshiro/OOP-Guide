# Exercício 05 — SearchBar

## O que já existe

A página tem cards, modal e está funcional. Mas não tem como buscar ou filtrar produtos ainda.

## O que você vai construir

Crie o arquivo `exercise05/SearchBar.js` com a classe `SearchBar` — um componente de UI que coleta input do usuário e dispara callbacks. Ela não filtra nada sozinha.

Quando você descomentar o bloco do exercício 05 no `index.js`, ele vai usar sua classe assim:

```js
searchBar = new SearchBar(contentArea, {
  onSearch: (term) => { ... },
  onFilter: (category) => { ... }
});
```

Recebe `contentArea` e um objeto com dois callbacks. Quem decide o que fazer com o termo de busca ou a categoria é o `index.js` — a `SearchBar` só avisa.

## O que implementar

### Construtor

Recebe `containerElement` e `{ onSearch, onFilter }`. Guarda os callbacks em `this`.

Crie a barra no DOM e insira no container. Inicialize os eventos internamente no construtor.

### UI mínima

A `SearchBar` precisa ter:

- Um input de texto para busca
- Botões de categoria: `todos`, `roupa`, `casa`, `acessório`, `papelaria`

### Comportamento

- Quando o usuário digitar no input, chame `this.onSearch(term)`
- Quando o usuário clicar em um botão de categoria, chame `this.onFilter(category)`

O componente não sabe o que acontece depois — só chama a função que recebeu.

## Classes CSS sugeridas

Use essas classes e o visual já aparece pronto:

| Elemento | Classe |
|---|---|
| Container da barra | `search-bar` |
| Input de texto | `search-input` |
| Container dos botões | `search-filters` |
| Botão de categoria | `filter-btn` |
| Botão ativo | `filter-btn active` |

## Ativando no index.js

Quando sua implementação estiver pronta, descomente no `index.js`:

1. A importação do `SearchBar`
2. O bloco `try/catch` do exercício 05

Digite no campo de busca ou clique em uma categoria — os cards devem filtrar em tempo real.

---

Ficou com dúvida sobre manipulação de DOM dentro de classes? → [dom-in-classes.md](../dom-in-classes.md)