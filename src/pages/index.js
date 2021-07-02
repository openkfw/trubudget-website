import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    setTimeout(() => {
      window.cookieconsent.initialise({
        palette: {
          popup: {
            background: "#3c404d",
            text: "#d6d6d6",
          },
          button: {
            background: "#8bed4f",
          },
        },
        position: "bottom",
        content: {
          message:
            "We would like to know who and how many of you are visiting this website, therefore we configured analytics. We do not further process or give away the collected statistics.",
          href: "https://trubudget.net/index.html",
        },
      });
    }, 3000);
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="TruBudget - a trusted public expenditure tool"
    >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/magnific-popup.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
      </Head>

      <main>
        <>
          <header
            className="masthead text-center text-white d-flex"
            style={{
              backgroundImage: `url(img/isabella-juskova-1-unsplash.jpg)`,
            }}
          >
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h1 className="section-heading text-white">
                    <strong>TruBudget</strong>
                  </h1>
                  <br />
                </div>
                <div className="col-lg-8 mx-auto">
                  <p className="text-faded mb-5">
                    A blockchain-based workflow tool for an efficient <br /> and
                    transparent project management
                  </p>
                  <iframe
                    width="568"
                    height="320"
                    src="https://www.youtube.com/embed/IzYSCoVGZ6c"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <a
                    className="btn btn-light btn-xl js-scroll-trigger"
                    href="#about"
                  >
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          </header>
        </>
        <>
          <section
            className="bg-primary-green"
            style={{
              backgroundColor: " #27533b !important",
            }}
            id="about"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="section-heading text-white">
                    TruBudget <br /> Trusted Public Expenditure Tool
                  </h2>
                  <center>
                    <hr className="light my-4" />
                  </center>

                  <p
                    style={{ fontSize: "1.15rem" }}
                    className="text-faded mb-4"
                  >
                    A collaborative workflow tool and secured platform to track
                    and coordinate the implementation of donor-funded investment
                    projects
                  </p>
                  <br />
                  <br />
                  <a
                    className="btn btn-light btn-xl js-scroll-trigger"
                    href="#services"
                  >
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
        <>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">
                    TruBudget saves money, time and helps to built trust
                  </h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className=" text-primary-green fa fa-4x fa-diamond mb-3 sr-icons"></i>
                    <h3 className="mb-3">
                      Traceable Activities <br /> <br />{" "}
                    </h3>
                    <p className="text-muted mb-0">
                      All activities on the shared platform are documented and
                      traceable at all stages
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-newspaper-o text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">
                      Any Time <br /> Up to Date
                    </h3>
                    <p className="text-muted mb-0">
                      Project information is shared in real-time with all
                      stakeholders
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-heart text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">
                      Tamper-proof <br /> <br />
                    </h3>
                    <p className="text-muted mb-0">
                      All information saved on TruBudget <br /> is time-stamped
                      and tamper-proof
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-paper-plane text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">Efficient Communication</h3>
                    <p className="text-muted mb-0">
                      Relevant approval steps are made directly on TruBudget{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        <>
          <section className="p-0" id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters popup-gallery">
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/1.jpg"
                  >
                    <img
                      style={{ height: "270px" }}
                      className="img-fluid"
                      src="img/portfolio/thumbnails/1.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">Login</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/2.jpg"
                  >
                    <img
                      style={{ height: "270px" }}
                      className="img-fluid"
                      src="img/portfolio/thumbnails/2.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">Overview Projects</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/3.jpg"
                  >
                    <img
                      style={{ height: "270px" }}
                      className="img-fluid"
                      src="img/portfolio/thumbnails/3.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">Project Overview</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/4.jpg"
                  >
                    <img
                      className="img-fluid"
                      src="img/portfolio/thumbnails/4.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">
                          Workflow Items Sub-project completed
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/5.jpg"
                  >
                    <img
                      className="img-fluid"
                      src="img/portfolio/thumbnails/5.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">
                          Workflow Items Sub-project in progress
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/6.jpg"
                  >
                    <img
                      className="img-fluid"
                      src="img/portfolio/thumbnails/6.jpg"
                      alt=""
                    />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-category text-faded">
                          Category
                        </div>
                        <div className="project-name">Sub-project Overview</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>

        <>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Benefits for all partners</h2>
                  <center>
                    <hr className="my-4" />
                  </center>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-XX text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">For Partner Countries</h3>
                    <p className="mb-0">Control the use of external funds</p>
                    <center>
                      <hr />
                    </center>
                    <p className="mb-0">
                      Channel funds through national budget
                    </p>
                    <center>
                      <hr />
                    </center>
                    <p className="mb-0">
                      Get real-time information on use of funds
                    </p>
                    <center>
                      <hr />
                    </center>
                    <p className="mb-0">
                      Improve budget planning and macro-economic analysis
                    </p>
                    <center>
                      <hr />
                    </center>
                    <p>Significantly reduce transaction costs</p>
                    <center>
                      <hr />
                    </center>
                    <p className="mb-0">
                      Report on status of funds at any time ...
                    </p>
                    <p className="mb-0">
                      while keeping your current IT-systems running!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-XX text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">
                      For Donors
                      <br />
                    </h3>
                    <p className="mb-0">
                      <br /> Real-time information on the use of funds
                      <center>
                        <hr />
                      </center>
                      Channel funds through partner country <br />
                      budgets without risk
                      <center>
                        <hr />
                      </center>
                      Improve communication and simplify
                      <br /> decision-making
                      <center>
                        <hr />
                      </center>
                      Significantly reduce transaction costs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        <>
          <section className="bg-dark text-white">
            <div className="container text-center">
              <h2 className="mb-4">Watch the TruBudget walkthrough:</h2> <br />
              <div className="video-container">
                <div className="video-container iframe">
                  <iframe
                    width="840"
                    height="473"
                    src="https://www.youtube.com/embed/gb9KIZxmECk"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2 className="mb-4">Request a demo-version:</h2>
              <br />
              <br />
              <a
                className="btn btn-light btn-xl sr-button"
                href="mailto:info@trubudget.net"
              >
                Discover TruBudget
              </a>
              <br />
              <br />
            </div>
          </section>
        </>

        <>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">TruBudget Pilot Projects</h2>
                  <center>
                    <hr className="my-4" />
                  </center>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-XX text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">Pilot Project BNDES</h3>
                    <p className="text-muted mb-0">
                      Since April 2018, the Brazilian Development Bank (BNDES)
                      and the KfW Development Bank are using a TruBudget
                      prototype to manage parts of the Amazon Fund.
                      <br />
                      <br />
                      <br />
                      <strong>Covered by the Media:</strong>
                      <br />
                      <br />
                      Media in English language:
                      <br />
                      <br />
                      <a href="https://www.zdnet.com/article/brazilian-and-german-development-banks-agree-blockchain-partnership/">
                        <img width="83" height="64" src="img/orgas/ZDNet.png" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-XX text-primary-green mb-3 sr-icons"></i>
                    <h3 className="mb-3">Pilot Project Burkina Faso</h3>
                    <p className="text-muted mb-0">
                      Since November 2018, the Ministry of Finance of Burkina
                      Faso and the KfW Development Bank are jointly implementing
                      a prototype of the TruBudget software.
                      <br />
                      <br />
                      <br />
                      <br />
                      <strong>Covered by the Media:</strong>
                      <br />
                      <br />
                      Media in English language:
                      <br />
                      <br />
                      <a href="https://www.dandc.eu/en/article/new-digital-platform-designed-kfw-facilitates-transparent-and-secure-implementation-oda">
                        <img
                          width="220"
                          height="40"
                          src="img/orgas/dundc.png"
                        />
                      </a>
                      <br />
                      <br />
                      <a href="https://www.kfw.de/KfW-Group/Newsroom/Latest-News/Pressemitteilungen-Details_500800.html">
                        <img width="87" height="29" src="img/orgas/KfW.png" />
                      </a>
                      <br />
                      <br />
                      <br />
                      Media in German language:
                      <br />
                      <a href="https://www.boersen-zeitung.de/index.php?li=1&artid=2018243014&artsubm=ueberblick&r=Banken%20&%20Finanzen">
                        <img width="220" height="55" src="img/orgas/BZ.png" />
                      </a>
                      <br />
                      <br />
                      <a href="https://www.tagesspiegel.de/advertorials/ots/kfw-blockchain-macht-entwicklungszusammenarbeit-wirksamer/20084554.html">
                        <img width="182" height="38" src="img/orgas/ts.png" />
                      </a>
                      <br />
                      (advertorial)
                      <br />
                      <br />
                      <a href="https://www.fr.de/wirtschaft/wohin-fliesst-geld-11780614.html">
                        <img width="200" height="27" src="img/orgas/FR.png" />
                      </a>
                      <br />
                      <br />
                      <br />
                      Media in French language:
                      <br />
                      <br />
                      <a href="http://lefaso.net/spip.php?article86453">
                        <img
                          width="145"
                          height="47"
                          src="img/orgas/Lefaso.png"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <h3 className="mb-4">
                  <br />
                  <br />
                  <br />
                  For further information about TruBudget <br /> download our
                  fact-sheet:
                </h3>
                <a
                  className="btn btn-light btn-xl sr-button"
                  href="https://www.kfw-entwicklungsbank.de/PDF/Entwicklungsfinanzierung/Themen-NEU/Digitalisierung/2018_TruBudget.pdf"
                >
                  Fact-Sheet
                </a>
              </div>
            </div>
          </section>
        </>

        <>
          <section class="bg-primary-green" id="community">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                  <h2 class="section-heading text-white">
                    TruBudget Community
                  </h2>
                  <center>
                    <hr class="light my-4" />
                  </center>

                  <p style={{ fontSize: "1.10rem" }} class="text-faded mb-4">
                    KfW developed TruBudget as open source software. We have the
                    vision to create a vibrant community of organizations that
                    apply TruBudget in their unique context but stay in touch to
                    exchange best practices and new developments.
                    <br />
                    <br /> We are convinced that there are many promising use
                    cases for TruBudget, also beyond budget management. Keen on
                    discussing your thoughts, ideas and experiences, we warmly
                    invite you to join our community.
                  </p>
                  <br />
                  <h3 class="mb-4 text-white">
                    Join the TruBudget Community on{" "}
                    <a
                      style={{ color: "white" }}
                      href="https://github.com/openkfw/TruBudget/discussions"
                    >
                      GitHub Discussions
                    </a>
                    !
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </>

        <>
          <section class="bg-dark text-white">
            <div class="container text-center">
              <h2 class="mb-4">
                TruBudget is open source and available on Github!
              </h2>
              <br />
              <a href="https://github.com/openkfw/TruBudget">
                <img width="115" height="115" src="img/github.png" />
              </a>
            </div>
          </section>
        </>

        <>
          <section id="contact">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                  <h2 class="section-heading">Let's Get In Touch!</h2>
                  <center>
                    <hr class="my-4" />
                  </center>
                  <p class="mb-5">
                    Interested in how TruBudget is already being used?
                    Interested in testing TruBudget in your organization? Ideas
                    of how to adapt TruBudget for a new purpose? Please get in
                    touch! We are happy to share our experience and start new
                    projects.{" "}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-0 ml-auto text-center">
                  <i class="fa fa-XX fa-3x mb-3 sr-contact"></i>
                </div>
                <div class="col-lg-0 mr-auto text-center">
                  <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                  <p>
                    <a
                      style={{ color: "#27533b" }}
                      href="mailto:info@trubudget.net"
                    >
                      info@trubudget.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>

        <>
          <section id="impressum" class="bg-dark text-white">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                  <h2 class="section-heading">Imprint</h2>
                  <center>
                    <hr className="light my-4" />
                  </center>
                  <p class="mb-4">
                    Legal notice and disclaimer: <br />
                    <br />
                    KfW <br />
                    Palmengartenstrasse 5-9 <br />
                    60325 Frankfurt am Main <br />
                    Phone: +49 69 74 31-0 <br />
                    Fax: +49 69 74 31-29 44 <br />
                    Mail:{" "}
                    <a
                      style={{ color: "white" }}
                      href="mailto:info@trubudget.net"
                    >
                      info@trubudget.net
                    </a>
                    <br />
                    <br />
                    The VAT identification number of KfW is DE 114104280. <br />
                    <br />
                    Responsible:
                    <br />
                    <br />
                    Dr Jure Zakotnik
                    <br />
                    Piet Kleffmann
                    <br />
                    TruBudget Taskforce
                    <br />
                    <br />
                    <p>Title Photo:</p>
                    <a
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        textDecoration: "none",
                        padding: "4px 6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                        display: "inline-block",
                      }}
                      href="https://unsplash.com/@bellaskova?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download free do whatever you want high-resolution photos from Isabella Jusková"
                    >
                      <span
                        style={{ display: "inline-block", padding: "2px 3px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            height: "12px",
                            width: "auto",
                            position: "relative",
                            verticalAlign: "middle",
                            top: "-2px",
                            fill: "white",
                          }}
                          viewBox="0 0 32 32"
                        >
                          <title>unsplash-logo</title>
                          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                        </svg>
                      </span>
                      <span
                        style={{ display: "inline-block", padding: "2px 3px" }}
                      >
                        Isabella Jusková
                      </span>
                    </a>
                    <br />
                    <br />
                    <br />
                    <h3 class="section-heading">Disclaimer</h3>
                    <center>
                      <hr className="light my-4" />
                    </center>
                    <h4 class="section-heading">No liability for contents</h4>
                    <br />
                    All information and data supplied by KfW in its various
                    Internet offers have been compiled to the best of its
                    knowledge and belief. KfW cannot accept any liability for
                    their accuracy, completeness and timeliness. The information
                    supplied does not represent individual advice and cannot be
                    taken as a substitute for such advice. <br />
                    <br />
                    The same applies to all other Internet pages referred to by
                    hyperlink. KfW is not responsible for the content of
                    internet pages accessed through such link.
                    <br />
                    <br />
                    <br />
                    <h4 class="section-heading">
                      Use of Internet pages (including use of software)
                    </h4>
                    <br />
                    The content, structure and design of the KfW internet pages
                    and the software that can be used or downloaded from these
                    pages (such as repayment calculator and collection of form
                    sheets) are protected by copyright. Texts, text portions,
                    graphs, tables, software or illustrative material, their
                    contents and copies may not in any way be altered (not
                    through their source code either), reproduced and
                    distributed or transmitted to third parties without the
                    prior consent of KfW. This does not apply to the
                    contributions provided under "Research" and "Newsroom".
                    These documents may be forwarded to third parties and
                    reproduced for information purposes with indication of their
                    source. KfW assumes no guarantee and accepts no liability
                    for software performance or for any damage directly or
                    indirectly caused by the utilisation or installation of this
                    software.
                    <br />
                    <br />
                    Hyperlinks to the KfW Internet offers are admissible if the
                    KfW Internet page retrieved becomes the sole content of the
                    browser window.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
    </Layout>
  );
}
