import React, { useEffect, useState } from "react";

// const initialApplications = [
//   {
//     fullName: "Petar Petrovic",
//     email: "petarpetrovic@gmail.com",
//     phone: "+381 60 1234567",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "pending",
//   },
//   {
//     fullName: "Marko Markovic",
//     email: "markomarkovic@gmail.com",
//     phone: "+381 61 1231234",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "declined",
//   },
//   {
//     fullName: "Bogdan Bogdanovic",
//     email: "bogdanbogdanovic@gmail.com",
//     phone: "+381 62 3215649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "declined",
//   },
//   {
//     fullName: "Stefan Stefanovic",
//     email: "stefanstefanovic@gmail.com",
//     phone: "+381 63 3835649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "accepted",
//   },
//   {
//     fullName: "Jovan Jovanovic",
//     email: "jovanjovanovic@gmail.com",
//     phone: "+381 64 3219649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "declined",
//   },
//   {
//     fullName: "Ivan Ivanovic",
//     email: "ivanivanovic@gmail.com",
//     phone: "+381 65 0355649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "pending",
//   },
//   {
//     fullName: "Ana Ivanovic",
//     email: "anaivanovic@gmail.com",
//     phone: "+381 65 0355229",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "pending",
//   },
//   {
//     fullName: "Milica Petrovic",
//     email: "milicapetrovic@gmail.com",
//     phone: "+381 65 0314649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "pending",
//   },
//   {
//     fullName: "Kristina Smiljanic",
//     email: "kristinasmiljanic@gmail.com",
//     phone: "+381 65 1855649",
//     company: "Oktopeak",
//     position: "Junior Front-end developer",
//     status: "pending",
//   },
// ];

export default function Applications() {
  const [applications, setApplications] = useState(
    JSON.parse(
      window.localStorage.getItem("applications")
        ? window.localStorage.getItem("applications")
        : "[]"
    )
  );
  const [filter, setFilter] = useState("default");

  const setStatus = (newStatus, email) => {
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

  useEffect(() => {
    window.localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex justify-center">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="default">Sve prijave</option>
          <option value="accepted">Prihvaćene</option>
          <option value="declined">Odbijene</option>
          <option value="pending">Na čekanju</option>
        </select>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAplications.map((item) => (
          <li
            key={item.email}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.fullName}
              </h3>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Email:</span> {item.email}
              </p>
              <p>
                <span className="font-medium">Telefon:</span> {item.phone}
              </p>
              <p>
                <span className="font-medium">Kompanija:</span> {item.company}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <select
                value={item.status}
                onChange={(event) => setStatus(event.target.value, item.email)}
                className="px-3 py-2 rounded-lg border border-gray-300 shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="pending">Na čekanju</option>
                <option value="accepted">Prihvaćena</option>
                <option value="declined">Odbijena</option>
              </select>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === "accepted"
                    ? "bg-green-100 text-green-700"
                    : item.status === "declined"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status === "accepted"
                  ? "Prihvaćena"
                  : item.status === "declined"
                  ? "Odbijena"
                  : "Na čekanju"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
