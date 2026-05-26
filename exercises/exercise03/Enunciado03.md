# Exercício 03 — ProductList

## Objetivo

Criar a classe `ProductList`, responsável por organizar e renderizar vários `ProductCard` dentro da área de produtos da página.

---

# O que essa classe representa

Até agora você criou apenas um card individual (`ProductCard`).

Agora vamos criar uma classe responsável por:

* controlar vários produtos ao mesmo tempo
* criar vários cards automaticamente
* organizar os cards na tela
* renderizar tudo dentro da região correta da página

---

# Como a arquitetura funciona

O `PageContainer` já organiza a página em regiões específicas:

* área de busca
* área de destaque
* área da grade de produtos

O arquivo `pages/index.js` funciona como o orquestrador da aplicação.

Ele:

* cria o `PageContainer`
* pega cada região da página
* entrega a região correta para cada componente

---

# Como o `ProductList` será usado

No arquivo `pages/index.js`, a área de produtos criada pelo `PageContainer` será entregue para o `ProductList`.

Depois disso:

* os produtos serão enviados usando `setProducts()`
* o `ProductList` será responsável por renderizar os cards nessa região

Isso significa que:

* o `ProductList` NÃO decide sozinho onde será renderizado
* a lista de produtos NÃO será recebida diretamente no constructor
* os produtos serão enviados posteriormente através do setter

---

# O que a classe precisa fazer

A partir da lista de produtos recebida através do método `setProducts()`:

* criar um `ProductCard` para cada produto da lista
* importar e utilizar a classe `ProductCard`
* passar as informações necessárias para cada card
* adicionar cada card dentro da área de produtos da página
* limpar os cards antigos antes de uma nova renderização
* permitir registrar uma função executada ao clicar em um card

---

# Estrutura da grade

Além de renderizar os cards, a classe também deve criar uma estrutura responsável por organizar visualmente os produtos na tela.

Todos os `ProductCard` devem ser adicionados dentro dessa estrutura.

---

# Classe CSS sugerida

Use essa classe para aproveitar o grid já preparado no CSS:

| Elemento                       | Classe          |
| ------------------------------ | --------------- |
| Container da grade de produtos | `products-grid` |

---

# Comportamento esperado

Quando a lista possuir vários produtos:

* vários `ProductCard` devem ser criados
* cada card deve representar apenas um produto
* todos os cards devem aparecer organizados na grade de produtos

Quando a lista de produtos for atualizada:

* os cards antigos devem ser removidos
* os novos cards devem ser renderizados
* a interface deve refletir apenas os produtos atuais

Quando um card for clicado:

* a função registrada em `setOnCardClick()` deve ser executada

---

# Estrutura esperada

## Constructor

O constructor deve receber apenas a região onde os cards serão renderizados.

Essa região será enviada pelo `pages/index.js`.

---

# Métodos esperados

## `setProducts(products)`

Responsável por:

* receber a lista de produtos
* armazenar os produtos internamente

---

## `setOnCardClick(callback)`

Responsável por:

* registrar uma função executada ao clicar em um card

Essa função será usada futuramente para abrir o modal do produto.

---

## `render()`

Responsável por:

* limpar a renderização anterior
* criar os `ProductCard`
* adicionar os cards na tela

---

# Fluxo esperado

```txt id="m2gvzk"
PageContainer
 └── cria regiões da página

index.js
 ├── cria ProductList
 ├── envia productsArea
 └── envia produtos usando setProducts()

ProductList
 ├── cria vários ProductCard
 ├── organiza os cards
 └── renderiza tudo dentro da área recebida
```

---

# Importante

O `ProductList` NÃO deve criar manualmente toda a estrutura HTML de um produto.

Quem representa um produto individual é o `ProductCard`.

O papel do `ProductList` é:

* controlar vários cards
* organizar a renderização
* atualizar a interface quando os produtos mudarem

---

# Dicas

Você provavelmente vai precisar usar:

* `.map()`
* `appendChild()`
* instâncias de `ProductCard`
* limpeza do container antes de renderizar novamente

---

# Próximo exercício

No Exercício 04, você vai criar o `ProductModal`, responsável por exibir os detalhes completos de um produto ao clicar em um card.
