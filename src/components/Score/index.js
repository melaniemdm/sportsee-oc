import './style.scss';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RadialBarChart, RadialBar } from "recharts";
import { useParams } from 'react-router-dom';


export default function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  /**
   * I'm getting data from an API and then I'm setting the data to a variable called score.
   */
  const getData = async () => {
  const { data } = await axios.get(`http://localhost:3000/user/` + id);
const scoreUser = data.data.todayScore ? data.data.todayScore : data.data.score;
const dataScore = [
  { name: "Group A", value: scoreUser,"fill": "red" },
  { name: "Group B", value: 1 - scoreUser,"fill": "red" },
 
];
setScore(dataScore)
console.log(dataScore)
  }

 /* It's a hook that is called when the component is mounted. */
  useEffect(() => {
    getData();
  });

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