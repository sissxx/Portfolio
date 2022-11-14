import mainPhoto from '../../assets/main6.jpeg';
import cv from '../../assets/resume.pdf';

export const HomePage = () => {

  return (

    <section className="home-section" id="home" >
      <img src={mainPhoto} alt="main" className="home__img" />

      <article className="info">
        <div className="info__name">
          <h1 className="name">
            <p className="mobile-name" >Stanislava Hristova</p>
            <span>S</span><span>tanislava</span>
            <span>H</span><span>ristova</span></h1>
        </div>

        <p className="position-work" data-testid="todo-1">Junior Front-End Developer</p>

        <a href={cv} target="_blank" download className="download" rel="noreferrer">Download CV</a>

      </article>
      <ul className="list-unstyled">
        <li>
          <a href="https://www.linkedin.com/in/siss-hristova/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/sissxx">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sissxx/">
            <i className="fa-brands fa-instagram"></i>
          </a>

        </li>
      </ul>
    </section>
  );
};
