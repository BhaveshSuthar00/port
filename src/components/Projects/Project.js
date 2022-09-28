import React from "react";
import "./Project.css";
import { Single } from "./Single";
import { holeThing } from "../../constants/containts";
import { v4 as uuid } from 'uuid'
export const Projects = () => {
  return (
    <>
      <h2 className="section__title different" data-aos="fade-right">
        &lt; &nbsp; <strong>Projects</strong> &nbsp; &frasl; &gt;
      </h2>
      <div className="section" id="project">
        {holeThing.map((item)=> <Single key={uuid()} props={item} />)}
      </div>
    </>
  );
};
