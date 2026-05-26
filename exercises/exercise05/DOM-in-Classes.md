# Manipulando o DOM dentro de classes

Quando uma classe é responsável por um elemento visual, ela precisa criar, guardar e manipular esse elemento internamente. O padrão é sempre o mesmo: criar no construtor, guardar em `this`, usar nos métodos.

## Criando e guardando elementos no construtor

```js
class Toast {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'toast';
    document.body.appendChild(this.element);
  }
}
```

`this.element` fica disponível em qualquer método da classe. Sem isso, cada método que precisasse do elemento teria que buscá-lo no DOM — frágil e desnecessário.

## Acessando o elemento em outros métodos

```js
class Toast {
  constructor(message) {
    this.element = document.createElement('div');
    this.element.className = 'toast';
    this.element.textContent = message;
    document.body.appendChild(this.element);
  }

  remove() {
    this.element.remove(); // ✓ acessa o que foi guardado no construtor
  }
}

const toast = new Toast('Salvo com sucesso!');
setTimeout(() => toast.remove(), 3000);
```

## Mostrando e escondendo elementos

Duas abordagens comuns:

**Via `style.display`:**

```js
class Dropdown {
  constructor() {
    this.menu = document.createElement('ul');
    this.menu.style.display = 'none';
    document.body.appendChild(this.menu);
  }

  open() {
    this.menu.style.display = 'block';
  }

  close() {
    this.menu.style.display = 'none';
  }
}
```

**Via classe CSS** (mais comum na prática):

```js
open() {
  this.menu.classList.add('visible');
}

close() {
  this.menu.classList.remove('visible');
}
```

## Limpando e repopulando conteúdo

Quando o conteúdo muda dinamicamente, limpe antes de repopular:

```js
class UserCard {
  constructor() {
    this.element = document.createElement('div');
    document.body.appendChild(this.element);
  }

  render(user) {
    this.element.innerHTML = ''; // limpa o que tinha antes

    const name = document.createElement('h2');
    name.textContent = user.name;

    const email = document.createElement('p');
    email.textContent = user.email;

    this.element.appendChild(name);
    this.element.appendChild(email);
  }
}

const card = new UserCard();
card.render({ name: 'Ana', email: 'ana@email.com' });
card.render({ name: 'Bruno', email: 'bruno@email.com' }); // substitui o anterior
```

## Event listeners que chamam métodos da própria classe

Esse é o ponto que mais causa confusão. Quando você passa um método como callback, o `this` dentro dele pode perder a referência ao objeto:

```js
class Modal {
  constructor() {
    this.element = document.createElement('div');

    // ✗ problemático: this dentro de close() não vai ser o Modal
    this.element.addEventListener('click', this.close);

    // ✓ correto: arrow function preserva o this do construtor
    this.element.addEventListener('click', () => this.close());
  }

  close() {
    this.element.style.display = 'none'; // this.element existe aqui
  }
}
```

A arrow function não tem `this` próprio — ela herda o `this` do contexto onde foi escrita, que é o construtor. Por isso funciona.

## Estrutura completa: do construtor ao evento

```js
class Notification {
  constructor(message) {
    this.element = document.createElement('div');
    this.element.className = 'notification';
    this.element.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => this.dismiss());

    this.element.appendChild(closeBtn);
    document.body.appendChild(this.element);
  }

  dismiss() {
    this.element.remove();
  }
}

new Notification('Você tem uma nova mensagem.');
```

---

## Demo interativa

Quer ver todos esses exemplos funcionando na prática? Abra o arquivo [`dom-in-classes-demo.html`](./dom-in-classes-demo.html) no Live Server.

## Referências

- [W3Schools — HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [W3Schools — DOM Events](https://www.w3schools.com/js/js_events.asp)
- [MDN — createElement](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
- [MDN — Arrow functions e this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions#sem_this_pr%C3%B3prio)