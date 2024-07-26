import style from './style.module.css';
import milkshake from '../../../assets/Images/Drinks/shake.png';
import coffee from '../../../assets/Images/Drinks/cofee.webp';
import juices from '../../../assets/Images/Drinks/juices.png';

function Drinks() {
    return (
        <>
            <h2>Drinks to cater your every taste</h2>
            <div className={style.container}>
                <div className={style.des_item}>
                    <img src={milkshake} alt="Milkshake" />
                    <div className={style.text_container}>
                        <h2>Milkshakes for your desired flavor</h2>
                        <p>Our milkshake menu offers a delightful fusion of classic flavors and contemporary twists, crafted to satisfy every palate and preference.</p>
                        <button>Discover Our Milkshakes</button>
                    </div>
                </div>
                <div className={style.des_item}>
                    <div className={style.text_container}>
                        <h2>Juices for your every mood</h2>
                        <p>Our juice menu features a refreshing array of freshly squeezed and blended beverages, combining traditional favorites with innovative flavor combinations to invigorate and delight.</p>
                        <button>Discover Our Juices</button>
                    </div>
                    <img src={juices} alt="Juices" />
                </div>
                <div className={style.des_item}>
                    <img src={coffee} alt="Coffee" />
                    <div className={style.text_container}>
                        <h2>Coffee to energize your day</h2>
                        <p>Our coffee selection offers a range of expertly crafted brews, from rich espressos to smooth lattes, catering to all coffee enthusiasts.</p>
                        <button>Discover Our Coffee</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drinks;