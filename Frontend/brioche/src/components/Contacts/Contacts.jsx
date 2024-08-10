// ContactsPage.jsx
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './ContactsPage.module.css';
import Navigation from '../Home/Nav/Navigation';
import Footer from '../Footer/FooterSection/FooterSection';
import gallery_images from '../Home/Gallery/gallery_images';

const locations = [
  {
    name: "Kigali Central",
    address: "123 Peace Avenue, Kigali, Rwanda",
    phone: "+250 78 123 4567",
    email: "kigali@briochebakery.com",
    image: `${gallery_images[1]}`
  },
  {
    name: "Paris Boutique",
    address: "45 Rue du Boulanger, 75001 Paris, France",
    phone: "+33 1 23 45 67 89",
    email: "paris@briochebakery.com",
    image: `${gallery_images[0]}`
  },
  {
    name: "London Tea Room",
    address: "78 Baker Street, London W1U 6AG, UK",
    phone: "+44 20 1234 5678",
    email: "london@briochebakery.com",
    image: `${gallery_images[2]}`
  },
  {
    name: "New York Cafe",
    address: "567 Broadway, New York, NY 10012, USA",
    phone: "+1 212-555-6789",
    email: "newyork@briochebakery.com",
    image: `${gallery_images[3]}`
  },
  {
    name: "Tokyo Patisserie",
    address: "1-2-3 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan",
    phone: "+81 3-1234-5678",
    email: "tokyo@briochebakery.com",
    image: `${gallery_images[2]}`
  }
];

const ContactsPage = () => {
  return (
    <div className={styles.container}>
        <Navigation />
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Our Locations</h2>
        <p className={styles.pageDescription}>Visit us at one of our international locations and experience the perfect blend of Rwandan and European flavors.</p>

        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <div key={index} className={styles.locationCard}>
              <img src={location.image} alt={location.name} className={styles.locationImage} />
              <h3 className={styles.locationName}>{location.name}</h3>
              <div className={styles.locationDetails}>
                <p className={styles.locationAddress}>
                  <MapPin size={16} className={styles.icon} />
                  {location.address}
                </p>
                <p className={styles.locationPhone}>
                  <Phone size={16} className={styles.icon} />
                  {location.phone}
                </p>
                <p className={styles.locationEmail}>
                  <Mail size={16} className={styles.icon} />
                  {location.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactsPage;