import React from "react";
import "./Skill.css";
import Progress from "./Progress";

const Skill = () => {
  return (
    <div className="bg-light">
    <div className="container py-4  rounded-3" id="skill">
      <div className="row  justify-content-center">
        <div>
          <h1 className="fw-bold text-center">MY SKILLS</h1>
          <div className="heading-seperator">
            <div className="seperator-line" />
            <div className="seperator-blob">
              <div />
            </div>
          </div>
        </div>
      </div>
      <div className="row skill-section py-4 ">
        {/* <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div>
        <div className="col-md-6 my-3">
          <h5 className="fw-bold mb-0">HTML</h5>
          <Progress done="90" />
        </div> */}

        {/* <div className="my-4 col-12">
          <div className="d-flex justify-content-around"> */}
          <h3 className="fw-bold border-bottom px-2 my-3"><i class="bi bi-flower1 text-success"></i> Comfortable :</h3>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                alt="Html5"
              />
              <h6>HTML</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="CSS"
              />
              <h6>CSS</h6>
            </div>
            
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
                alt="Bootstrap"
              />
              <h6>Bootstrap</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="JavaScript"
              />
              <h6>JavaScript</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="React"
              />
              <h6>React.js</h6>
            </div>
          {/* </div>
        </div> */}

        {/* <div className="my-4 col-12">
          <div className="d-flex justify-content-between"> */}
            
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/firebase.png"
                alt="Firebase"
              />
              <h6>Firebase</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/material-ui.png"
                alt="Material-UI"
              />
              <h6>Material-UI</h6>
            </div>
            <div>
              <img className="w-25"
                src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"
                alt="react-bootstrap"
              />
              <h6>React Bootstrap</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="80" data-icon="logos:react-router"></span>
              <h6>React Router</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="70" data-icon="logos:tailwindcss-icon"></span>
              <h6>Tailwind CSS</h6>
            </div>
            
            
            
            
            
            

            {/* familiar */}

            <h3 className="fw-bold border-bottom px-2 my-3"><i class="bi bi-flower1 text-warning"></i> Familiar :</h3>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/sass.png"
                alt="SASS"
              />
              <h6>SASS</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="Mongodb"
              />
              <h6>Mongodb</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node"
              />
              <h6>Node.js</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="60" data-icon="simple-icons:express"></span>
              <h6>Express.js</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="60" data-icon="logos:typescript-icon"></span>
              <h6>Typescript</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/redux.png"
                alt="Redux"
              />
              <h6>Redux</h6>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="React"
              />
              <h6>React Native</h6>
            </div>

            {/* tools */}

            <h3 className="fw-bold border-bottom px-2 my-3"><i class="bi bi-flower1 text-info"></i> Tools :</h3>
            <div>
              <img
                src="https://img.icons8.com/material-sharp/48/000000/github.png"
                alt="Git"
              />
              <h6>Github</h6>
            </div>
            <div>
            <span class="iconify mt-3" data-width="90" data-icon="logos:git"></span>
              
              
            </div>
            <div>
            <span class="iconify mb-2" data-width="60" data-icon="vscode-icons:file-type-vscode"></span>
              <h6>VS Code</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="60" data-icon="logos:postman-icon"></span>
              <h6>Post Man</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="40" data-icon="logos:figma"></span>
              <h6>Figma</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="60"  data-icon="vscode-icons:file-type-netlify"></span>
              <h6>Netlify</h6>
            </div>
            <div>
            <span class="iconify mb-2" data-width="50"   data-icon="logos:heroku-icon"></span>
              <h6>Heroku</h6>
            </div>
            
            <div>
            <span class="iconify mb-2 mt-2" data-width="80"   data-icon="logos:asana"></span>
              
            </div>
            <div>
            <img src="https://img.icons8.com/color/48/000000/jira.png"/>
              <h6>Zira</h6>
            </div>
            
            {/* soft skills */}

            <h3 className="fw-bold border-bottom px-2 my-3"><i class="bi bi-flower1 text-primary"></i> Soft Skills :</h3>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Communication</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Self-motivation</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Leadership</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Responsibility</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Team work</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Work under pressure</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Time management</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Flexibility</h6>
            </div>
            <div>
            <span class="iconify mb-2 text-success" data-width="50"   data-icon="teenyicons:tick-circle-outline"></span>
              <h6>Negotiation and conflict resolution</h6>
            </div>
          {/* </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Skill;
