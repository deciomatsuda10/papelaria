function Contato({ telefone, email, horario }) {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>

      <p>Telefone: {telefone}</p>

      <p>Email: {email}</p>

      <p>{horario}</p>
    </section>
  );
}

export default Contato;