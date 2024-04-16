import { useState, useRef } from "react";

function Perfis() {
  const pesquisaRef = useRef(null);
  const [usuario, setUsuario] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  async function getUsuario() {
    const resposta = await fetch(`https://api.github.com/users/${pesquisaRef.current.value}`);
    const dados = await resposta.json();
    setUsuario(dados);
    setMostrar(true);
  }

  return (
    <>
      <div className="paginaPerfis">
        <div className="pesquisa">
          <input type="text" ref={pesquisaRef} />
          <button onClick={(evento) => getUsuario(evento.target.value)}>pesquisar</button>
        </div>
        {mostrar && (
          <>
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
            </div>
            <div className="infoNum">
              <div>
                <h1>{usuario.public_repos}</h1>
                <h3>Repositorios</h3>
              </div>
              <div>
                <h1>{usuario.following}</h1>
                <h3>Seguindo</h3>
              </div>
              <div>
                <h1>{usuario.followers}</h1>
                <h3>Seguidores</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Perfis;