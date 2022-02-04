import {Link} from 'react-router-dom';

export default function Welcome() {
    return(
        <div>
            <h1>WELCOME</h1><br/>
            <Link to="/home" className="welcome">Enter JKM Gardens</Link>
        </div>
    )
}