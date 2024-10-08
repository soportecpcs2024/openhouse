import React from "react";
import { GiExitDoor } from "react-icons/gi";
import "./Openhouse.css";

const Openhouse = () => {
  return (
    <div className="openhouse-container">
      <div className="header-openhouse">
        <div className="openhouse-header">
          <h1>Open House</h1>
        </div>
        <div>
          <div className="cpcs-background">CPCS</div>
          <div className="cpcs-background-b">CPCS</div>
        </div>
        <div></div>
      </div>
      <div>
        <p className="animated-text">
          ¡Únete a nosotros para conocer nuestras instalaciones y programas!
        </p>
      </div>

      {/* Icono con enlace */}
      <div className="exit-icon">
        <a
          href="https://colombosueco.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="salir-circle"
        >
          <div className="salir">
            <p className="salir-p">Pág principal</p>
            <GiExitDoor />
          </div>
        </a>
      </div>



      <div className="openhouse-image-container">
        <div>
          <img src="/open.png" alt="Open House" className="openhouse-image" />
        </div>
        <div className="inscribete">
          <div>
            <p>Sábado <span>19 de Octubre</span> </p>
          </div>

          <div className="hora">
            <p> Iniciamos 9:00 Am hasta las 11:30 Am</p>
          </div>
        </div>
        


      </div>
      <div className="openhouse-image-container-text">
        <div>
          <a
            href="https://docs.google.com/forms/d/1_YDrIbvWfZ14Pe4pGWIqoO2Q5nA98DReIfJDEjGA2Sg/viewform?edit_requested=true"
            className="cta-button-inscribete"
            target="_blank"
            rel="noopener noreferrer"
          >Inscribete YA</a>
        </div>
      </div>

      {/* <div className="openhouse-details">
        <h2>Admisiones Abiertas</h2>
        <p>Preescolar, Primaria y Bachillerato</p>
        <a
          href="https://www.google.com"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Más Información
        </a>
      </div> */}
    </div>
  );
};

export default Openhouse;
