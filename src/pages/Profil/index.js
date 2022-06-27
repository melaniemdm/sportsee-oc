import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import fire from "../../assets/fire.png";
import prot from "../../assets/prot.png";
import apple from "../../assets/apple.png";
import lipides from "../../assets/lipides.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * I'm using axios to get data from my backend, then I'm setting the state of my component with the
 * data I got from my backend.
 * </code>
 * @returns A React component.
 */
function Profil() {
  const { id } = useParams();
  const [name, setName] = useState([]);
  const [bodyMassIndex, setBodyMassIndex] = useState([]);
  /**
   * I'm using axios to get data from my backend, then I'm setting the state of my component with the
   * data I got from my backend.
   */
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/` + id);
    setName(data.data.userInfos.firstName);
    const keyData = data.data.keyData;

    let bmiArray = [];
    bmiArray.push({
      value: keyData.calorieCount,
      type: "Calories",
      picture: fire,
    });
    bmiArray.push({
      value: keyData.proteinCount,
      type: "Protéines",
      picture: prot,
    });
    bmiArray.push({
      value: keyData.carbohydrateCount,
      type: "Glucides",
      picture: apple,
    });
    bmiArray.push({
      value: keyData.lipidCount,
      type: "Lipides",
      picture: lipides,
    });
    setBodyMassIndex(bmiArray);
  };
  /* It's a hook that is called when the component is mounted. */
  useEffect(() => {
    getData();
  });

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
      <div className="averageSession">
       
          <AverageSession />
        </div>
        <div className="intensity">
          <Intensity />
        </div>
        <div className=" score">
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
