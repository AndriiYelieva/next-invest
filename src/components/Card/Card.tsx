import { Card } from "../Types/Card";
import "./card.scss";

import progress from "../../images/png/progress-bar.png"

type Props = {
  card: Card;
}

export const Crad: React.FC<Props> = ({ card }) => {
  return (
    <li className="card" key={card.id}>
      <div className="card__default">
        <img
          src={card.photo}
          alt={card.photo}
          className="card__image"
        />
  
        <div className="card__about">
          <h2 className="card__about--name">
            {card.name}
          </h2>
          <p className="card__about--place">
            {card.place}
          </p>
          <p className="card__about--description">
            {card.description}
          </p>
          <img
            src={progress}
            alt="progress"
            className="card__about--image"
          />
          <p className="card__about--progress">
            <p className="card__about--current">$574,920 </p>  raccolto di $1,000,000
          </p>
        </div>
      </div>

      <div className="card__hover">
        <div className="card__about">
          <h2 className="card__about--name">
            {card.name}
          </h2>
          <p className="card__about--place">
            {card.place}
          </p>
          <p className="card__about--description">
            {card.description}
          </p>
          <img
            src={progress}
            alt="progress"
            className="card__about--image"
          />
          <p className="card__about--progress">
            <p className="card__about--current">$574,920 </p>  raccolto di $1,000,000
          </p>
        </div>

        <div className="card__description">
          <div className="card__description--wrapper">
            <p className="card__description--name">Tipo di sicurezza</p>
            <p className="card__description--date">{card.security}</p>
          </div>
          <div className="card__description--wrapper">
            <p className="card__description--name">Multiplo di investimento</p>
            <p className="card__description--date">{card.Investment}</p>
          </div>
          <div className="card__description--wrapper">
            <p className="card__description--name">Maturità</p>
            <p className="card__description--date">{card.Maturity}</p>
          </div>
          <div className="card__description--wrapper">
            <p className="card__description--name">Min. Investimento</p>
            <p className="card__description--date">{card.mininum}</p>
          </div>
        </div>

        <button
          type="button"
          className="card__button"
        >
          View
        </button>
      </div>
    </li>
  )
}
