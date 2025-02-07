import React from "react";

const Resume = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Resume</h1>

      
      <div className="text-center border-bottom pb-3 mb-4">
        <h2 className="fw-bold">Gilmer Perez</h2>
        <p className="text-muted">
          City, State | (000) 000-0000 | email@address.com
        </p>
      </div>

      <div className="row">

        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Professional Summary</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium rerum tempore sit nostrum adipisci esse velit
                voluptate excepturi, ipsum repudiandae enim sequi voluptas nobis
                quas, quam sunt nam, cum id.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Education</h5>
              <p className="mb-1">Prestigious University | Computer Science</p>
              <p className="text-muted">Graduated December 2020</p>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Skills</h5>
              <ul className="list-group">
                <li className="list-group-item">Skill 1</li>
                <li className="list-group-item">Skill 2</li>
                <li className="list-group-item">Skill 3</li>
                <li className="list-group-item">Skill 4</li>
                <li className="list-group-item">Skill 5</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Front-End Proficiencies</h5>
              <ul className="list-group">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Back-End Proficiencies</h5>
              <ul className="list-group">
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">PostgreSQL, Sequelize</li>
                <li className="list-group-item">MongoDB, Mongoose</li>
                <li className="list-group-item">REST</li>
                <li className="list-group-item">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
