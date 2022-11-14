import Data from '../../json/data.json'

export const Educations = () => {
  return (
    <section className="education-section" id="education">
      <h1 className="section__title">Education</h1>
      <article className="container-education">
        <div className="timeline">
          <ul>

            {Data.map((x,i) => {
              return (
                <li key={i}> 
                  <div className="timeline-content">
                    <h3 className="certificate">{x.data}</h3>
                    <h1>{x.course}</h1>
                    <p className="university">{x.university}</p>
                    {x.description.map((y,index)=> <p key={index}><i className="fa-solid fa-arrow-right"></i> {y} </p>)}
                  </div>
                </li>
              )
            }
            )}  
          </ul>
        </div>
      </article>
    </section>

  );
};
