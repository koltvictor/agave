import {Link} from 'react-router-dom';

export default function Welcome() {
    return(
        <div className="welcome">
            <Link to="/home">WELCOME</Link>
        </div>
    )
}