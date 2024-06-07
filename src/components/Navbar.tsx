import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExplosion } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return <header>
        <div className="nav-logo">
            {/* https://fontawesome.com/icons/explosion?f=classic&s=solid  */}
            <FontAwesomeIcon icon={faExplosion} />
            <h1>Journey To Proficiency</h1>
        </div>
        <nav>
            <ul className="navbar-horizontal-display-layout">
                <i className="fa-solid fa-bars"></i>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
            </ul>
        </nav>
    </header>
}