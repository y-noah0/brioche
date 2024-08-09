import style from './style.module.css';

function Description() {
    return (
        <div className={style.container}>
            <div className={style.des_item}>
                <img src="https://static.wixstatic.com/media/29e45e_7e0ee7cdd3494f269d022b667bac6b6c~mv2.png/v1/fill/w_285,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/jpkay_a_beautiful_artisan_sourdough_bread_black_background_mode_59174358-5d97-49d0-9267-3c.png" alt="Brioche bread" />
                <div className={style.text_container}>
                    <h2>Indulge in our great pastry</h2>
                    <p>Our pastry menu is a tantalizing blend of traditional French techniques and modern innovations, catering to all tastes.</p>
                    <button>Discover Our Pastry</button>
                </div>
            </div>
            <div className={style.des_item}>
                <img src="https://static.wixstatic.com/media/29e45e_3db2746b346744afa19662109bf8ba33~mv2.png/v1/fill/w_285,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/enhanced-image%20(7).png" alt="Brioche" />
                <div className={style.text_container}>
                    <h2>Quality vegetarian recipes</h2>
                    <p>Our vegetarian menu offers a variety of delicious, nutritious, and healthy options, catering to all vegetarians and vegans.</p>
                    <button>Discover Our Vegetarian Menu</button>
                </div>
            </div>
            <div className={style.des_item}>
                <img src="https://static.wixstatic.com/media/29e45e_e37759ae6ba04190b036d0a9738204ab~mv2.png/v1/fill/w_285,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/enhanced-image%20(6).png" alt="Brioche" />
                <div className={style.text_container}>
                    <h2>Beef and Non-vegetarian flesh</h2>
                    <p>Our non-vegetarian menu offers a variety of delicious, nutritious, and healthy options, catering to all non-vegetarians and vegans.</p>
                    <button>Discover Our Carnivorous Menu</button>
                </div>
            </div>
        </div>
    );
}

export default Description;
