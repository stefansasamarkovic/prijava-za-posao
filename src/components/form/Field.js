import React from "react";

export default function Field({ type, name, placeholder, label }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
