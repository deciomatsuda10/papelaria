function Hero({ titulo, descricao, textoBotao, linkBotao }) {
  return (
    <section id="hero" className="hero">
      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <a href={linkBotao} className="botao">
        {textoBotao}
      </a>
    </section>
  );
}

export default Hero;