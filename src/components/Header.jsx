import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Ścieżka do logo (zaktualizuj zgodnie z lokalizacją pliku)

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Psia Szkoła Logo" className="logo-image" />
          <span className="site-title">Najlepsza Psiapsi</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">O mnie</Link></li>
          <li><Link to="/offer">Oferta</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}
