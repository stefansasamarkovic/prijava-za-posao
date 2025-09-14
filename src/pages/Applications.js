import React, { useState } from "react";

const initialApplications = [
  {
    fullName: "Petar Petrovic",
    email: "petarpetrovic@gmail.com",
    phone: "+381 1234567",
    company: "Oktopeak",
    position: "Junor Front-end developer",
    status: "pending",
  },
  {
    fullName: "Marko Markovic",
    email: "markomarkovic@gmail.com",
    phone: "+381 1231234",
    company: "Oktopeak",
    position: "Junor Front-end developer",
    status: "declined",
  },
];

export default function Applications() {
  const [applications, setApplications] = useState(initialApplications);
  const [filter, setFilter] = useState("default");

  const setStatus = function (newStatus, email) {
    setApplications((previousApplications) =>
      previousApplications.map((application) =>
        application.email === email
          ? { ...application, status: newStatus }
          : application
      )
    );
  };

  const filteredAplications =
    filter === "default"
      ? applications
      : applications.filter((item) => item.status === filter);

  return (
    <div>
      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="accepted">Acceepted</option>
        <option value="declined">Declined</option>
        <option value="pending">Pending</option>
      </select>
      <ul>
        {filteredAplications.map((item) => (
          <li key={item.email}>
            {item.fullName}
            {item.email}
            {item.phone}
            {item.company}
            {item.position}

            <select
              value={item.status}
              onChange={(event) => setStatus(event.target.value, item.email)}
            >
              <option value="pending">Pending</option>
              <option value="accepted">Acceepted</option>
              <option value="declined">Declined</option>
            </select>
            {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
