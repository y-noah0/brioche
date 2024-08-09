import style from './style.module.css';
import Newsletter from './Newsletter/newsletter';
import FooterSection from './FooterSection/FooterSection';
function Footer() {
    // let currentYear = new Date().getFullYear()

    return(
        <div className={style.app}>
      <Newsletter />
      <FooterSection />
        </div>
    )
}
export default Footer
