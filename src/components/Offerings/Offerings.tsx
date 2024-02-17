import { Crad } from "../Card";
import "./offerings.scss";

import png1 from "../../images/png/Img-1.png"
import png2 from "../../images/png/Img-2.png"
import png3 from "../../images/png/Img-3.png"
import png4 from "../../images/png/Img-4.png"
import png5 from "../../images/png/Img-5.png"
import png6 from "../../images/png/Img-6.png"

const cards = [
  {
    id: 1,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png1,
  },
  {
    id: 2,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png2,
  },
  {
    id: 3,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png3,
  },
  {
    id: 4,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png4,
  },
  {
    id: 5,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png5,
  },
  {
    id: 6,
    name: "Oxalis",
    place: "Roma",
    description: "Leader riconosciuto nell'immersione linguistica e nell'educazione precoce, apre una seconda scuola.",
    security: "Revenue Sharing Note",
    Investment: 1.4,
    Maturity: 48,
    mininum: 100,
    photo: png6,
  },
]

export const Offerings = () => {
  return (
    <section className="offerings">
      <div className="offerings__title">
        <h1 className="offerings__title--headline">
          Offerte aperte agli investimenti
        </h1>

        <p className="offerings__title--description">
          Esplorate le opportunità di investimento pre-verificate disponibili in un numero crescente di categorie industriali.
        </p>
      </div>

      <ul className="offerings__list">
        {cards.map(card => (
          <Crad card={card} />
        ))}
      </ul>

      <button
        type="button"
        className="offerings__all"
      >
        Visualizza tutti i progetti
      </button>
    </section>
  )
}
