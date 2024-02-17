/* eslint-disable jsx-a11y/anchor-has-content */
import { ChangeEvent, useState } from "react";
import { scrollToTop } from "../../helper/ScrollToTop";
import "./footer.scss";


const services = ["Marketing via e-mail", "Campagne", "Branding", "Non in linea"];
const about = ["La nostra storia", "Vantaggi", "Squadra", "Carriera"];
const socials = ["facebook", "x", "instagram"];

export const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <footer className="footer">
      <ul className="footer__info">
        <li className="footer__info--wrapper">
          <a
            href="/"
            className="footer__info--logo"
          >
            NEXT INVEST
          </a>

          <a
            href="/copyright"
            className="footer__info--link">
            Copyright © 2024. Tutti i diritti riservati.
          </a>
        </li>
        <li>
          <h3>Servizi</h3>
          <ul className="footer__info--list">
            {services.map(element => (
              <a
                href="/"
                key={element}
                className="footer__info--link"
              >
                {element}
              </a>
            ))}
          </ul>
        </li>
        <li>
          <h3>Circa</h3>
          <ul className="footer__info--list">
            {about.map(element => (
              <a
                href="/"
                key={element}
                className="footer__info--link"
              >
                {element}
              </a>
            ))}
          </ul>
        </li>
        <button
          type="button"
          className="footer__info--button"
          onClick={() => scrollToTop()}
        />
      </ul>

      <div className="footer__bottom">
        <div className="footer__newsletter">
          <h3 className="footer__newsletter--title">
            Iscriviti alla nostra newsletter
          </h3>

          <div className="footer__newsletter--email">
            <input
              type="email"
              value={inputValue}
              onChange={handleChange}
              placeholder="Indirizzo e-mail"
              className="footer__newsletter--input"
            />
            <button
              type="button"
              className="footer__newsletter--button"
              onClick={handleClearInput}
            />

          </div>
        </div>
        <ul className="footer__socials">
          {socials.map(element => (
            <a
              href={`https://${element}.com/`}
              target="_blank"
              className={`footer__socials--link footer__socials--${element}`}
              key={element} rel="noreferrer"
            />
          ))}
        </ul>
      </div>
    </footer>
  )
}
