
import basics from "../../assets/basics.jpg"
import advanced from "../../assets/advanced.jpg"
import applications from "../../assets/applications.jpg"
import backend from "../../assets/backend.jpg"
import html from "../../assets/html.jpg"


export const Certificates = () => {

  return (
    <>
      <section id="certification">
        <h1 className="section__title">Certificates</h1>
        <section className="certification-container">
          <article className="items">
            <img src={basics} alt="" className="img-c" />
          </article>
          <article className="items">
            <img src={advanced} alt="" className="img-c" />
          </article>{" "}
          <article className="items">
            <img src={applications} alt="" className="img-c" />
          </article>{" "}
          <article className="items">
            <img src={backend} alt="" className="img-c" />
          </article>{" "}
          <article className="items">
            <img src={html} alt="" className="img-c" />
          </article>
        </section>
      </section>
     
    </>
  );
};
