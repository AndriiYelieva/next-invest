/* eslint-disable jsx-a11y/iframe-has-title */
// import { socialNetworks } from '../constants/arraySocial';
import "./contacts.scss";

const contacts = [
  {
    id: 1,
    title: 'Indirizzo',
    description: 'Via Marco e Marcelliano, Roma,',
    link: 'https://maps.app.goo.gl/AdXgAKCKRB5Gdip46',
  },
  {
    id: 2,
    title: 'Numero di telefono',
    description: '(39) 06/4941680',
    link: 'tel:(39) 06/4941680',
  },
  {
    id: 3,
    title: 'Indirizzo e-mail',
    description: 'next.invest@gmail.com',
    link: 'mailto:next.invest@gmail.com',
  }
]

const Contacts = () => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">
        I nostri contatti
      </h1>
      <div className="contacts__wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.7809273183875!2d12.49770101601489!3d41.85925665394301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a702b768ce7%3A0x28aba07efd4428db!2sInfoCert%20-%20Tinexta%20Group!5e0!3m2!1suk!2sua!4v1708104220873!5m2!1suk!2sua"
          width="600"
          height="450"
          loading="lazy"
          className="contacts__map"
        >

        </iframe>
        <div className="contacts__info">
          <ul className="contacts__links">
            {contacts.map(contact => (
              <a
                className="contacts__link"
                href={contact.link}
                target="_blank"
                key={contact.id} rel="noreferrer"
              >
                <h4 className="contacts__linkTitle">{contact.title}</h4>
                <p className="contacts__linkDescription">{contact.description}</p>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contacts;