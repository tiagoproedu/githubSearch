import { useState, useRef } from "react";
import Header from "../Header";

function Perfis() {
  const pesquisaRef = useRef(null);
  const [usuario, setUsuario] = useState([]);

  async function getUsuario() {
    const resposta = await fetch(`https://api.github.com/users/${pesquisaRef.current.value}`);
    const dados = await resposta.json();
    setUsuario(dados);
  }

  return (
    <>
      <Header />
      <div className="pagina">
        <div className="pesquisa">
          <input type="text" ref={pesquisaRef} />
          <button onClick={(evento) => getUsuario(evento.target.value)}>pesquisar</button>
        </div>

        <div className="perfil">
          <div className="infoPessoal">
            <img src={usuario.avatar_url} />
            <h1>{usuario.name}</h1>
            <h5>{usuario.bio}</h5>
          </div>
          <div className="infoGeral">
            <h4>{usuario.location}</h4>
            <h4>{usuario.html_url}</h4>
          </div>
          <div className="infoNum">
            <div className="repos">
              <h1>{usuario.public_repos}</h1>
              <h3>repositórios</h3>
            </div>
            <div className="following">
              <h1>{usuario.following}</h1>
              <h3>seguindo</h3>
            </div>
            <div className="followers">
              <h1>{usuario.followers}</h1>
              <h3>seguidores</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Perfis;