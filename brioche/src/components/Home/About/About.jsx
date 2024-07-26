import style from './style.module.css';
import images from '../../../assets/Images/pngegg.png';
// import image_back from '../../assets/Images/about_background_image.jpg';

function About() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.about}>
                    <h2>About Us</h2>
                    <p>Brioche is a French inspired bakery and restaurant dedicated to offering quality fresh pastries, savoury treats, coffees, and other beverages to customers...</p>
                    <button>Learn More</button>
                </div>
                <div className={style.image_container}>
                    <img src={images} alt="Brioche Bakery" />
                </div>
                <div className={style.about}>
                    <h2>Our History</h2>
                    <p>Brioche was founded by a trio of entrepreneurs inspired by their love for food and an untamed desire to bring Rwanda the best version of French recipes with an African twist to it...</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default About;
