# Exercício 07 — App

## Objetivo

Criar a classe `App`, responsável por coordenar toda a aplicação.

Esse exercício fecha o projeto.

Até agora, cada classe possuía uma responsabilidade isolada:

* renderizar cards
* abrir modal
* coletar input
* estruturar a página

Agora você vai criar a camada que conecta tudo.

---

# ⚠️ Importante

Esse exercício é um desafio.

Você vai transformar a lógica procedural do `index.js` em uma arquitetura orientada a objetos.

A ideia principal aqui é praticar:

* composição de classes
* organização de estado
* fluxo de dados
* coordenação entre componentes
* separação de responsabilidades

---

# O que já existe

Atualmente, o `pages/index.js` já consegue:

* criar componentes
* conectar callbacks
* abrir modal
* atualizar produtos
* controlar busca e filtro

Mas toda essa lógica ainda está espalhada em um único arquivo procedural.

Agora isso será encapsulado dentro de uma classe:

```txt id="8h8p31"
App
```

---

# O que você vai construir

Crie o arquivo:

```txt id="e0zy52"
exercise07/App.js
```

A classe `App` será responsável por:

* criar os componentes
* conectar os componentes
* armazenar estado compartilhado
* reagir aos eventos da aplicação
* atualizar a interface

---

# Como pensar nesse exercício

A `App` NÃO é um componente visual.

Ela funciona como uma camada de coordenação.

Os componentes continuam responsáveis pela própria interface:

| Classe            | Responsabilidade              |
| ----------------- | ----------------------------- |
| `PageContainer`   | estruturar a página           |
| `ProductCard`     | representar um produto        |
| `ProductList`     | renderizar múltiplos produtos |
| `ProductModal`    | abrir e fechar modal          |
| `SearchBar`       | coletar input do usuário      |
| `HighlightedCard` | renderizar produto destacado  |
| `App`             | coordenar tudo                |

---

# O que a classe precisa fazer

A `App` deve:

* criar o `PageContainer`
* obter as regiões da página
* criar os componentes da aplicação
* conectar callbacks
* armazenar produtos
* controlar filtros
* controlar busca
* atualizar o `ProductList`
* abrir modal quando necessário

---

# Fluxo esperado

A aplicação agora deve funcionar assim:

```txt id="4qk4yn"
Usuário interage
↓
Componente dispara callback
↓
App recebe o evento
↓
App atualiza estado
↓
App atualiza interface
```

---

# Organização sugerida

Você provavelmente vai precisar de:

* propriedades privadas
* métodos privados
* métodos auxiliares
* inicialização separada

Exemplo de responsabilidades internas:

| Método                 | Responsabilidade         |
| ---------------------- | ------------------------ |
| `#init()`              | montar aplicação         |
| `#updateProductList()` | atualizar lista filtrada |
| `#handleSearch()`      | lidar com busca          |
| `#handleFilter()`      | lidar com categoria      |

A estrutura exata fica a seu critério.

---

# Estado da aplicação

Agora existe estado compartilhado entre múltiplos componentes.

Por exemplo:

* lista completa de produtos
* termo atual da busca
* categoria selecionada
* lista filtrada

A `App` centraliza esse controle.

---

# Busca e filtros

A `SearchBar` continua sem conhecer a lógica da aplicação.

Ela apenas dispara callbacks.

A `App` recebe esses eventos e decide:

* quais produtos filtrar
* quando atualizar a lista
* quais dados renderizar

---

# Produto destacado

O `HighlightedCard` também deve ser coordenado pela `App`.

Ele continua funcionando como um card normal:

* recebe produto
* responde clique
* abre modal

Mas agora sua criação faz parte da inicialização da aplicação.

---

# Estrutura esperada

Você provavelmente vai precisar importar:

```js id="goj3nn"
PageContainer
ProductList
ProductModal
SearchBar
HighlightedCard
```

---

# Resultado esperado

Ao finalizar:

* a aplicação deve funcionar através da classe `App`
* busca deve funcionar
* filtros devem funcionar
* modal deve abrir
* produto destacado deve funcionar
* lista deve atualizar corretamente

---

# Substituindo o `index.js`

Depois que sua implementação estiver pronta, o projeto deixa de depender do `pages/index.js`.

Agora a aplicação deve ser carregada através do `App.js`.

No HTML, substitua a referência:

```txt id="t0s0q2"
pages/index.js
```

por:

```txt id="jjlwm3"
exercise07/App.js
```

A ideia é que a própria classe `App` passe a representar a aplicação inteira.

---

# Importante

A `App` NÃO substitui os componentes.

Ela coordena os componentes.

Cada classe continua responsável pela própria lógica interna.

A `App` apenas organiza como tudo trabalha junto.

---

# Dicas

Você provavelmente vai precisar usar:

* composição de objetos
* callbacks
* propriedades privadas (`#`)
* métodos privados
* arrow functions
* separação de responsabilidades

---

# Material de apoio

Se ficou com dúvida sobre manipulação de DOM ou composição de classes, revise:

```txt id="u3snl4"
../dom-in-classes.md
```

e:

```txt id="ux0bkp"
../inheritance-in-classes.md
```
