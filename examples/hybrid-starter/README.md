# Hybrid Starter - Versão com Desafio

Esta versão é híbrida: partes do app já estão em classes (MealModal, SearchBar, MealApi), mas a classe MealCard está propositalmente faltando.

O app não funciona. Você verá o erro:

Uncaught ReferenceError: MealCard is not defined

Sua tarefa é implementar a classe MealCard.

## Como executar

Abra a pasta no VS Code e use o Live Server (botão "Go Live").

## O que o app deve fazer (quando funcionar)

- Exibir uma lista de receitas
- Buscar por nome
- Filtrar por categoria
- Botão "Surprise Me"
- Clique no card abre modal com detalhes

## O problema: MealCard não existe

O main.js já contém esta linha:

const card = new MealCard(meal, () => modal.open(meal)).getView();

Ela tenta:
1. Criar uma nova instância de MealCard
2. Passar meal (objeto com dados da receita) e uma função de callback
3. Chamar o método getView() para obter o elemento DOM do card
4. Inserir esse elemento no container

Como a classe MealCard não existe, o código quebra.

## O que você precisa fazer

### Passo 1: Entender o que o main.js espera

Analise a linha que está quebrando:

new MealCard(meal, () => modal.open(meal)).getView()

Isso significa que a classe MealCard deve ter:

- constructor(meal, onClickHandler) -> recebe um objeto meal e uma função onClickHandler
- Método getView() -> retorna um elemento DOM (a div com a classe "card")
- O clique no card deve chamar onClickHandler(meal)

### Passo 2: O que é meal?

É um objeto com os dados da receita. Exemplo:

{
  idMeal: "1",
  strMeal: "Spaghetti Carbonara",
  strMealThumb: "https://...",
  strCategory: "Pasta",
  strInstructions: "...",
  strIngredient1: "Spaghetti",
  strMeasure1: "200g"
}

### Passo 3: O que é onClickHandler?

É uma função que o main.js fornece. Quando o card for clicado, você deve chamar:

this.onClickHandler(this.meal)

Isso vai abrir o modal.

### Passo 4: Criar o arquivo MealCard.js

Na pasta hybrid-starter/, crie um arquivo chamado MealCard.js.

### Passo 5: Escrever a classe

Estrutura mínima:

export class MealCard {
  constructor(meal, onClickHandler) {
    this.meal = meal;
    this.onClickHandler = onClickHandler;
  }

  getView() {
    // 1. Crie o elemento <div class="card">
    // 2. Preencha com imagem, título e categoria
    // 3. Adicione event listener de clique
    // 4. Retorne o elemento
  }
}

### Passo 6: Construir o card

No código funcional (functional-example/), o card era criado assim:

const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
  <div class="card-info">
    <div class="card-title">${meal.strMeal}</div>
    <div class="card-category">${meal.strCategory || ''}</div>
  </div>
`;
card.addEventListener('click', () => modal.open(meal));

Agora você vai fazer a mesma coisa, mas dentro do getView():

- Use this.meal no lugar de meal
- Use this.onClickHandler no lugar da função que abre o modal

Código esperado dentro do getView():

const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
  <img src="${this.meal.strMealThumb}" alt="${this.meal.strMeal}">
  <div class="card-info">
    <div class="card-title">${this.meal.strMeal}</div>
    <div class="card-category">${this.meal.strCategory || ''}</div>
  </div>
`;
card.addEventListener('click', () => this.onClickHandler(this.meal));
return card;

### Passo 7: Importar a classe no main.js

No main.js, descomente a linha de importação:

import { MealCard } from './MealCard.js';

Ela já existe, mas está comentada. Remova os "//" do início.

### Passo 8: Testar

Recarregue a página. O erro deve desaparecer e o app deve funcionar.

## Solução completa (gabarito)

[Código da solução - igual ao passo 6, com a classe completa]

export class MealCard {
  constructor(meal, onClickHandler) {
    this.meal = meal;
    this.onClickHandler = onClickHandler;
  }

  getView() {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${this.meal.strMealThumb}" alt="${this.meal.strMeal}">
      <div class="card-info">
        <div class="card-title">${this.meal.strMeal}</div>
        <div class="card-category">${this.meal.strCategory || ''}</div>
      </div>
    `;
    card.addEventListener('click', () => this.onClickHandler(this.meal));
    return card;
  }
}

E no main.js, descomente a importação.

## Erros comuns

- "MealCard is not defined" -> esqueceu de importar no main.js
- "getView is not a function" -> esqueceu de criar o método ou escreveu errado
- Card aparece sem imagem ou texto -> usou "meal" em vez de "this.meal" dentro do getView()
- Clique no card não faz nada -> esqueceu de chamar this.onClickHandler(this.meal)
- Modal abre com receita errada -> passou this.meal errado no event listener

## Por que este desafio importa?

Este exercício mostra como transformar uma função que cria DOM em uma classe. O padrão constructor + getView() é comum em projetos que usam classes para gerenciar componentes de interface.