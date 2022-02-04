import {Link} from 'react-router-dom';

export default function Welcome() {
    return(
        <div className="welcome">
            <Link to="/home" className="welcome">WELCOME</Link><br/>
            <img src="https://www.gardenia.net/storage/app/public/images/detail/Agave%20%E2%80%98Blue%20Flame%E2%80%99%20and%20Agave%20%E2%80%98Blue%20Glow%E2%80%99Optimized.jpg" alt="Agave" className="agave"/>
        </div>
    )
}