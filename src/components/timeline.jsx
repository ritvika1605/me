import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>QuEST Global Private Limited <span>July 2019 - June 2021</span></h2>
                        <p>Designed and developed scalable microservices from scratch for handling Assets and Liabilities of Axis Bank customer. Revised, modularized and upgraded legacy code bases to modern development standards for the HP clients. Designed the architecture and developed an end to end Data Pipeline for prediction of Fraud in financial data as a Proof of Concept for the company.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mind Piper <span>September 2018 - February 2019</span></h2>
                        <p>Collaborated with the Venture Center on a project sponsored by Mind Piper for the Social Innovation Immersion Program under the aegis of Department of Biotechnology, Government of India. Developed a device for measuring anxiety levels in patients using non-invasive physiological parameters.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ericsson IT Solutions & Services <span>May 2017 - June 2017</span></h2>
                        <p>Assisted operators in the project involving detailed study of the Ericsson 4G network architecture and communication protocols. Submitted daily reports after troubleshooting and analysing network system readings and configurations.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Pune Institute of Computer Technology <span>July 2015 - May 2019</span></h2>
                          <p>Completed undergraduate degree in Electronics and Telecommunication. Relevant coursework: fundamentals of Programming Language, Data Structures and Algorithms, Object Oriented Programming, Operating Systems, Machine LEarning, Digital Image Processing.</p>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
