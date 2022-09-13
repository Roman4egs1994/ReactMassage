import logo from './img-header/logo1.svg';
import './styles-header/header.css';


export const Header = () => {
    return (
        <header className="page-header">
                <div сlassName="logo">
                    <img lassName="header-logo" src={logo} alt=""/>
                </div>
                <nav className="nav-list">
                    <div сlassName="page-nav-item">
                        <a className="nav-list_anhor "href="/#">Обо мне</a>
                    </div>
                    <div className="page-nav-item">
                        <a className="nav-list_anhor "href="/#">Услуги</a>
                    </div>
                    <div className="page-nav-item">
                        <a className="nav-list_anhor "href="/#">Блог</a>
                    </div>
                    <div className="page-nav-item">
                        <a className="nav-list_anhor "href="/#">Закажите звонок</a>
                    </div>
                </nav>
        </header>  
    );
};