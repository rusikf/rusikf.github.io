import elker from './images/elker-project.jpeg';
import plexa from './images/plexa-project.jpeg';
import speedbot from './images/speedbot-project.jpeg';

export default function Portfolio() {
  return (
    <div className="row py-5 row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src={elker} className="card-img-top" alt="Elker project" />
          <div className="card-body">
            <h5 className="card-title">Elker</h5>
            <p className="card-text d-flex flex-column">
              <span>A platform for sending anonymous reports and feedbacks</span>
              <a href='https://elker.com' target="_blank" rel="noopener noreferrer">https://elker.com</a>
              <span>
                <span className="badge bg-primary mx-2">Vue.js</span>
                <span className="badge bg-success">Ruby on Rails</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={speedbot} className="card-img-top" alt="Site Speed Bot project" />
          <div className="card-body">
            <h5 className="card-title">Site Speed Bot</h5>
            <p className="card-text d-flex flex-column">
              <span>SEO tool for test load speed of any website</span>
              <a href='https://app.sitespeedbot.com/' target="_blank" rel="noopener noreferrer">https://app.sitespeedbot.com/</a>

              <span>
                <span className="badge bg-success mx-2">Ruby on Rails</span>
                <span className="badge bg-info mx-2">React</span>
                <span className="badge bg-secondary">Jquery</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={plexa} className="card-img-top" alt="Plexa project" />
          <div className="card-body">
            <h5 className="card-title">Plexa</h5>
            <p className="card-text d-flex flex-column">
              <span>A social network for doctors and patients</span>
              <a href='https://plexa.ai' target="_blank" rel="noopener noreferrer">https://plexa.ai</a>

              <span>
                <span className="badge bg-success">Ruby on Rails</span>
                <span className="badge bg-secondary mx-2">Jquery</span>
                <span className="badge bg-light text-dark">Coffescript</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
