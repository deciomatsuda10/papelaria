import CardProduto from "./CardProduto";

function ListaProdutos({ produtos }) {
  return (
    <section id="servicos" className="servicos">
      <h2>Nossos Produtos</h2>

      <div className="lista-cards">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.nome}
            nome={produto.nome}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}
      </div>
    </section>
  );
}
export default ListaProdutos;