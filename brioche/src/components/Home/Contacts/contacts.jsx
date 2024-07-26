import style from './style.module.css';

const Contact = () => {
    return (
        <section id="contact" className={style.contact_section}>
            <h2>Contact</h2>
            <form className={style.contact_form}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" className={style.button}>Contact Us</button>
            </form>
        </section>
    );
};

export default Contact;
