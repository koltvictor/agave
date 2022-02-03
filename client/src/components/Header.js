import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="headerWrapper">
            <h1>Natural Art</h1>
            <div className="nav">
                <Link to="/home">Home</Link>
                <Link to="/products">Agaves</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}