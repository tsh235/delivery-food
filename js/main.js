const restsArr = [
  {
    id: 1,
    title: 'Пицца плюс',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-01.jpg'
  },
  {
    id: 2,
    title: 'Тануки ',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-02.jpg'
  },
  {
    id: 3,
    title: 'FoodBand',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-03.jpg'
  },
  {
    id: 4,
    title: 'Жадина-пицца',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-04.jpg'
  },
  {
    id: 5,
    title: 'Точка еды',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-05.jpg'
  },
  {
    id: 6,
    title: 'PizzaBurger',
    time: 50,
    rating: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'r-06.jpg'
  },
];

const goodsArr = [
  {
    id: 1,
    title: 'Ролл угорь стандарт',
    descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
    price: 250,
    image: 'f-01.jpg'
  },
  {
    id: 2,
    title: 'Калифорния лосось стандарт',
    descr: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
    price: 395,
    image: 'f-02.jpg'
  },
  {
    id: 3,
    title: 'Окинава стандарт',
    descr: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
    price: 250,
    image: 'f-03.jpg'
  },
  {
    id: 4,
    title: 'Цезарь маки хl',
    descr: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
    price: 250,
    image: 'f-04.jpg'
  },
  {
    id: 5,
    title: 'Ясай маки стандарт 185 г',
    descr: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
    price: 250,
    image: 'f-05.jpg'
  },
  {
    id: 6,
    title: 'Ролл с креветкой стандарт',
    descr: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
    price: 250,
    image: 'f-06.jpg'
  },
];

const modal = () => {
  const modalElem = document.querySelector('.modal-overlay');
  const cartBtn = document.querySelector('.cart-js');
  
  const openModal = () => {
    modalElem.classList.add('open');
  };
  const closeModal = () => {
    modalElem.classList.remove('open');
  };
  
  cartBtn.addEventListener('click', openModal);
  
  modalElem.addEventListener('click', ({target}) => {
    if (target === modalElem || target.closest('.cart__close') || target.closest('.cart__cancel')) {
      closeModal();
    }
  });
};

const preload = (container) => {
  container.innerHTML = '<p class="preload">Загружаем...</p>';
};

const rests = () => {
  const productsList = document.querySelector('.rests-js');

  const renderRestCard = ({id, title, time, rating, price, type, image}) => {
    const card = document.createElement('a');
    card.href = `./goods.html?id=${id}`;
    card.className = 'card';
    card.dataset.id = id;

    card.insertAdjacentHTML('afterbegin', `
      <img class="card__img" src="./img/${image}" alt="foto">
      <div class="card__content">
        <div class="card__row">
          <h3 class="card__title">${title}</h3>
          <span class="card__badge">${time}&nbsp;мин</span>
        </div>
        <div class="card__info info">
          <p class="info__rating">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6515 6.24221C14.5553 5.94476 14.2915 5.73349 13.9793 5.70536L9.73947 5.32038L8.06292 1.39623C7.9393 1.10864 7.65776 0.922485 7.34495 0.922485C7.03215 0.922485 6.75061 1.10864 6.62699 1.39691L4.95043 5.32038L0.709893 5.70536C0.398319 5.73417 0.135163 5.94476 0.0384405 6.24221C-0.0582818 6.53966 0.0310434 6.86592 0.266741 7.07158L3.47158 9.88224L2.52655 14.0451C2.45739 14.3512 2.5762 14.6676 2.83016 14.8512C2.96667 14.9498 3.12638 15 3.28744 15C3.4263 15 3.56404 14.9626 3.68766 14.8886L7.34495 12.7028L11.0009 14.8886C11.2684 15.0495 11.6057 15.0349 11.8591 14.8512C12.1131 14.667 12.2318 14.3505 12.1627 14.0451L11.2177 9.88224L14.4225 7.07214C14.6582 6.86592 14.7482 6.54022 14.6515 6.24221Z" fill="currentColor" />
            </svg>
            ${rating}
          </p>
          <p class="info__price">От&nbsp;${price}&nbsp;₽</p>
          <p class="info__prod">${type}</p>
        </div>
      </div>
    `);
    
    return card;
  };

  const renderRests = (data) => {
    productsList.innerHTML = '';
    const cards = data.map(item => renderRestCard(item));
    productsList.append(...cards);
  }

  if (productsList) {
    preload(productsList);
    setTimeout(() => {
      renderRests(restsArr);
    }, 1000);
  }
};

const goods = () => {
  const productsList = document.querySelector('.goods-js');

  const renderGoodsCard = ({id, title, descr, price, image}) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = id;

    card.insertAdjacentHTML('afterbegin', `
      <img class="card__img" src="./img/${image}" alt="foto">
      <div class="card__content">
        <h3 class="goods__title">${title}</h3>
        <p class="goods__descr">${descr}</p>
        <div class="goods__footer">
          <button class="header__btn btn btn-fill">
            В корзину
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4202 10.9672H5.11555L5.58274 10.0156L13.3452 10.0016C13.6077 10.0016 13.8327 9.81406 13.8796 9.55469L14.9546 3.5375C14.9827 3.37969 14.9406 3.21719 14.8374 3.09375C14.7865 3.033 14.7229 2.98407 14.6511 2.95034C14.5793 2.91661 14.5011 2.8989 14.4218 2.89844L4.5468 2.86562L4.46243 2.46875C4.4093 2.21562 4.18118 2.03125 3.9218 2.03125H1.50774C1.36146 2.03125 1.22116 2.08936 1.11773 2.1928C1.01429 2.29624 0.956177 2.43653 0.956177 2.58281C0.956177 2.7291 1.01429 2.86939 1.11773 2.97283C1.22116 3.07626 1.36146 3.13438 1.50774 3.13438H3.47493L3.84368 4.8875L4.75149 9.28281L3.58274 11.1906C3.52204 11.2725 3.48549 11.3698 3.4772 11.4714C3.46892 11.573 3.48924 11.675 3.53586 11.7656C3.62961 11.9516 3.81868 12.0688 4.02805 12.0688H5.0093C4.80011 12.3466 4.68712 12.685 4.68743 13.0328C4.68743 13.9172 5.40618 14.6359 6.29055 14.6359C7.17493 14.6359 7.89368 13.9172 7.89368 13.0328C7.89368 12.6844 7.77805 12.3453 7.5718 12.0688H10.089C9.8798 12.3466 9.76681 12.685 9.76711 13.0328C9.76711 13.9172 10.4859 14.6359 11.3702 14.6359C12.2546 14.6359 12.9734 13.9172 12.9734 13.0328C12.9734 12.6844 12.8577 12.3453 12.6515 12.0688H14.4218C14.7249 12.0688 14.9734 11.8219 14.9734 11.5172C14.9725 11.3711 14.9138 11.2312 14.8102 11.1282C14.7065 11.0251 14.5664 10.9673 14.4202 10.9672V10.9672ZM4.77649 3.95312L13.7734 3.98281L12.8921 8.91719L5.82493 8.92969L4.77649 3.95312ZM6.29055 13.5266C6.01868 13.5266 5.7968 13.3047 5.7968 13.0328C5.7968 12.7609 6.01868 12.5391 6.29055 12.5391C6.56243 12.5391 6.7843 12.7609 6.7843 13.0328C6.7843 13.1638 6.73228 13.2894 6.63969 13.3819C6.54709 13.4745 6.4215 13.5266 6.29055 13.5266V13.5266ZM11.3702 13.5266C11.0984 13.5266 10.8765 13.3047 10.8765 13.0328C10.8765 12.7609 11.0984 12.5391 11.3702 12.5391C11.6421 12.5391 11.864 12.7609 11.864 13.0328C11.864 13.1638 11.812 13.2894 11.7194 13.3819C11.6268 13.4745 11.5012 13.5266 11.3702 13.5266V13.5266Z" fill="currentColor" />
            </svg>
          </button>
          <p class="goods__price">${price}&nbsp;₽</p>
        </div>
      </div>
    `);
    
    return card;
  };

  const renderGoods = (data) => {
    productsList.innerHTML = '';
    const cards = data.map(item => renderGoodsCard(item));
    productsList.append(...cards);
  }

  if (productsList) {
    preload(productsList);
    setTimeout(() => {
      renderGoods(goodsArr);
    }, 1000);
  }
};

modal();
rests();
goods();