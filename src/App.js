import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page">

    <header class="page-header">
        <div class="logo">
            <img class="header-logo" src="img/logo.svg"></img>
        </div>

        <nav class="nav-list">
            <div class="page-nav-item"><a class="nav-list_anhor "href="#">Обо мне</a></div>
            <div class="page-nav-item"><a class="nav-list_anhor "href="#">Услуги</a></div>
            <div class="page-nav-item"><a class="nav-list_anhor "href="#">Блог</a></div>
            <div class="page-nav-item"><a class="nav-list_anhor "href="#">Закажите звонок</a></div>
            
        </nav>

     
    </header>  

<main class="header-main">
    <div class="left-part">
        <h1 class="about-me"><strong class="i-am">Я разрабатываю продукты,</strong> которые радуют и вдохновляют людей</h1>
        <p class="me-descriprion">Привет! Меня зовут Джейк, я продуктовый дизайнер из Берлина.
        Я создаю удобные интерфейсы для быстрорастущих стартапов.</p>

        <div class="buttons-menu">
            <button class="btn-one book-a-call">Заказать звонок</button>
            <button class="btn download-CV">Скачать резюме</button>
        </div>
    </div>

    <img class="right-part">
        <img class="photo-profile" src="img/profilePhoto.png">
    </div>
</main>

<div class="trusted-by">
    <p class="partners-text">Нам доверяют</p>
    <div class="partners-logo">
        <img class="partner one"  src="img/Partners_one.svg">
        <img class="partner two"  src="img/Partners_two.svg">
        <img class="partner free" src="img/Partners_free.svg">
        <img class="partner four" src="img/Partners_four.svg">
    </div>
</div>


</div>
  );
}

export default App;
