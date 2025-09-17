import React, { useState } from "react";
import Field from "./Field";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const onFromSubmit = function (event) {
    event.preventDefault();
    setErrorMessage("");
    let message = "";

    if (fullName === "") {
      message += "Unesite puno ime i prezime. ";
    }
    if (email === "") {
      message += "Unesite email. ";
    }
    if (phone === "") {
      message += "Unesite broj telefona. ";
    }
    if (company === "") {
      message += "Unesite naziv kompanije. ";
    }
    if (position === "") {
      message += "Unesite naziv pozicije. ";
    }

    if (message !== "") {
      setErrorMessage(message);
      return;
    }

    const applications = JSON.parse(
      window.localStorage.getItem("applications")
        ? window.localStorage.getItem("applications")
        : "[]"
    );

    applications.push({
      fullName,
      email,
      phone,
      company,
      position,
      status: "pending",
    });

    window.localStorage.setItem("applications", JSON.stringify(applications));

    alert("Submit successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={onFromSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Prijava
        </h2>
        <Field
          value={fullName}
          setValue={setFullName}
          type="text"
          name="full-name"
          placeholder="Unesite ime i prezime"
          label="Ime i prezime"
        />
        <Field
          value={email}
          setValue={setEmail}
          type="email"
          name="email"
          placeholder="petar.petrovic@gmail.com"
          label="Email"
        />
        <Field
          value={phone}
          setValue={setPhone}
          type="phone"
          name="phone"
          placeholder="+381 XXXXXXX"
          label="Broj telefona"
        />
        <Field
          value={company}
          setValue={setCompany}
          type="text"
          name="company"
          placeholder="Oktopeak"
          label="Naziv kommpanije"
        />
        <Field
          value={position}
          setValue={setPosition}
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
        <p className="text-red-600">{errorMessage}</p>
      </form>
    </div>
  );
}
