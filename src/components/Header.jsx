import { Link } from "react-router-dom"

export default function Header() {
    const navStyle = {
        fontSize: "24px",
        textAlign: "left",
    }

    const linkStyle = {
        textDecoration: "none",
        color: "black", 
    }
    return (
        <nav style={navStyle}>
            <Link to="/menu" style={linkStyle}>
                <div >Dat POS</div>
            </Link>
        </nav>
    )
}