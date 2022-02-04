import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="headerWrapper">
            <h1 className="headerTitle">Natural Art</h1>
            <div className="nav">
                <Link to="/home" className="home">Home</Link>
                <Link to="/products" className="agaves">Agaves</Link>
                <Link to="/about" className="about">About</Link>
                <Link to="/contact" className="contact">Contact</Link>
            </div>
        </div>
    )
}