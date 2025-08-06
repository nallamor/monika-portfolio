import React from 'react';

const testimonials = [
  {
    quote: "Monika picked up new skills quickly and adapted well to challenges.",
    author: "Srinivasa Kilaru, Vanguard",
    rating: 5,
  },
  {
    quote: "She’s an excellent developer and a great teammate.",
    author: "Adam Dembowski, Sedgwick",
    rating: 5,
  },
  {
    quote: "Monika’s strengths lie in her communication skills and teamwork.",
    author: "Nagarajan Murugesan, BCBS",
    rating: 5,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Monika Roy</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Full Stack Java Developer specializing in secure, scalable systems using Java, Spring Boot, Angular, React & AWS.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-2xl">
          <a href="https://github.com/nallamor" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/monika-roy-nallamothu-955660197" target="_blank">LinkedIn</a>
        </div>
      </div>

      <div className="bg-white text-gray-800 p-6 rounded shadow max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <img src="/monika_avatar.jpg" alt="Monika Avatar" className="w-24 h-24 rounded-full border-4 border-purple-300 object-cover" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">What Others Say</h2>
        {testimonials.map((t, i) => (
          <div key={i} className="border-t border-gray-300 py-4">
            {"★".repeat(t.rating)}
            <p className="italic mb-1">“{t.quote}”</p>
            <p className="font-semibold">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
