# Full Class Example - Versão Orientada a Objetos Completa

Esta é a versão totalmente orientada a objetos do aplicativo. Tudo está encapsulado em classes. O main.js apenas instancia e orquestra.

Esta versão é propositalmente mais complexa. Serve como referência para quem quer ver uma arquitetura baseada em classes.

## Como executar

Abra a pasta no VS Code e use o Live Server (botão "Go Live").

## Estrutura de arquivos

full-class-example/
├── index.html
├── styles.css
├── api.js                 # Classe MealApi
├── models.js              # Dados mock
├── components/
│   ├── MealCard.js        # Classe MealCard
│   ├── MealModal.js       # Classe MealModal
│   ├── SearchBar.js       # Classe SearchBar
│   └── Section.js         # Classe Section (gerencia a lista)
└── main.js                # Classe App (orquestrador)

## O que cada classe faz

- MealApi: faz requisições à API (random, search)
- MealCard: cria o elemento DOM de um card individual
- MealModal: gerencia o modal (abrir, fechar, preencher conteúdo)
- SearchBar: gerencia input de busca e botões de filtro
- Section: gerencia uma lista de itens (renderiza cards em container)
- App: orquestra todas as classes, conecta eventos, gerencia estado

## Como a criação do card é feita

Diferente da versão funcional, aqui o App configura o Section com um renderer:

this.section.setRenderer((meal) => {
  const card = new MealCard(meal, (m) => this.modal.open(m));
  return card.render();
});

O Section recebe um item e chama essa função para transformar o dado em elemento DOM.

O MealCard agora tem um método render() (em vez de getView()):

render() {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `...`;
  card.addEventListener('click', () => this.onClick(this.meal));
  return card;
}

## Comparação com as outras versões

- functional-example: sem classes, mais fácil de entender
- hybrid-starter: algumas classes, desafio prático
- full-class-example: totalmente OOP, mais complexo

## Quando NÃO usar esta abordagem

- Projetos pequenos (adiciona complexidade desnecessária)
- Protótipos rápidos
- Quando você está aprendendo JavaScript (comece pelo funcional)

## Relação com os outros exemplos

O functional-example mostra o mesmo app sem classes. O hybrid-starter tem um desafio para implementar apenas a classe MealCard. Este full-class-example é a versão completa com todas as classes.