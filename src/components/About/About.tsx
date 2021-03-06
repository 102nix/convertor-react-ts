import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">Используемые технологии.</div>
            <div className="card-body">
              <p>React, React-router-dom,React Function Components, React hooks, React-Typescript.</p>
              <p>Redux, Redux-form, Redux-Saga, React-redux.</p>
              <p>Bootstrap, React-bootstrap, Node-sass, CSS Flexbox.</p>
              <p>Axios.</p>
              <p>Exchange rates API: https://exchangeratesapi.io/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About