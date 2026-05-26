# Exercício 05 — SearchBar

## Objetivo

Criar a classe `SearchBar`, responsável por capturar interações de busca e filtro feitas pelo usuário.

---

# O que já existe

A página já possui:

* cards de produtos
* modal
* lista renderizada

Mas ainda não existe nenhuma forma de:

* buscar produtos
* filtrar categorias

Agora você vai criar o componente responsável por essa interação.

---

# O papel da SearchBar

A `SearchBar` é responsável apenas pela interface de busca.

Ela deve:

* capturar o texto digitado pelo usuário
* detectar cliques nos filtros
* avisar o restante da aplicação através dos callbacks recebidos

A lógica de filtragem continua centralizada no `pages/index.js`.

Isso significa que:

* a `SearchBar` NÃO filtra produtos sozinha
* ela apenas comunica eventos da interface

---

# Como a arquitetura funciona

O `PageContainer` já divide a página em regiões específicas:

* área de busca
* área de destaque
* área da grade de produtos

No `pages/index.js`, a região da busca será obtida através do container.

Depois disso, essa região será enviada para a `SearchBar`, que ficará responsável por renderizar sua interface dentro dela.

---

# Como o componente será usado

Quando o exercício for ativado no `pages/index.js`, a classe será utilizada assim:

```js id="oq4xsh"
searchBar = new SearchBar(searchArea, {
  onSearch: (term) => { ... },
  onFilter: (category) => { ... }
});
```

A `SearchBar` recebe:

* o container da região de busca
* um objeto com callbacks da aplicação

Quem decide o que fazer com a busca ou o filtro é o `index.js`.

A `SearchBar` apenas dispara os eventos recebidos.

---

# O que a classe precisa fazer

Quando a barra for criada:

* ela deve renderizar sua interface dentro da região de busca
* os eventos de busca já devem funcionar
* os filtros já devem responder ao clique

A interface precisa possuir:

* um input de busca
* filtros de categoria

---

# Categorias esperadas

Crie filtros para:

* `todos`
* `roupa`
* `casa`
* `acessório`
* `papelaria`

---

# Comportamento esperado

Quando o usuário digitar no campo de busca:

* a função `onSearch(term)` deve ser executada

Quando o usuário clicar em uma categoria:

* a função `onFilter(category)` deve ser executada

Quando um filtro estiver selecionado:

* o botão correspondente pode receber a classe visual de ativo

O componente NÃO precisa saber como os produtos serão filtrados.

Essa responsabilidade continua no `index.js`.

---

# Estrutura mínima esperada

A implementação precisa possuir:

* um container principal da busca
* um input de texto
* uma área de filtros
* botões de categoria
* eventos funcionando

A forma de criar essa estrutura fica a seu critério.

---

# Classes CSS sugeridas

Use essas classes para aproveitar o visual já preparado no CSS:

| Elemento            | Classe              |
| ------------------- | ------------------- |
| Container principal | `search-bar`        |
| Input de texto      | `search-input`      |
| Área dos filtros    | `search-filters`    |
| Botão de categoria  | `filter-btn`        |
| Botão ativo         | `filter-btn active` |

---

# Importante

A `SearchBar` NÃO controla produtos diretamente.

Ela apenas:

* captura interação do usuário
* dispara callbacks
* comunica eventos para a aplicação

---

# Dicas

Você provavelmente vai precisar usar:

* `createElement()`
* `addEventListener()`
* eventos de input
* manipulação de classes CSS
* callbacks

---

# Ativando no `index.js`

Quando sua implementação estiver pronta:

1. Descomente a importação da `SearchBar`
2. Descomente o bloco do exercício 05

Depois disso:

* digite no campo de busca
* clique nos filtros
* os produtos devem atualizar em tempo real

---

# Material de apoio

Ficou com dúvida sobre manipulação de DOM dentro de classes?

Leia:

```txt id="4ehwvl"
dom-in-classes.md
```
