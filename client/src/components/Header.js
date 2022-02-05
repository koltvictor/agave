import Image2 from '../bwagave.png'

export default function Header() {
    return(
        <div className="headerWrapper">
            <img className="headerImage" src={Image2} alt="agave"/>
            <h1 className="headerTitle">Natural Art</h1>
            <div className="nav">
                <a href="/home" className="home">Home</a>
                <a href="/products" className="agaves">Agaves</a>
                <a href="/about" className="about">Gallery</a>
                <a href="/contact" className="contact">Contact</a>
            </div>
        </div>
    )
}