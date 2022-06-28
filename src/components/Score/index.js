import './style.scss';
import React, { useEffect, useState } from "react";
import {getDataScore} from '../../utils/api';
import { RadialBarChart, RadialBar } from "recharts";
import { useParams } from 'react-router-dom';




export default function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  /**
   * I'm getting data from an API and then I'm setting the data to a variable called score.
   */


 /* It's a hook that is called when the component is mounted. */
  useEffect(() => {
    getDataScore(id, setScore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div> Score
    <RadialBarChart
    width={263}
    height={228}
    cx={150}
    cy={100}
    innerRadius={20}
    outerRadius={140}
    barSize={10}
    data={score}
  >
    <RadialBar
      minAngle={15}
      label={{ position: "insideStart", fill: "#fff" }}
      background
      clockWise
      dataKey="value"
    />
   
  </RadialBarChart></div>
  );
}