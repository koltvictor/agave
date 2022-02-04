import {Link} from 'react-router-dom';


export default function Welcome({Image1}) {
    return(
        <div>
            <h1 className="welcomeHead">WELCOME</h1><br/>
            <Link to="/home" className="welcome">Enter JKM Gardens</Link>
            <img src={Image1} />
        </div>
    )
}