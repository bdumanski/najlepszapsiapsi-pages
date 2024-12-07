export default function Contact() {
    return (
      <section className="contact">
        <div className="contact-info">
          <h2>Kontakt</h2>
          <p>Lokalizacja: ul. Szkolna 10, Warszawa</p>
          <p>Telefon: 123 456 789</p>
          <p>Email: kontakt@psiaszkola.pl</p>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Imię i nazwisko:
            <input type="text" name="name" required />
          </label>
          <label>
            Adres email:
            <input type="email" name="email" required />
          </label>
          <label>
            Nr telefonu:
            <input type="tel" name="phone" />
          </label>
          <label>
            Treść wiadomości:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Wyślij</button>
        </form>
      </section>
    );
  }
  