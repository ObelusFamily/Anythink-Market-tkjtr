import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  return (
    
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input type="text" placeholder="What is it that you truly desire?" onInput={(event) => {if(event.target.value.length > 3){props.onSearch(
                event.target.value,
                (page) => agent.Items.byTitle(event.target.value, page),
                Promise.all([agent.Tags.getAll(),agent.Items.byTitle(event.target.value)])
              );}}} ></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
    
  );
  
};

export default Banner;
