// Данные меню
const menuData = {
  'business-lunch': [
    { name: 'Классический бизнес-ланч', price: '450₽', description: 'Суп дня + основное блюдо + салат + напиток', image: '🍽️' },
    { name: 'Премиум бизнес-ланч', price: '650₽', description: 'Крем-суп + стейк + овощи гриль + десерт', image: '🥩' },
    { name: 'Вегетарианский ланч', price: '390₽', description: 'Овощной суп + паста + салат + сок', image: '🥗' }
  ],
  'appetizers': [
    { name: 'Брускетта с томатами', price: '280₽', description: 'Хрустящий хлеб с томатами и базиликом', image: '🍞' },
    { name: 'Сырная тарелка', price: '520₽', description: 'Ассорти европейских сыров с медом', image: '🧀' },
    { name: 'Креветки темпура', price: '450₽', description: 'Креветки в хрустящем кляре', image: '🍤' }
  ],
  'rolls': [
    { name: 'Филадельфия', price: '380₽', description: 'Лосось, сливочный сыр, огурец', image: '🍣' },
    { name: 'Калифорния', price: '350₽', description: 'Краб, авокадо, огурец, икра тобико', image: '🍱' },
    { name: 'Дракон', price: '420₽', description: 'Угорь, авокадо, огурец, соус унаги', image: '🐉' }
  ],
  'pizza': [
    { name: 'Маргарита', price: '480₽', description: 'Томатный соус, моцарелла, базилик', image: '🍕' },
    { name: 'Пепперони', price: '550₽', description: 'Томатный соус, моцарелла, пепперони', image: '🍕' },
    { name: 'Четыре сыра', price: '620₽', description: 'Моцарелла, пармезан, горгонзола, чеддер', image: '🧀' }
  ],
  'soups': [
    { name: 'Том ям', price: '320₽', description: 'Острый тайский суп с креветками', image: '🍜' },
    { name: 'Борщ украинский', price: '280₽', description: 'Традиционный борщ со сметаной', image: '🥣' },
    { name: 'Крем-суп из тыквы', price: '250₽', description: 'Нежный суп-пюре с тыквенными семечками', image: '🎃' }
  ],
  'salads': [
    { name: 'Цезарь с курицей', price: '380₽', description: 'Салат романо, курица, пармезан, соус цезарь', image: '🥗' },
    { name: 'Греческий салат', price: '320₽', description: 'Томаты, огурцы, фета, оливки, оливковое масло', image: '🫒' },
    { name: 'Салат с лососем', price: '450₽', description: 'Микс салатов, слабосоленый лосось, авокадо', image: '🐟' }
  ],
  'wok': [
    { name: 'Вок с курицей терияки', price: '420₽', description: 'Курица, овощи, лапша удон, соус терияки', image: '🍜' },
    { name: 'Вок с говядиной', price: '480₽', description: 'Говядина, болгарский перец, соевый соус', image: '🥩' },
    { name: 'Овощной вок', price: '350₽', description: 'Микс овощей, тофу, кунжутное масло', image: '🥬' }
  ],
  'desserts': [
    { name: 'Тирамису', price: '280₽', description: 'Классический итальянский десерт', image: '🍰' },
    { name: 'Чизкейк Нью-Йорк', price: '320₽', description: 'Нежный сырный торт с ягодным соусом', image: '🍰' },
    { name: 'Мороженое', price: '180₽', description: 'Три шарика на выбор с топпингами', image: '🍨' }
  ]
};

// Функция отображения меню
function displayMenu(category) {
  const menuContainer = document.getElementById('menu-items');
  const items = menuData[category];
  
  menuContainer.innerHTML = '';
  
  const fragment = document.createDocumentFragment();
  
  items.forEach((item, index) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.animationDelay = (index * 0.05) + 's';
    menuItem.innerHTML = `
      <div class="item-image">${item.image}</div>
      <div class="item-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="item-price">${item.price}</div>
      </div>
      <button class="add-btn" onclick="addToCart('${item.name}', '${item.price}')">Добавить</button>
    `;
    fragment.appendChild(menuItem);
  });
  
  menuContainer.appendChild(fragment);
}

// Функция добавления в корзину с красивым уведомлением
function addToCart(name, price) {
  // Создаем красивое уведомление
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
    z-index: 10000;
    transform: translate3d(400px, 0, 0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    will-change: transform;
  `;
  notification.innerHTML = `✅ ${name} добавлен в корзину!`;
  
  document.body.appendChild(notification);
  
  // Анимация появления
  requestAnimationFrame(() => {
    setTimeout(() => {
      notification.style.transform = 'translate3d(0, 0, 0)';
    }, 50);
  });
  
  // Удаление уведомления
  setTimeout(() => {
    notification.style.transform = 'translate3d(400px, 0, 0)';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 2500);
}

// Обработчики событий для кнопок категорий
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  // Показать первую категорию по умолчанию
  displayMenu('business-lunch');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.classList.contains('active')) return;
      
      // Убрать активный класс со всех кнопок
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавить активный класс к нажатой кнопке
      this.classList.add('active');
      
      // Показать соответствующее меню с анимацией
      const menuContainer = document.getElementById('menu-items');
      menuContainer.style.opacity = '0';
      menuContainer.style.transform = 'translate3d(0, 20px, 0)';
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          const category = this.getAttribute('data-category');
          displayMenu(category);
          requestAnimationFrame(() => {
            menuContainer.style.opacity = '1';
            menuContainer.style.transform = 'translate3d(0, 0, 0)';
          });
        }, 100);
      });
    });
  });
  
  // Инициализация эффектов
  createParticles();
});

// Создание плавающих частиц
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Эффект прокрутки для шапки
function handleScroll() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Инициализация эффектов
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', createParticles);