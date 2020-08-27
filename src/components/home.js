import React from "react";
import BackgroundVideo from "./background-video";
import styleModule from "./homeStyle";
import github from "../resources/GitHub-Mark-Light-64px.png";
import linkedin from "../resources/linkedin-6-64.png";
import twitter from "../resources/twitter-64.png";

const Home = () => {
  return (
    <div>
      <BackgroundVideo />
      <div style={styleModule.container}>
        <div style={styleModule.style}>
          <h1 style={styleModule.name_style}>Samir Ahmed Ghouri</h1>
          <h2 style={styleModule.description}>I'm a Software Developer.</h2>
        </div>
        <div style={styleModule.linkerDiv}>
          <a href="https://github.com/samirghouri" target="_blank ">
            <img src={github} style={styleModule.github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/samir-ahmed-ghouri-3159ab185/"
            target="_blank"
          >
            <img src={linkedin} style={styleModule.linkedin} />
          </a>
          <a href="https://twitter.com/SamirGhouri" target="_blank">
            <img src={twitter} style={styleModule.twitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
