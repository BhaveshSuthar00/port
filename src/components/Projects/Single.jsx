import React from 'react'

export const Single = ({props}) => {
    return (
    <>
    <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right"   data-aos-anchor-easing='ease-in-out'>
                <img
                  src={props.gifSource}
                  alt="gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left"   data-aos-anchor-easing='ease-in-out'>
              <h2>{props.headers}</h2>
              <div>
                <p>
                    {props.main}
                </p>
                <p>
                    {props.body}
              </p>
              </div>
              <div>
                {props.icons.map((item)=> item)}
              </div>
              <div>
                <a
                  href={props.liveCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href={props.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button  className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
