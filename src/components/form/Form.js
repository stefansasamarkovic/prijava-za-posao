import React from "react";
import Field from "./Field";

export default function Form() {
  return (
    <div>
      <form>
        <Field
          type="text"
          name="full-name"
          placeholder="Unesite ime i prezime"
          label="Ime i prezime"
        />
        <Field
          type="email"
          name="email"
          placeholder="petar.petrovic@gmail.com"
          label="Email"
        />
        <Field
          type="phone"
          name="phone"
          placeholder="+381 XXXXXXX"
          label="Broj telefona"
        />
        <Field
          type="text"
          name="company"
          placeholder="Oktopeak"
          label="Naziv kommpanije"
        />
        <Field
          type="text"
          name="position"
          placeholder="Junior Front-end developer"
          label="Pozicija"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
