import { Button } from "../Button";
import { Navigation } from "../Navigation";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header__content">
        <h1 className="header__content--title">
          Investimenti significativi in
          <br />
          Imprese della Main Street
        </h1>

        <p className="header__content--description">
          Sfogliare le offerte di investimento verificate
          <br />
          nelle comunità di tutti gli Stati Uniti.
        </p>

        <Button title="Iniziare" />
      </div>
    </header>
  )
}
