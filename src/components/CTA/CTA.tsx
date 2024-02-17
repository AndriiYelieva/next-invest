import "./cta.scss";
import cuate from "../../images/png/cuate.png"
import { Button } from "../Button";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__title">
        <h1 className="cta__title--headline">
          Cercate di raccogliere capitali
          per la vostra azienda in crescita?
        </h1>
        <p className="cta__title--description">
          Sia che si tratti di un'espansione o di un'apertura di un nuovo concetto, noi facilitiamo la raccolta di fondi da migliaia di investitori locali.
        </p>

        <Button title="Candidatura online" />
      </div>

      <img
        src={cuate}
        alt="cuate"
        className="cta__images"
      />
    </section>
  )
}

export default CTA;