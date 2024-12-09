export default function Offer() {
  const offers = [
    { id: "obedience", title: "Posłuszeństwo", image: "/images/obedience.jpg" },
    { id: "rally-o", title: "Rally-o", image: "/images/rally-o.jpg" },
    { id: "puppy-school", title: "Przedszkole", image: "/images/puppy-school.jpg" },
    { id: "fitness", title: "Fitness", image: "/images/fitness.jpg" },
    { id: "social-walks", title: "Spacery", image: "/images/social-walks.jpg" },
    { id: "petsitting", title: "Petsitting", image: "/images/petsitting.jpg" },
  ];

  return (
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
  );
}
