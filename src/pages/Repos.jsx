import Header from "../Header";
import { useRef, useState } from "react";

function Repos() {

    const pesquisaRef = useRef(null);
    const [repos, setRepos] = useState([]);

    async function getRepos() {
        const resposta = await fetch(`https://api.github.com/users/${pesquisaRef.current.value}/repos`);
        const dados = await resposta.json();
        setRepos(dados);
    }
    function reposList(re, i) {
        return (<tr key={i}><td id={re.id}>{re.name}</td><td id={re}>{re.url}</td></tr>)
    }

    console.log(repos)
    return (
        <>
            <Header />
            <div className="pagina">
                <div className="pesquisa">
                    <input type="text" ref={pesquisaRef} />
                    <button onClick={(usuario) => getRepos(usuario.target.value)}>pesquisar</button>
                </div>
            </div>

            <div className="repos">
                <h1>Repositórios</h1>
                <table>
                    <tr>
                        <td>Nome</td>
                        <td>URL</td>
                    </tr>
                    {repos.map(reposList)}
                </table>
            </div>
        </>
    )
}

export default Repos;