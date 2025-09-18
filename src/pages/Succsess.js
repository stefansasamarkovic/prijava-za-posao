import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import OpenAI from "openai";

export default function Succsess() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fullName = query.get("fullName");

  const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const calledRef = useRef(false);

  const getSuccessMessage = async function () {
    const response = await client.responses.create({
      model: "gpt-5",
      input: `Napisi zahvalnicu za prijavu za posao. Ime kandidata je ${fullName}`,
    });

    if (response.output_text) {
      setSuccessMessage(response.output_text);
    } else {
      setSuccessMessage(
        `Napisi zahvalnicu za prijavu za posao. Naziv korisnika koji je poslao prijavu je ${fullName}`
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!calledRef.current) {
      calledRef.current = true;
      getSuccessMessage();
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-xl p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Generišem poruku...</p>
          </div>
        ) : (
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
