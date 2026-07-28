import "./App.css";

import fundo from "./assets/imagens/fundo-vento.png";
import cadernos from "./assets/imagens/cadernos.png";
import canetas from "./assets/imagens/canetas.png";
import lapis from "./assets/imagens/lapis.png";
import mochila from "./assets/imagens/mochila.png";
import pastas from "./assets/imagens/pastas-organizadoras.png";
import escritorio from "./assets/imagens/material-escritorio.png";

function App() {
  const produtos = [
    {
      nome: "Cadernos",
      imagem: cadernos,
      descricao: "Diversos tamanhos e modelos para estudo.",
    },
    {
      nome: "Canetas",
      imagem: canetas,
      descricao: "Esferográficas, gel e marcadores coloridos.",
    },
    {
      nome: "Lápis e Borrachas",
      imagem: lapis,
      descricao: "Produtos para desenho e uso escolar.",
    },
    {
      nome: "Mochilas",
      imagem: mochila,
      descricao: "Mochilas resistentes para todas as idades.",
    },
    {
      nome: "Pastas Organizadoras",
      imagem: pastas,
      descricao: "Organização prática para documentos.",
    },
    {
      nome: "Material de Escritório",
      imagem: escritorio,
      descricao: "Grampeadores, blocos, clips e muito mais.",
    },
  ];

  return (
    <div
      className="pagina"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <header className="cabecalho">
        <h1>Papelaria Moderna</h1>

        <nav className="menu">
          <a href="#hero">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Produtos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <h2>Tudo para escola, escritório e criatividade</h2>

          <p>
            Produtos de qualidade para estudantes,
            profissionais e empresas.
          </p>

          <a href="#servicos" className="botao">
            Conheça nossos produtos
          </a>
        </section>

        <section id="sobre" className="sobre">
          <h2>Sobre a Papelaria Moderna</h2>

          <p>
            A Papelaria Moderna oferece materiais escolares,
            itens para escritório, produtos para artesanato e
            soluções para organização. Nosso objetivo é unir
            qualidade, variedade e bom atendimento.
          </p>
        </section>

        <section id="servicos" className="servicos">
          <h2>Nossos Produtos</h2>

          <div className="lista-cards">
            {produtos.map((produto) => (
              <article className="card" key={produto.nome}>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="imagem-card"
                />

                <h3>{produto.nome}</h3>

                <p>{produto.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="contato">
          <h2>Contato</h2>

          <p>Telefone: (11) 99999-9999</p>

          <p>Email: contato@papelariamoderna.com.br</p>

          <p>Segunda a sábado - 9h às 18h</p>
        </section>
      </main>

      <footer className="rodape">
        <p>Papelaria Moderna</p>
      </footer>
    </div>
  );
}

export default App;