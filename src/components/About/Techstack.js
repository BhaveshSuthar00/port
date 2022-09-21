import React from "react";
import './Techstack.css'
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiRedis,
  SiNestjs,
  SiTypescript,
  SiJavascript, 
  SiChakraui,
  SiMysql
} from "react-icons/si";
import { DiCss3, DiHtml5, DiMongodb } from "react-icons/di";
import { Single } from "./Single";
function Techstack() {
  return (
    <>
      <div className="techstack">
          <Single name={'CSS'} icon={<DiCss3 />} />
          <Single name={'Chakra Ui'} icon={<SiChakraui />} />
          <Single name={'HTML'} icon={<DiHtml5 />} />
          <Single name={'JavaScript'} icon={<SiJavascript />} />
          <Single name={'MySql'} icon={<SiMysql />} />
          <Single name={'MongoDb'} icon={<DiMongodb />} />
          <Single name={'Nest Js'} icon={<SiNestjs />} />
          <Single name={'Node Js'} icon={<FaNodeJs />} />
          <Single name={'React'} icon={<FaReact />} />
          <Single name={'Redux'} icon={<SiRedux />} />
          <Single name={'Redis'} icon={<SiRedis />} />
          <Single name={'TypeScript'} icon={<SiTypescript />} />
      </div>
    </>
    );
  }
  
  export default Techstack;