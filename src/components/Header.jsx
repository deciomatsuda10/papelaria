function Header({ titulo, links }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>

      <nav className="menu">
        {links.map((link) => (
          <a key={link.destino} href={link.destino}>
            {link.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;