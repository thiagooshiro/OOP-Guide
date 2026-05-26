# Exercício 04 — ProductModal

## Objetivo

Criar a classe `ProductModal`, responsável por exibir os detalhes completos de um produto quando um card for clicado.

---

# O que já existe

O `ProductList` já consegue detectar o clique em um card.

No arquivo `pages/index.js`, esse clique já está preparado para abrir o modal através de:

```js id="vby5ml"
modal.open(product)
```

Agora você vai criar a classe responsável por esse comportamento.

---

# Como o modal funciona

Diferente dos componentes anteriores, o `ProductModal` NÃO recebe uma região da página.

Ele será um componente independente, responsável por:

* criar sua própria estrutura
* adicionar o modal diretamente no `document.body`
* controlar abertura e fechamento
* atualizar o conteúdo exibido
* controlar sua própria visibilidade

O `pages/index.js` apenas cria a instância da classe:

```js id="z6d29m"
modal = new ProductModal();
```

Depois disso, toda a lógica do modal fica encapsulada dentro da própria classe.

---

# O que a classe precisa fazer

Quando o modal for criado:

* sua estrutura já deve ser criada e adicionada ao DOM
* ele deve começar invisível
* deve ficar preparado para exibir produtos futuramente

Quando `open(product)` for chamado:

* o modal deve exibir os dados do produto recebido
* o modal deve se tornar visível

O objeto `product` possui:

* `name`
* `price`
* `image`
* `category`

Quando o modal for fechado:

* ele deve desaparecer da tela
* o conteúdo exibido anteriormente pode ser removido ou substituído

---

# Controle de fechamento

O fechamento do modal deve ser controlado pela própria classe.

O `index.js` NÃO chama `close()` diretamente.

A própria implementação do modal deve decidir quando fechar:

* clique no overlay
* botão de fechar
* ou ambos

---

# Estrutura mínima esperada

Sua implementação precisa possuir:

* uma estrutura persistente no DOM
* um overlay cobrindo a tela
* uma área de conteúdo
* uma forma de fechar o modal
* espaço para exibir:

  * nome
  * preço
  * imagem
  * categoria

A forma de criar essa estrutura fica a seu critério.

---

# Inserindo no DOM

O modal deve ser adicionado diretamente no `document.body`.

Você provavelmente vai precisar de algo como:

```js id="c0fqg1"
document.body.appendChild(...)
```

---

# Ativando no `index.js`

Quando sua implementação estiver pronta:

1. Descomente a importação do `ProductModal`
2. Descomente o bloco do exercício 04

Depois disso:

* clique em um card
* o modal deve abrir com os dados do produto clicado

---

# Classes CSS sugeridas

Use essas classes para aproveitar o visual já preparado no CSS:

| Elemento               | Classe            |
| ---------------------- | ----------------- |
| Overlay (fundo escuro) | `modal-overlay`   |
| Container do modal     | `modal-container` |
| Botão de fechar        | `modal-close`     |
| Área de conteúdo       | `modal-content`   |

---

# Importante

O `ProductModal` é o primeiro componente realmente independente do projeto.

Ele:

* não depende de uma região do `PageContainer`
* não precisa ser renderizado pelo `PageContainer`
* controla seu próprio estado
* controla sua própria renderização
* controla sua própria visibilidade

---

# Dica

Você provavelmente vai precisar usar:

* `createElement()`
* `innerHTML`
* `addEventListener()`
* manipulação de classes CSS
* controle de visibilidade

---

# Material de apoio

Ficou com dúvida sobre manipulação de DOM dentro de classes?

Leia:

```txt id="l6c6tw"
../exercise05/dom-in-classes.md
```
