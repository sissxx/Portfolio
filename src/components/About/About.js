
import meOne from '../../assets/me.jpeg'
import meTwo from '../../assets/me2.jpeg'

export const  About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">Hello, I am</h2>
          <ul className="dynamic-text">
            <li>
              <span>
                Stanislava <i className="uil uil-brackets-curly"></i>
              </span>
            </li>
          </ul>
          <p className="introduction-myself">
            An ambitious and energetic student pursuing a bachelors degree in IT
            Systems. I have a deep knowledge of user interface, web development,
            creating prototypes, and inheritance, which I gained during my participation in
            several programming courses. While I possesses a keen sense for styling
            websites with CSS, I have a basic knowledge in building web pages, and
            creating responsive web design. I now want to forge a
            career path as a Front-End developer and continue developing my skills.
          </p>
          <div className="contacts-info">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Hristova, Stanislava</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Town</td>
                  <td>Sofia, Bulgaria</td>
                </tr>
                <tr>
                  <td>Phone number</td>
                  <td>+359 876600325</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>siss99.sh@gmail.com</td>
                </tr>
              </tbody>
            </table>

            <div className="skilss">
              <ul>
              <li><span>JavaScript</span></li>
                <li><span>React</span></li>
                <li><span>MongoDB</span></li>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Node.js</span></li>
                <li><span>Express.js</span></li>
              
              </ul>
            </div>
          </div>
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src={meOne} alt="" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src={meTwo} alt="" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>
  );
};
