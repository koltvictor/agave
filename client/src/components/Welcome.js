import {Link} from 'react-router-dom';

export default function Welcome() {
    return(
        <div className="welcome">
            <Link to="/home" className="welcome">WELCOME</Link>
        </div>
    )
}