import "./navigation.scss";

const navLinks = [
  {
    name: 'Opportunità di investimento',
    link: 'investment-opportunities'
  },
  {
    name: 'Chi siamo',
    link: 'about-us'
  },
  {
    name: 'Contatti',
    link: 'ontacts'
  },
  {
    name: 'Blog',
    link: 'blog'
  },
  {
    name: 'FAQ',
    link: 'faq'
  },
]

export const Navigation = () => {
  return (
    <nav className="nav">
      <a
        href="/"
        className="nav__logo"
      >
        NEXT INVEST
      </a>

      <div className="nav__right">
        <ul className="nav__right--list">
          {navLinks.map(element => (
            <a
              href={element.link}
              key={element.name}
              className="nav__right--link"
            >
              {element.name}
            </a>
          ))}
        </ul>
        <ul className="nav__right--buttons">
          <button
            type="button"
            className="nav__right--button nav__right--login"
          >
            Accesso
          </button>
          <button
            type="button"
            className="nav__right--button nav__right--register"
          >
            Registro
          </button>
        </ul>
      </div>
    </nav>
  )
}
