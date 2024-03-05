import React, { useEffect, useState } from "react";
import photo from "./photo.jpg";
import "./Home.css";
import photography from "./photography.jpeg";
import satya from "./satya.jpeg";
import prm from "./prm.jpeg";
import library from "./library.jpeg";

function Home() {
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className="container " id="service1">
      <div className="row   sticky-top    bg">
        <div className="col">
          <nav className=" navbar  navbar-expand-xl mx-0 px-0  ">
            <div className="container">
              <h5 className="fontone mt-3 ms-2">
                <b>Muthukumar B</b>{" "}
              </h5>

              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse  navright navbar-collapse"
                id="navigation"
              >
                <ul className="navbar-nav m-auto text-center">
                  <li className="nav-item">
                    <a
                      className={`hover text-light nav-link ${
                        selectedPage === "home" ? "selected" : ""
                      }`}
                      href="#home"
                      onClick={() => handlePageSelect("home")}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`hover text-light nav-link ${
                        selectedPage === "services" ? "selected" : ""
                      }`}
                      href="#about"
                      onClick={() => handlePageSelect("about")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`hover text-light nav-link ${
                        selectedPage === "portfolio" ? "selected" : ""
                      }`}
                      href="#skills"
                      onClick={() => handlePageSelect("skills")}
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`hover text-light nav-link ${
                        selectedPage === "about" ? "selected" : ""
                      }`}
                      href="#projects"
                      onClick={() => handlePageSelect("projects")}
                    >
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`hover text-light nav-link ${
                        selectedPage === "contact" ? "selected" : ""
                      }`}
                      href="#contact"
                      onClick={() => handlePageSelect("contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className=" ms-3 d-flex"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Home */}

      <div class="row g-0" id="home">
        <div class="col-sm-6">
          <div class="card-body">
            <div className="headtext  ms-5">
              <p class="card-title">Hello,I am Muthukumar</p>
              <h1 class="card-text">React JS </h1>
              <h1 class="card-text"> Developer</h1>
              <a className="text-info" href="#contact">
                contact me
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 reactimage">
          <img
            src="https://www.sstechsystem.com/wp-content/uploads/2023/09/Reactc-JS-photo.png"
            className="mt-5 detail rounded"
            style={{ width: 450, height: 500 }}
            alt=""
          />
        </div>
      </div>

      {/* About */}
      <div>
        <div className="row aboutrow" id="about">
          <div className="col-sm-4">
            <img
              src={photo}
              className=" detail rounded"
              style={{ width: 250, height: 300 }}
              alt=""
            />
          </div>

          <div className="col-sm-8">
            <div className="d-flex about">
              <h4>About</h4>
              <hr className="horizontal ms-3"></hr>
            </div>
            <p>
              I seek to work in a competitive field and ready to accept the
              challenges, utilizing my skills would like to work with a highly
              esteemed company which gives me a platform to use my expertise and
              skills for mutual growth and benefit of company and myself.
            </p>
            <p>
              I Started off my self-learning journey with online tutorials
              Google, YouTube, etc and took a step further and Enrolled Aneco
              Academy React Js developer Program which involved extensive
              programming and real world projects.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills">
        <div className="d-flex  skills justify-content-center mt-5">
          <h4>Skills</h4>
        </div>

        <div className="row g-5 mt-5 ">
          <div className="col-sm-2 thirdrow  col-4  ">
            <div
              class="card  pt-2 bg-dark"
              style={{ width: 100, height: 150 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text mt-2 text-light text-center">HTML5</p>
            </div>
          </div>
          <div className="col-sm-2 col-4 ">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeBUEbCIWTk__Xzb-SK3g_0GF9aaxb3l-52-aYui-8F6ha3Y1dmOqR9r5hzL7s47ncb0&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light text-center">CSS3</p>
            </div>
          </div>
          <div className="col-sm-2 col-4">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social-logo.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-2 text-center">Bootstrap</p>
            </div>
          </div>
          <div className="col-sm-2 secondrow col-4 ">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text  $font-family-base text-light text-center">
                Javascript
              </p>
            </div>
          </div>
          <div className="col-sm-2  col-4 ">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-ligth mt-3 text-center">React Js</p>
            </div>
          </div>
        </div>
        {/* row2 */}
        <div className="row g-5  mt-5 ">
          <div className="col-sm-2 thirdrow col-4 ">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-3 text-center">Redux</p>
            </div>
          </div>
          <div className="col-sm-2 col-4">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-2   text-center"> GitHub</p>
            </div>
          </div>
          <div className="col-sm-2 col-4">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://w7.pngwing.com/pngs/17/131/png-transparent-postman-logo-thumbnail-tech-companies-thumbnail.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-3  pt-3  text-center">
                {" "}
                Postman{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-2 secondrow col-4">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-1 text-center"> VsCode</p>
            </div>
          </div>
          <div className="col-sm-2 col-4 ">
            <div class="card pt-2 bg-dark" style={{ width: 100, height: 150 }}>
              <img
                src="https://iconape.com/wp-content/files/dw/349197/svg/netlify-seeklogo.com.svg"
                class="card-img-top"
                alt="..."
              />
              <p class="card-text text-light mt-1 text-center">Netlify</p>
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className=" d-flex justify-content-center mt-5" id="projects">
        <h4>My Recent Projects</h4>
      </div>

      <div className="row gy-3 projectrow mt-5">
        <div className="col-sm-3">
          <div
            class="card  ht pt-2 bg-dark "
            style={{ width: 300, height: 350 }}
          >
            <img src={library} class="card-img-top" alt="..." />
            <p class="card-text text-light mt-5 text-center">E-libray management system using CRUD operations</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            class="card   ht pt-2 bg-dark"
            style={{ width: 300, height: 350 }}
          >
            <img src={prm} class="card-img-top" alt="..." />
            <p class="card-text text-light mt-5 text-center">Simple task management tool with login and logout page</p>
          </div>
        </div>

        <div className="col-sm-3">
          <div
            class="card  ht pt-2 bg-dark"
            style={{ width: 300, height: 350 }}
          >
            <img src={photography} class="card-img-top" alt="..." />
            <p class="card-text text-light mt-5 text-center">A freelance static project for wedding photography website</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            class="card ht   pt-2 bg-dark"
            style={{ width: 300, height: 350 }}
          >
            <img src={satya} class=" card-img-top" alt="..." />
            <p class="card-text text-light mt-5 text-center">static website about Microsoft CEO "Satya Nadella"</p>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div id="">
        <div className="d-flex justify-content-center mt-5 " id="contact">
          <h1>Contact Me</h1>
        </div>

        <div className="row mt-5">
          <div className="col-sm-6">
            <p className="mt-1 ms-5 ">Reach out to me!</p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/785/806/non_2x/3d-male-character-pointing-left-free-png.png"
              style={{ width: 500, height: 300 }}
            ></img>
          </div>
          <div className="col-sm-6 mt-5">
            <div>
             <a href="https://www.linkedin.com/in/muthukumar-b-2496321a4/"><i class="fa-brands fa-linkedin mt-5 me-3"></i>Linked In </a> 
            </div>
            <div>
            <a href="https://github.com/Muthukumar1997?tab=repositories"> <i class="fa-brands fa-github mt-3 me-3"></i>GitHub </a> 
            </div>
            <div>
              <i class="fa-solid fa-envelope mt-3  me-3"></i>mkmech08@gmail.com
            </div>
            <div>
              <i class="fa-solid fa-phone mt-3  me-3"></i>+91 8608226727
            </div>
          </div>

          <div className="mt-5 lastline">
            <hr className=" .horizontalline"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
