import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import React, { useEffect, useState } from "react";
import {getFirstName} from '../../utils/api';
import {getBMI} from '../../utils/api';
import { useParams } from "react-router-dom";

/**
 * I'm using axios to get data from my backend, then I'm setting the state of my component with the
 * data I got from my backend.
 * </code>
 * @returns A React component.
 */
function Profil() {
  const { id } = useParams();
  const [name, setFirstName] = useState([]);
  const [bodyMassIndex, setBMI] = useState([]);
  
  /* It's a hook that is called when the component is mounted. */
  useEffect(() => {
    getFirstName(id, setFirstName);
    getBMI(id, setBMI); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="containerProfil">
      <div className="titleProfil">Bonjour &nbsp;<div className="nameProfil">{name}</div>
      </div>
      <div className="txtProfil">
        <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      <div className="containerGraphUser">
      <div className="containerGraph">
      <div className="dailyActivity">
        <DailyActivity />
      </div>
      <div className="containerLittleGraphs">
      <div className="averageSession layoutLittlelGraph">
       
          <AverageSession />
        </div>
        <div className="intensity layoutLittlelGraph">
          <Intensity />
        </div>
        <div className="score layoutLittlelGraph">
          <Score />
        </div></div>
      </div>
              

      <div className="containerBodyMass">
        {bodyMassIndex.map((item, index) => (
          <BodyMassIndex key={index} data={item} />
        ))}
      </div>
    </div></div>
  );
}

export default Profil;
