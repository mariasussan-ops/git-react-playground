
import ReactLogo from '../assets/react-logo.png'

export default function Header() {
    return (
        <header className="header">

            <img src={ReactLogo} className="titleImg" alt="React logo" />
            <h1>Chef Claude</h1>

        </header>
    )
}