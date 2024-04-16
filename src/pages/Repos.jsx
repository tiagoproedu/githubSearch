import { useRef, useState } from "react";

function Repos() {

    const pesquisaRef = useRef(null);
    const [repos, setRepos] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    async function getRepos() {
        const resposta = await fetch(`https://api.github.com/users/${pesquisaRef.current.value}/repos`);
        const dados = await resposta.json();
        setRepos(dados);
        setMostrar(true);
    }
    function reposList(re, i) {
        return (<tr key={i}><td id={re.id}>{re.name}</td><td id={re}>{re.url}</td></tr>)
    }

    console.log(repos)
    return (
        <>
            <div className="paginaRepos">
                <div className="pesquisa">
                    <input type="text" ref={pesquisaRef} />
                    <button onClick={(usuario) => getRepos(usuario.target.value)}>pesquisar</button>
                </div>
                {mostrar && (
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
                )}
            </div>
        </>
    )
}

export default Repos;