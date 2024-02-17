import { useState } from "react";
import "./contactForm.scss";


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = '/thank-you';
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-digit characters from the input value
    const cleanedValue = e.target.value.replace(/\D/g, '');
    setPhone(cleanedValue);
  };

  return (
    <section className="form">
      <div className="form__title">
        <h1 className="form__title--headline">
          Potete lasciarci i vostri dati.
        </h1>
        <p className="form__title--description">
          vi contatteremo più tardi
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="form__wrapper"
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form__input"
          placeholder="Nome"
        />

        <input
          type="text"
          id="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form__input"
          placeholder="E-mail"
        />

        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneNumberChange}
          maxLength={10}
          required
          className="form__input"
          placeholder="Numero di telefono"
        />

        <button
          type="submit"
          className="form__button"
        >
          Inviare
        </button>
      </form>
    </section>
  );
}
