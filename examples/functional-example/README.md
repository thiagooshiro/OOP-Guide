# Functional Example - Versão Funcional

Esta versão não usa classes. Apenas funções, variáveis globais e manipulação direta do DOM.

## Como executar

Abra a pasta no VS Code e use o Live Server (botão "Go Live").

## O que o app faz

- Exibe uma lista de receitas
- Busca por nome (input de texto)
- Filtra por categoria (botões)
- Botão "Surprise Me" que adiciona uma receita aleatória
- Clique no card abre um modal com detalhes

## Estrutura de arquivos

functional-example/
├── index.html
├── styles.css
├── api.js
└── main.js

## Como a criação do card é feita

No main.js, a função renderCards() faz tudo:

1. Pega a lista de receitas já filtrada
2. Limpa o container
3. Para cada receita, cria uma div com classe "card"
4. Preenche o innerHTML com imagem, título e categoria
5. Adiciona um event listener de clique
6. Insere no container

Código da função renderCards():

function renderCards() {
  const meals = getFilteredMeals();
  container.innerHTML = '';
  meals.forEach(meal => {
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
    container.appendChild(card);
  });
}

## Pontos de atenção

- Toda a lógica do card está dentro da função renderCards
- Se você precisar criar cards em outro lugar, teria que repetir ou reutilizar a função
- Não há separação entre "o que é um card" e "como renderizar a lista"
- Código direto, fácil de entender, mas começa a repetir quando o app cresce