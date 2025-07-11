import React, { useEffect, useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Enjoy a Joke 😂
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <p className="text-lg text-gray-700">{joke}</p>
          )}
        </div>
        <button
          onClick={fetchJoke}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Get Another Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
