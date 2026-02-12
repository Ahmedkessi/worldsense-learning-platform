import "./styles.css";
import DeveloperImage from "../assets/DeveloperImage.jpg";
import { useState } from "react";
import AppNavigation from "../components/UI/AppNavigation";
import { Youtube, Facebook, Mails } from "lucide-react";

function About_Developer() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(``);
  const [btnMessage, setBtnMessage] = useState(``);
  
  return (
    <>
    <AppNavigation />
    <div className="page">
      <h3>About & Developer</h3>
      <Developer>
        <DeveloperInfo
          setIsOpen={setIsOpen}
          setMessage={setMessage}
          setBtnMessage={setBtnMessage}
        />
      </Developer>

      <About />

      {isOpen && (
        <MsgBox msg={message} btnMsg={btnMessage} setIsOpen={setIsOpen} />
      )}
    </div>
    </>
  );
}

export default About_Developer;

function Developer({ children }) {
  return (
    <div className="container-card">
      {children}
    </div>
  );
}

function DeveloperInfo({ setIsOpen, setMessage, setBtnMessage }) {

  function handleWhatsAppClick() {
    setIsOpen(true);
    setMessage(`✨ WhatsApp contact link available`);
    setBtnMessage(`Open Link ↗️`);
  }

  function handleFacebookClick() {
    setIsOpen(true);
    setMessage(`This link is currently unavailable.`);
    setBtnMessage(`⬅️ Go Back`);
  }

  function handleYoutubeClick() {
    handleFacebookClick();
  }

  return (
    <>
    <div className="developer--info">
      <div className="developer--background">
        <img className="img" src={DeveloperImage} alt="Developer_image" />
        <div>
          <p className="name">Ahmed Osman Ahmed</p>
          <p className="num">+252 615666376</p>
          <p className="dev">Front-End Developer</p>
          <p className="languages">
            HTML <span>|</span> CSS <span>|</span> SASS <span>|</span>{" "}
            JavaScript <span>|</span> React <span>|</span> Redux <span>|</span> APIs
          </p>

          <div className="links">
            <div className="icon" onClick={handleWhatsAppClick}>
              <Mails size={20} />
            </div>

            <div className="icon" onClick={handleFacebookClick}>
               <Facebook size={20} />
            </div>

            <div className="icon" onClick={handleYoutubeClick}>
               <Youtube size={20} />
            </div>
          </div>

        </div>
      </div>

      <div className="card c-1">
          <h2>👨‍💻 About the Developer</h2>
          <p>
          WorldSense was independently designed and developed by Ahmed Osman Ahmed, a student and front-end developer focused on building modern, scalable, and production-ready web applications.
          This project was planned, architected, and implemented end-to-end by one developer. From UI design and component structure to state management, API integrations, debugging, and performance optimization, every technical decision and line of code was executed personally.
          Artificial intelligence tools were used strictly for research, API exploration, and troubleshooting support, while all engineering and system design were completed independently.
          The development approach emphasizes clean architecture, maintainable code, strong user experience, and real-world engineering standards. WorldSense represents continuous growth, discipline, and practical software craftsmanship rather than a tutorial or team-built project.
          </p>
        </div>
    </div>
    </>
  );
}

function About() {
  return (
    <div className="container-card c-c-1">
      <div className="c-c-1">
        <div className="card">
          <h2>📘 About the Platform</h2>
          <p>
          WorldSense is an interactive geography and data exploration platform that transforms global information into a clear, visual, and engaging experience.
          Users can explore countries through direct map interaction or smart search and instantly access structured insights including population, languages, currency, region details, real-time weather conditions, country descriptions, curated images, and related videos.
          The platform combines multiple external data sources into one cohesive interface to make learning about the world simple, fast, and practical.
          Built as a single-page application, WorldSense prioritizes performance, usability, and clean architecture to deliver a smooth and modern user experience.
          </p>
        </div>



        <div className="card">
          <h2>🧭 Key Features</h2>
          <p>
          Interactive world map with click-to-explore navigation<br/>
          Smart country search with detailed statistics and insights<br/>
          Real-time weather data by location<br/>
          Country images and places gallery integration<br/>
          Country videos powered by YouTube Data v3 API<br/>
          Favorites system for saving countries<br/>
          Personal notes and learning history tracking<br/>
          Quiz module for reinforcing geographical knowledge<br/>
          Fast, responsive single-page application performance
          </p>
        </div>



        <div className="card">
          <h2>🚀 Technology Stack:</h2>
          <ul>
            <li>React (Hooks & component architecture)</li>
            <li>Redux Toolkit for state management</li>
            <li>React Router for navigation</li>
            <li>Vite for development and build tooling</li>
            <li>Leaflet & OpenStreetMap for interactive mapping</li>
            <li>REST Countries API for country data</li>
            <li>Weather APIs for live forecasts</li>
            <li>Unsplash Image API for country images</li>
            <li>YouTube Data v3 API for country videos</li>
            <li>Modern JavaScript (ES6+)</li>
          </ul>
        </div>

      </div>

      <footer>
        © {new Date().getFullYear()} WorldSense. Developed by Ahmed_Osman. All rights reserved.
      </footer>
    </div>
  );
}
function MsgBox({ msg, btnMsg, setIsOpen }) {
  const isNegative = msg.includes("unavailable");

  const link = isNegative
    ? "#"
    : "https://wa.me/252615666376";

  const target = isNegative ? "_self" : "_blank";

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <div className="msg-back">
      <div className="msg-box">
        <p>{msg}</p>

        

        <div style={{display: "flex", gap: `10px`}}>
          {<button onClick={handleClick}>back</button>}
          {!isNegative &&
            <a
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={handleClick}
            className="btn"
          >
            {btnMsg}
          </a>
        }
        </div>
      </div>
    </div>
  );
}

