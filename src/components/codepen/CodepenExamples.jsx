import { useEffect, useState, } from "react";

import './CodepenExamples.css'


function CodepenExamples() {
  const [showMore, setShowMore] = useState(false)
  
  // Array of CodePen projects
  const codepens = [
    {
      slugHash: "ZEgEpYR",
      title: "Loading Animation",
    },
    {
      slugHash: "JjgjKEv",
      title: "Button's Cool Hover Effect",
    },
    {
      slugHash: "eYqYzQV",
      title: "Circular Glowing Effects",
    },
    // {
    //   slugHash: "LYwYZOg",
    //   title: "Circular Border Animation",
    // },
    {
      slugHash: "XJropYd",
      title: "Inkoop - Assignment",
    },
    {
      slugHash: "YzmzWqR",
      title: "Blinking Loading Animation",
    },
  ];


  // Load CodePen Embed script once when the component mounts first time i.e. the use-case of useEffect with empty-dependency array.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.codepenassets.com/embed/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []); // Runs only once


  return (
    <section id="codepen-examples" className="codepen-examples">
      <h2 className='codepen-heading'>Creative CodePen Showcases – Explore & Experiment</h2>
      <p className='codepen-description'>
        Discover a collection of some small interactive front-end projects crafted with HTML, CSS, and JavaScript. Explore these live CodePen examples, edit the code, and experiment with creative animations, UI effects, and interactive elements directly on the web.
      </p>

      {/* Codepen examples/projects */}
      <div className={`codepen-container ${showMore ? 'show-height' : '' }`}>
        {codepens.map((pen, index) => (
          <p
            key={index}
            className="codepen"
            data-height="450"
            data-theme-id="dark"
            data-default-tab="html,result"
            data-slug-hash={pen.slugHash}
            data-pen-title={pen.title}
            data-editable="true"
            data-user="VIJAY-JADHAV-the-bashful"
            style={{
              height: "450px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid",
              margin: "0.5rem 0",
              padding: "1em",
              scrollbarWidth: 'thin'
            }}
          >
            <span>
              See the Pen{" "}
              <a href={`https://codepen.io/VIJAY-JADHAV-the-bashful/pen/${pen.slugHash}`}>
                {pen.title}
              </a>{" "}
              by VIJAY JADHAV on <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>
        ))}
      </div>

      <div className={`show-more ${showMore ? 'show-less' : '' }`} onClick={() => setShowMore(!showMore)}> {!showMore ? 'Show more >>>' : '<<< Show less'}</div>
    </section>
  );
};

export default CodepenExamples;
