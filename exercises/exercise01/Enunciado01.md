# Exercício 01 — PageContainer

## Objetivo

Conhecer a primeira classe do projeto. Ela já está pronta.

## Como executar

1. Abra o arquivo `pages/index.js`
2. Veja que ele já importa e instancia o `PageContainer`
3. Abra o Live Server
4. Abra o console do navegador (F12)

## O que você deve ver

- Uma página com cabeçalho "Galeria de Produtos"
- Uma área logo abaixo do título onde a barra de busca será colocada
- Uma área principal dividida em duas regiões: uma para o produto em destaque e outra para a grade de produtos
- Rodapé

## O que a classe faz

- Cria a estrutura HTML completa da página dentro da `<div id="root">`
- Divide a página em três regiões específicas:
  - Área de busca (dentro do cabeçalho)
  - Área do produto destacado
  - Área da grade de produtos
- Fornece métodos para acessar cada região individualmente:
  - `getSearchArea()` → retorna o container da barra de busca
  - `getHighlightedArea()` → retorna o container do produto em destaque
  - `getProductsArea()` → retorna o container da grade de produtos

## Por que isso é útil

Com a página dividida em regiões, cada componente (SearchBar, HighlightedCard, ProductList) pode ser colocado no lugar certo sem atrapalhar os outros. Quando um componente precisa atualizar sua exibição (ex: filtrar produtos), ele mexe apenas na sua própria região.

## Próximo exercício

No Exercício 02, você vai criar a classe `ProductCard` do zero — a menor unidade da página, responsável por representar um produto individual.