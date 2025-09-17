import React from "react";
import Field from "./Field";

export default function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Prijava
        </h2>
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
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
