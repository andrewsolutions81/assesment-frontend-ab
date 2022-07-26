import React from "react";
import styles from "./styles.css"
import imgandres from "../../images/imgandres.jpeg"

function Aboutinfo() {
  return(
    <div className="about">
    <div className="about-container">
      <h1 className="about__title">Andres Berrio</h1>
      <p className="about__description">Programmer on the make, intrested in bringing solutions to every day problems with tech and a humane focus</p>
      <img className="about__img" src={imgandres}  alt=""/>
      <ul className="about__list">
        <li className="about__list-item">
          <h2>GitHub</h2>
          <p>aprendi GitHub</p>
        </li>
        <li className="about__list-item">
          <h2>React</h2>
          <p>aprendi react</p>
        </li>
        <li className="about__list-item">
          <h2>Hooks</h2>
          <p>aprendi react Hooks</p>
        </li>
      </ul>
      <div className="about__mail">andrewsolutions@gmail.com</div>
      <div className="about__git">
        <a href="https://github.com/andrewsolutions81">andrewsolutions81</a>
      </div>
    </div>
  </div>
  )
}

export default Aboutinfo