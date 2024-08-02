import { useState } from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={style.Navigation}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <div className={style.Navigation_brand}>
                <h1>Brioche</h1>
            </div>
            <div className={`${style.Navigation_menu} ${isMenuOpen ? style.open : ''}`}>
                <div className={style.Navigation_link}>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='about'>about</NavLink></li>
                        <li><a href="https://brioche.beehiiv.com/">Blog</a></li>
                        <li><a href="contact" >Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.Navigation_social}>
                <button className={style.menu} >View Menu</button>
            </div>
            <div className={style.burger_menu} onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ color: 'white' }}></i>
            </div>
        </div>
    )
}

export default Navigation;