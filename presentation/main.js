// ======================================================
// FUNCTIONAL EXAMPLE
// ======================================================

function createWarningCard(message) {
  const card = document.createElement('div');
  card.className = 'warning-card functional-card';
  card.innerHTML = `
    <strong>Aviso</strong>
    <p>${message}</p>
    <button class="demo-btn" id="functional-btn">Fechar</button>
  `;
  return card;
}

const functionalArea = document.getElementById('functional-demo-area');
const functionalCard = createWarningCard('O botão abaixo é controlado por código de fora.');
functionalArea.appendChild(functionalCard);

document.getElementById('functional-btn').addEventListener('click', () => {
  functionalCard.style.display = 'none';

  const feedback = document.createElement('p');
  feedback.style.color = '#9ca3af';
  feedback.style.fontSize = '0.9rem';
  feedback.style.marginTop = '0.5rem';
  feedback.textContent = 'O card sumiu. Quem decidiu isso foi uma função lá fora.';

  functionalArea.appendChild(feedback);
});


// ======================================================
// CLASS BASED EXAMPLE
// ======================================================

class WarningCard {
  constructor(message) {
    this.message = message;
    this.element = document.createElement('div');
    this.element.className = 'warning-card';
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <strong>Aviso</strong>
      <p>${this.message}</p>
    `;

    const button = document.createElement('button');
    button.className = 'demo-btn';
    button.textContent = 'Fechar';
    button.addEventListener('click', () => this.close());
    this.element.appendChild(button);
  }

  close() {
    this.element.remove();

    const feedback = document.createElement('p');
    feedback.style.color = '#9ca3af';
    feedback.style.fontSize = '0.9rem';
    feedback.style.marginTop = '0.5rem';
    feedback.textContent = 'O card sumiu. Quem decidiu isso fui eu mesma.';

    classDemoArea.appendChild(feedback);
  }

  getView() {
    return this.element;
  }
}

const classDemoArea = document.getElementById('class-demo-area');
const warningCard = new WarningCard('Clique em fechar e veja quem toma a decisão.');
classDemoArea.appendChild(warningCard.getView());


// ======================================================
// INHERITANCE — Card vs HighlightedCard
// ======================================================

class Card {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  getView() {
    const el = document.createElement('div');
    el.className = 'inherit-card';
    el.innerHTML = `
      <h3 class="inherit-card-title">${this.title}</h3>
      <p class="inherit-card-body">${this.body}</p>
    `;
    return el;
  }
}

class HighlightedCard extends Card {
  getView() {
    const el = document.createElement('div');
    el.className = 'inherit-card inherit-card--highlighted';
    el.innerHTML = `
      <span class="inherit-badge">Destaque</span>
      <h3 class="inherit-card-title">${this.title}</h3>
      <p class="inherit-card-body">${this.body}</p>
    `;
    return el;
  }
}

function renderCardDemo(type) {
  const area = document.getElementById('card-inherit-demo');
  area.innerHTML = '';

  const card = type === 'highlighted'
    ? new HighlightedCard('Produto em destaque', 'Mesma classe base, visual diferente.')
    : new Card('Produto comum', 'Estrutura herdada, sem modificação.');

  area.appendChild(card.getView());
}


// ======================================================
// INHERITANCE — Alert base, Warning e Success
// ======================================================

class Alert {
  constructor(message) {
    this.message = message;
  }

  getView() {
    const el = document.createElement('div');
    el.className = 'inherit-alert';
    el.textContent = this.message;
    return el;
  }
}

class WarningAlert extends Alert {
  getView() {
    const el = super.getView();
    el.classList.add('inherit-alert--warning');
    el.prepend(Object.assign(document.createElement('span'), {
      className: 'inherit-alert-icon',
      textContent: '⚠️'
    }));
    return el;
  }
}

class SuccessAlert extends Alert {
  getView() {
    const el = super.getView();
    el.classList.add('inherit-alert--success');
    el.prepend(Object.assign(document.createElement('span'), {
      className: 'inherit-alert-icon',
      textContent: '✓'
    }));
    return el;
  }
}

function renderAlertDemo(type) {
  const area = document.getElementById('alert-inherit-demo');
  area.innerHTML = '';

  const alert = type === 'warning'
    ? new WarningAlert('Ação não pode ser desfeita.')
    : new SuccessAlert('Produto salvo com sucesso.');

  area.appendChild(alert.getView());
}


// ======================================================
// INHERITANCE — ModalBase e ProductModal
// ======================================================

class ModalBase {
  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'inherit-modal-overlay';

    this.box = document.createElement('div');
    this.box.className = 'inherit-modal-box';

    this.closeBtn = document.createElement('button');
    this.closeBtn.className = 'inherit-modal-close';
    this.closeBtn.textContent = '×';
    this.closeBtn.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    this.box.appendChild(this.closeBtn);
    this.overlay.appendChild(this.box);
    document.body.appendChild(this.overlay);
  }

  open() {
    this.overlay.classList.add('visible');
  }

  close() {
    this.overlay.classList.remove('visible');
  }
}

class ProductModal extends ModalBase {
  open(product) {
    Array.from(this.box.children).forEach(child => {
      if (!child.classList.contains('inherit-modal-close')) child.remove();
    });

    const title = document.createElement('h2');
    title.className = 'inherit-modal-title';
    title.textContent = product.name;

    const price = document.createElement('p');
    price.className = 'inherit-modal-price';
    price.textContent = product.price;

    const desc = document.createElement('p');
    desc.className = 'inherit-modal-desc';
    desc.textContent = 'Este modal herda abertura e fechamento do ModalBase. Só o conteúdo é especializado.';

    this.box.appendChild(title);
    this.box.appendChild(price);
    this.box.appendChild(desc);

    super.open();
  }
}

const productModal = new ProductModal();