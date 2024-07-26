import style from './style.module.css';
import image from '../../../assets/Images/header_image.jpeg'
function Header() {
    return(
        <div className={style.header}>
            <div className={style.text_container}>
                <h4>Experience a great pastry experience</h4>
                <h2>A SIP OF RWANDA <br/> A TASTE OF EUROPE</h2>
                <p>Our bakery brings together the rich, aromatic flavors of Rwanda with the timeless, delectable treats from Europe. <br /> To make you get the most experience</p>
                <button className={style.button}>Discover More</button>
            </div>
            <div className={style.image_container}>
                <img src={image} alt="Brioche_header_image" />
            </div>
        </div>
    )
} 
export default Header;