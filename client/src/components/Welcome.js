import {Link} from 'react-router-dom';


export default function Welcome({Image1}) {
    return(
        <div className="welcomeWrapper">
            <Link to="/home" className="welcome">Enter JKM Gardens</Link><br/>
            <img src={Image1} className="welcomeImg" alt="garden logo" />
        </div>
    )
}