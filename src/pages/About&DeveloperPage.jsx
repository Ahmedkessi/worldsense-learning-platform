import "./styles.css";
import DeveloperImage from "../assets/DeveloperImage.jpeg";
import Button from "../components/UIComponents/Button";
import { useState } from "react";
import AppNavigation from "../components/UIComponents/AppNavigation";
import { Youtube, Facebook, MessageSquareMore } from "lucide-react";

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
      {/*<h4>Developer</h4>*/}
      {children}
    </div>
  );
}

function DeveloperInfo({ setIsOpen, setMessage, setBtnMessage }) {

  function handleWhatsAppClick() {
    setIsOpen(true);
    setMessage(`✨Whats app link was found on the Internet🎉🎉`);
    setBtnMessage(`Open this Link ↗️`);
  }

  function handleFacebookClick() {
    setIsOpen(true);
    setMessage(`This link was not found on the Internet!`);
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
          <p className="dev">Front end Developer</p>
          <p className="languages">
            HTML <span>|</span> CSS <span>|</span> SASS <span>|</span>{" "}
            JavaScript <span>|</span> React JS
          </p>

          <div className="links">
            <div className="icon" onClick={handleWhatsAppClick}>
              <MessageSquareMore size={20} />
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

      <div className="card">
          <h5>👨‍💻 About the Developer</h5>
          <p>This platform was designed and developed by Ahmed, a student and front-end developer with a strong interest in building modern, scalable web applications.
          This project was created as part of a learning journey focused on mastering React and its ecosystem, including component-based architecture, state management, performance optimization, and single-page application design. Special attention was given to clean code structure, user experience, and real-world development practices.
          WorldSense reflects a balance between technical growth and creative problem-solving, combining data, interaction, and design into a cohesive product. This project continues to evolve as new features and improvements are added over time.
          </p>
        </div>
    </div>
    </>
  );
}

function About() {
  return (
    <div className="container-card">
      {/*<h4>About</h4>*/}
      <div>
        <div className="card">
          <h5>📘 About the Platform</h5>
          <p>WorldSense is an interactive web platform designed to help users explore, understand, and learn about the world through data-driven insights and intuitive map-based interaction.
          The platform allows users to discover countries by searching or clicking directly on an interactive map, instantly accessing key information such as population, languages, currency, region, and real-time weather conditions. To enhance engagement and learning, users can save favorite countries, add personal notes, track visited locations, and test their knowledge through a built-in quiz system.
          WorldSense is built as a single-page application using modern web technologies, focusing on performance, usability, and clean architecture. The goal of the platform is to transform global data into an accessible, educational, and personalized experience.
          </p>
        </div>



        <div className="card">
          <h5>🧭 Key Features</h5>
          <p>Interactive world map with click-to-explore functionality
          Country search with detailed insights and visuals
          Real-time weather data by location
          Favorites system for countries and places
          Personal notes and learning history
          Quiz module to reinforce geographical knowledge
          Fast, responsive single-page experience</p>
        </div>



        <div className="card">
          <h5>🚀 Technology Stack:</h5>
          <ul>
            <li>React (with Hooks)</li>
            <li>Redux Toolkit for state management</li>
            <li>React Router for navigation</li>
            <li>Vite for development and build tooling</li>
            <li>Leaflet & OpenStreetMap for mapping</li>
            <li>External APIs for country, geolocation, and weather data</li>
          </ul>
        </div>

      </div>

      <footer>© 2025 WorldSense. Developed by Ahmed_Osman. All rights reserved.</footer>
    </div>
  );
}

function MsgBox({ msg, btnMsg, setIsOpen }) {
  function handleClick() {
    if (msg.includes(`not`)) {
      setIsOpen(false);
    }
    else {
      setIsOpen(false);
    }
  }

  return (
    <div className="msg-back">
      <div className="msg-box">
        <p>{msg}</p>
        <Button handleClick={handleClick}>{btnMsg}</Button>
      </div>
    </div>
  );
}
