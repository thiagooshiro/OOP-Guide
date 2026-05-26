# inheritance-in-classes.md

````md id="7n7n6x"
# Herança em Classes JavaScript

Herança permite criar classes especializadas a partir de outras classes já existentes.

A ideia principal é:

- reutilizar comportamento
- evitar repetição
- criar variações mais específicas de uma estrutura base

Nesse projeto, isso será usado para transformar um `ProductCard` comum em um `HighlightedCard`.

---

# Estrutura básica

Uma classe pode herdar outra usando `extends`:

```js
class Animal {
  speak() {
    console.log('Som genérico');
  }
}

class Dog extends Animal {}
````

Agora `Dog` já possui acesso ao método `speak()`.

```js
const dog = new Dog();

dog.speak();
```

---

# Herdando comportamento automaticamente

Quando uma classe herda outra:

* métodos são reutilizados
* propriedades continuam acessíveis
* comportamento base permanece disponível

Exemplo:

```js
class Card {
  render() {
    console.log('Renderizando card...');
  }
}

class ProductCard extends Card {}

const product = new ProductCard();

product.render();
```

Mesmo sem criar `render()` dentro de `ProductCard`, o método continua funcionando.

---

# Usando super()

Quando a classe filha possui seu próprio constructor, ela precisa chamar `super()`.

`super()` executa o constructor da classe pai.

```js
class Card {
  constructor(title) {
    this.title = title;
  }
}

class HighlightedCard extends Card {
  constructor(title, badge) {
    super(title);

    this.badge = badge;
  }
}
```

Sem `super()`, a classe filha não consegue acessar corretamente o constructor da classe base.

---

# Sobrescrevendo métodos

Uma classe filha pode modificar comportamentos herdados.

Isso é chamado de sobrescrita de método.

```js
class Card {
  getView() {
    return 'Card simples';
  }
}

class HighlightedCard extends Card {
  getView() {
    return 'Card destacado';
  }
}
```

Agora cada classe possui sua própria implementação de `getView()`.

---

# Reutilizando comportamento + mudando visual

Esse é exatamente o caso do exercício 06.

O `ProductCard` já sabe:

* armazenar dados do produto
* responder clique
* representar um produto individual

O `HighlightedCard` reutiliza tudo isso.

Ele muda apenas:

* estrutura visual
* layout
* estilo do componente

Ou seja:

```txt
ProductCard
↓
HighlightedCard
```

A nova classe reaproveita comportamento e modifica apenas o necessário.

---

# Exemplo prático com DOM

```js
class Card {
  constructor(title) {
    this.title = title;
  }

  getView() {
    const element = document.createElement('div');
    element.className = 'card';
    element.textContent = this.title;

    return element;
  }
}

class HighlightedCard extends Card {
  getView() {
    const element = document.createElement('div');

    element.className = 'highlighted-card';

    element.innerHTML = `
      <strong>Destaque</strong>
      <p>${this.title}</p>
    `;

    return element;
  }
}
```

As duas classes continuam representando cards.

Mas cada uma possui uma visualização diferente.

---

# Quando usar herança

Herança faz sentido quando:

* duas classes possuem responsabilidades parecidas
* uma delas é uma versão especializada da outra
* existe comportamento reutilizável

Nesse projeto:

* `HighlightedCard` É um tipo de `ProductCard`
* por isso herança faz sentido

---

# Quando NÃO usar herança

Nem toda reutilização precisa de herança.

Se duas classes possuem responsabilidades muito diferentes, normalmente composição ou separação de funções é mais adequada.

Herança funciona melhor quando existe relação clara de especialização.

---

# Demo interativa

Quer ver exemplos funcionando na prática?

Abra o arquivo:

```txt
inheritance-in-classes-demo.html
```

no Live Server.

---

# Referências

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/extends](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/extends)
* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/super](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/super)

````

---

# inheritance-in-classes-demo.html

```html id="7qg4ny"

````
