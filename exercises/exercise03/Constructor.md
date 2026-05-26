# Entendendo o constructor

Quando você escreve `new MinhaClasse()`, o JavaScript executa automaticamente o `constructor` antes de qualquer coisa. É o momento de preparar o objeto — guardar o que ele recebeu e inicializar o estado interno.

## Exemplo básico

```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

const car1 = new Car('Toyota', 2020);
const car2 = new Car('Honda', 2022);

console.log(car1.brand); // 'Toyota'
console.log(car2.year);  // 2022
```

`car1` e `car2` são objetos independentes. Cada um guarda seus próprios valores em `this`.

## Por que usar `this`?

`this` é a referência ao objeto que está sendo criado. Sem ele, a variável existe só dentro do construtor e some quando ele termina:

```js
class Car {
  constructor(brand) {
    this.brand = brand; // ✓ acessível em qualquer método da classe
    const temp = brand; // ✗ existe só aqui dentro
  }

  describe() {
    console.log(this.brand); // funciona
    console.log(temp);       // ReferenceError: temp is not defined
  }
}
```

## Inicializando estado interno

Nem tudo precisa vir de fora. Você pode inicializar propriedades diretamente no construtor para definir o estado inicial do objeto:

```js
class ShoppingCart {
  constructor(owner) {
    this.owner = owner;
    this.items = [];      // começa vazio
    this.isOpen = true;   // começa aberto
  }
}

const cart = new ShoppingCart('Ana');
console.log(cart.items);  // []
console.log(cart.isOpen); // true
```

Isso deixa claro para quem lê a classe quais são todas as suas propriedades — sem precisar vasculhar os métodos.

## Recebendo um elemento DOM

É comum passar elementos da página para uma classe guardar e usar depois:

```js
class Banner {
  constructor(containerElement) {
    this.container = containerElement;
    this.isVisible = false;
  }

  show() {
    this.container.style.display = 'block';
    this.isVisible = true;
  }
}

const el = document.querySelector('#banner');
const banner = new Banner(el);
banner.show();
```

## Recebendo uma função como argumento

Funções também podem ser passadas para o construtor e guardadas para uso posterior:

```js
class Button {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
  }

  render() {
    const btn = document.createElement('button');
    btn.textContent = this.label;
    btn.addEventListener('click', () => this.onClick());
    return btn;
  }
}

const btn = new Button('Salvar', () => console.log('salvo!'));
document.body.appendChild(btn.render());
```

O `Button` não sabe o que acontece quando é clicado — ele só chama a função que recebeu. Quem decide o comportamento é quem criou o botão.

---

## Referências

- [W3Schools — JS Classes](https://www.w3schools.com/js/js_classes.asp)
- [W3Schools — JS this](https://www.w3schools.com/js/js_this.asp)
- [MDN — constructor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor)
- [MDN — this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)