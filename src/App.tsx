import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Monika picked up new skills quickly and adapted well to challenges. She implemented secure, cloud-native solutions and was dependable and collaborative throughout the project.",
    author: "Srinivasa Kilaru, Vanguard",
    rating: 5
  },
  {
    quote: "She’s an excellent developer and a great teammate. Monika participated in all calls, shared logs, and always ensured the backend logic was solid.",
    author: "Adam Dembowski, Sedgwick",
    rating: 5
  },
  {
    quote: "Monika’s strengths lie in her communication skills and teamwork. She was independent, yet very collaborative when needed, and handled UI development very well.",
    author: "Nagarajan Murugesan, BCBS",
    rating: 5
  },
  {
    quote: "Monika is incredibly diligent, learns fast, and executes well. She delivers results even with minimal supervision.",
    author: "LinkedIn Recommendation",
    rating: 5
  },
  {
    quote: "Monika is a fast learner, took ownership and completed development without handholding. Her attitude, commitment, and timely delivery impressed the team.",
    author: "Aswin Medarametla, Senior Developer",
    rating: 5
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (count: number) => (
    <div className="flex justify-center mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md bg-opacity-20 backdrop-blur-lg">
        <h1 className="text-3xl font-bold">Monika Roy Nallamothu</h1>
        <nav className="space-x-4 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#journey" className="hover:underline">My Journey</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <div className="flex justify-center mb-6">
          <img
            src="/monika_avatar_final.jpg"
            alt="Monika Roy"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>
        <h2 className="text-5xl font-bold mb-4">Full Stack Java Developer</h2>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Building secure, scalable systems using Java, Spring Boot, Angular, React, AWS & Kafka.
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/nallamor" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-200" />
          </a>
          <a href="https://linkedin.com/in/monika-roy-nallamothu-955660197" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-200" />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p>
            I'm a Full Stack Java Developer with over 7 years of experience building secure, scalable systems for diverse domains including finance, healthcare, client onboarding, payment processing, and public sector services. 
            I've worked on cloud-native applications, integrated Single Sign-On solutions, and contributed to event-driven architectures. My stack includes Java, Spring Boot, Angular, React, and AWS. 
            I thrive in solving real-world problems, collaborating with global teams, and delivering high-impact solutions that scale.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <p className="text-lg max-w-3xl mx-auto">
          <strong>Languages:</strong> Java, TypeScript, JavaScript<br/>
          <strong>Frontend:</strong> React, Angular, HTML, CSS<br/>
          <strong>Backend:</strong> Spring Boot, REST APIs, Kafka, Node.js<br/>
          <strong>Cloud & DevOps:</strong> AWS, Docker, GitHub Actions, Jenkins<br/>
          <strong>Databases:</strong> DynamoDB, PostgreSQL, MySQL, Oracle<br/>
          <strong>Tools:</strong> Jira, Confluence, Postman, Swagger, Splunk, Honeycomb
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Projects</h3>
          <ul className="space-y-4">
            <li>
              <strong>Vanguard – My Plan Manager</strong><br/>
              Cloud-native onboarding platform with SSO, built with Spring Boot, Angular, and AWS services.
            </li>
            <li>
              <strong>ETS – EPMS</strong><br/>
              Secure payment microservices for SALE, REFUND, CHARGEBACK with Kafka and PostgreSQL.
            </li>
            <li>
              <strong>Sedgwick – Claims Portal</strong><br/>
              Full stack claims system using React + Spring Boot + GCP + Kafka.
            </li>
            <li>
              <strong>KeyBank – Financial Wellness</strong><br/>
              Angular & React-based frontend with Spring Boot APIs for financial guidance.
            </li>
            <li>
              <strong>ITD – North Dakota State Government</strong><br/>
              Full stack web applications for internal and citizen-facing portals, focused on modernizing state workflows and digital services.
            </li>
            <li>
              <strong>Amazon Now – Pilot Grocery Delivery</strong><br/>
              Technical and process support for Amazon’s 2-hour grocery delivery app during its pilot in India, enabling countrywide scaling and customer experience enhancements.
            </li>
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
          <ul className="space-y-4">
            <li>
              <strong>Mini Project – Smart Mode Switch</strong>: A mobile app that switches a lost phone from vibrate to ring via SMS trigger. Cross-platform for iOS, Android, and Windows.
            </li>
            <li>
              <strong>Major Project – Secure Travel Identifier</strong>: A centralized digital identity system designed for travelers to securely validate personal information and travel credentials across regions.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Education</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <img src="/valparaiso_logo.png" alt="Valparaiso University" className="h-10 w-auto" />
              <span>
                <strong>Valparaiso University</strong> – MS in Information Technology (Indiana, USA)
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <img src="/jntu_logo.png" alt="JNTU Hyderabad" className="h-10 w-auto" />
              <span>
                <strong>JNTU Hyderabad</strong> – B.Tech in Computer Science and Engineering
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 text-gray-800 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">What Others Say</h3>
          <div className="bg-white p-6 rounded shadow-md">
            {renderStars(testimonials[current].rating)}
            <p className="italic mb-2">“{testimonials[current].quote}”</p>
            <p className="font-semibold">— {testimonials[current].author}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p>Email: monikaroyn@gmail.com</p>
        <p>Location: Pennsylvania, USA</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm bg-purple-900 bg-opacity-70">
        <p>&copy; {new Date().getFullYear()} Monika Roy. All rights reserved.</p>
      </footer>
    </div>
  );
}
