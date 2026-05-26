# Exercício 01 — PageContainer

## Objetivo

Conhecer a primeira classe do projeto. Ela já está pronta.

## Como executar

1. Abra o arquivo `pages/index.js`
2. Veja que ele já importa e instancia o `PageContainer`
3. Abra o Live Server
4. Abra o console do navegador (F12)

## O que você deve ver

- Uma página com cabeçalho "Galeria de Produtos", área central vazia e rodapé
- No console: o elemento `<main id="main-content">`

## O que a classe faz

- Cria a estrutura HTML dentro da `<div id="root">`
- Guarda a referência do `<main>` para ser usada depois
- Fornece o método `getContentArea()` para que outros componentes saibam onde se posicionar

## Próximo exercício

No Exercício 02, você vai criar a classe `ProductCard` do zero — a menor unidade da página, responsável por representar um produto individual.