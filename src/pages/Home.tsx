import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message envoyé : " + message);
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-6xl font-bold mb-4">
          YOURI <span className="text-blue-400">FIGUIÉ</span>
        </h1>

        <p className="text-lg text-gray-400 mb-8">
          Étudiant en Génie Électrique et Informatique Industrielle
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
            Télécharger CV
          </button>

          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
            Me contacter
          </button>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="mt-24 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Qui suis-je</h2>

        <p className="text-gray-400">
          Je suis étudiant en BUT GEII à Montpellier.  
          Je m'intéresse aux systèmes embarqués, à l'électronique
          et à la robotique.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mt-24 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="p-3 bg-black border border-gray-700"
          />

          <input
            type="email"
            placeholder="Votre email"
            className="p-3 bg-black border border-gray-700"
          />

          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 bg-black border border-gray-700"
          />

          <button
            type="submit"
            className="bg-blue-500 p-3 hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </section>

    </main>
  );
}
