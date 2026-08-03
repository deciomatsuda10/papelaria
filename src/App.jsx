import "./App.css";

import cadernos from "./assets/imagens/cadernos.png";
import canetas from "./assets/imagens/canetas.png";
import lapis from "./assets/imagens/lapis.png";
import mochila from "./assets/imagens/mochila.png";
import pastas from "./assets/imagens/pastas-organizadoras.png";
import escritorio from "./assets/imagens/material-escritorio.png";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import ListaProdutos from "./components/ListaProdutos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

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

  const links = [
    { texto: "Início", destino: "#hero" },
    { texto: "Sobre", destino: "#sobre" },
    { texto: "Produtos", destino: "#servicos" },
    { texto: "Contato", destino: "#contato" },
  ];

  return (
    <div className="pagina">

      <Header
        titulo="Papelaria Moderna"
        links={links}
      />

      <main>

        <Hero
          titulo="Tudo para escola, escritório e criatividade"
          descricao="Produtos de qualidade para estudantes, profissionais e empresas."
          textoBotao="Conheça nossos produtos"
          linkBotao="#servicos"
        />

        <Sobre
          titulo="Sobre a Papelaria Moderna"
          descricao="A Papelaria Moderna oferece materiais escolares, itens para escritório, produtos para artesanato e soluções para organização. Nosso objetivo é unir qualidade, variedade e bom atendimento."
        />

        <ListaProdutos produtos={produtos} />

        <Contato
          telefone="(11) 99999-9999"
          email="contato@papelariamoderna.com.br"
          horario="Segunda a sábado - 9h às 18h"
        />

      </main>

      <Footer texto="Papelaria Moderna" />

    </div>
  );
}

export default App;