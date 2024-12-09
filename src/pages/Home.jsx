import Hero from "../components/Hero";

export default function Home() {
  const offers = [
    { id: "obedience", title: "Posłuszeństwo", image: "/images/obedience.jpg" },
    { id: "rally-o", title: "Rally-o", image: "/images/rally-o.jpg" },
    { id: "puppy-school", title: "Przedszkole", image: "/images/puppy-school.jpg" },
    { id: "fitness", title: "Fitness", image: "/images/fitness.jpg" },
    { id: "social-walks", title: "Spacery", image: "/images/social-walks.jpg" },
    { id: "petsitting", title: "Petsitting", image: "/images/petsitting.jpg" },
  ];

  return (
    <>
      <Hero />
      <section className="about">
        <div className="about-image">
          <img src="/images/about-dog.jpg" alt="Pies" />
        </div>
        <div className="about-content">
          <p>
            Mam na imię Natalia – jestem certyfikowanym trenerem i behawiorystą psów. 
            Z radością witam Cię w mojej psiej szkole! Moim marzeniem jest tworzyć to miejsce 
            razem z Wami – świadomymi opiekunami, którzy chcą zbudować ze swoim psem relację 
            opartą na zaufaniu i wzajemnym zrozumieniu.
          </p>
        </div>
      </section>

      <section className="offer">
        <h2>Nasza oferta</h2>
        <div className="offer-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-item">
              
                <img src={offer.image} alt={offer.title} />
              
              <h3>{offer.title}</h3>
              <a href={`/offer#${offer.id}`} className="offer-link">Dowiedz się więcej</a>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-image">
          <img src="/images/why-best-dog.jpg" alt="Pies" />
        </div>
        <div className="about-content">
          <p>
            Nasze kursy są realizowane w oparciu o starannie przygotowany program szkoleniowy, 
            który na bieżąco modyfikujemy pod potrzeby uczestników. Podczas zajęć kładziemy duży nacisk 
            na umiejętności potrzebne w życiu codziennym oraz zagadnienia, które mają na celu zbudowanie 
            silnej więzi i pełnej zrozumienia relacji między psem, a jego opiekunem.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="contact-left">
          <h3>Kontakt</h3>
          <p><strong>Lokalizacja:</strong> ul. Psia 123, 00-000 Warszawa</p>
          <p><strong>Telefon:</strong> +48 123 456 789</p>
          <p><strong>Email:</strong> kontakt@psiaszkola.pl</p>
        </div>
        <div className="contact-right">
          <h3>Formularz kontaktowy</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adres email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Nr telefonu</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Treść wiadomości</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </section>

    </>
  );
}
