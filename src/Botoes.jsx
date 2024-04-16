import { Link } from "react-router-dom";

function Botoes() {
    return (
        <>
            <Link to="/"><button>Perfis</button></Link>
            <Link to="/repositorios"><button>Repositorios</button></Link>
        </>
    )
}

export default Botoes;