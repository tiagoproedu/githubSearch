import { Link } from "react-router-dom";
function Header() {

    return (
        <header>
            <div className="title">
                <h1>Hub College</h1>
            </div>
            <nav className="navButton">
                <Link to="/"><button>Perfis</button></Link>
                <Link to="/repositorios"><button>Repositorios</button></Link>
            </nav>
        </header>
    )
}

export default Header;