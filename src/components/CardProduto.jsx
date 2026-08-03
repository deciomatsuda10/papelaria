function CardProduto({ nome, imagem, descricao }) {
  return (
    <article className="card">
      <img
        src={imagem}
        alt={nome}
        className="imagem-card"
      />

      <h3>{nome}</h3>

      <p>{descricao}</p>
    </article>
  );
}

export default CardProduto;