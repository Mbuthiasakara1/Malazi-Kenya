import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import "../components/ContactForm.css";
import "./Contact.css";
import Footer from "../components/Footer";


function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <div className="info-box">
            <img src="icons/phone.svg" alt="phone-icon" />

            <h3>Phone</h3>
            <p>(+254)705268720</p>
          </div>
          <div className="info-box">

            <img src="icons/mail.svg" alt="phone-icon" />

            <h3>Mail Box</h3>
            <p>infomalazikenya@gmail.com</p>
          </div>
          <div className="info-box">
            <img src="icons/Group.svg" alt="mail-icon" />

            <h3>Location</h3>
            <p>Bloomfield Moringa Road, Kilimani, Nairobi.</p>
          </div>
        </div>

        <div className="contact-form-map">
          <div className="form-container">
            <ContactForm />
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7983853397336!2d36.775190075504746!3d-1.2955571356374396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0b49aca23b%3A0x64b1629aa01be05a!2sBloomfield%20Apartments!5e0!3m2!1sen!2ske!4v1736773125316!5m2!1sen!2ske"
              width="600"
              height="460"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
