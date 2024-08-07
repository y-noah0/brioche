import gallery_images from './gallery_images';
import style from './style.module.css';

function Gallery(){
    return (
        <div className={style.Gallery}>
            <div className={style.text_container}>
                <h4>Instagram</h4>
                <h2>Photo Gallery</h2>
                <p>Discover our bakery's latest photography</p>
                <button className={style.button}>Discover More</button>
            </div>
            <div className={style.image_container}>
                <img src={gallery_images[1]} alt="Brioche_gallery" />
                <img src={gallery_images[2]} alt="Brioche_gallery" />
                <img src={gallery_images[3]} alt="Brioche_gallery" />
                <img src={gallery_images[0]} alt="Brioche_gallery" />
            </div>
        </div>
    )
}
export default Gallery;