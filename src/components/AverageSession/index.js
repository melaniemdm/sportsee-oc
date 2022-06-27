import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


/**
 * A function that returns a component that displays a graph
 * @returns An array of objects.
 */
export default function AverageSession() {
  const {id} = useParams();
const [averageSessions,setAverageSessions]= useState([]);
/* A function that is called when the component is mounted. It is an asynchronous function that makes
an API call to the server and then sets the state of the component with the data returned by the API
call. */

const getData = async () => {
  const arrayDay =["L", "M", "M", "J", "V", "S","D"];
  const { data } = await axios.get(`http://localhost:3000/user/`+ id +` /average-sessions`);
const averageSessionsArray = data.data.sessions.map(averageSession=> { 
  return{
    name: arrayDay[averageSession.day -1],
    pv: averageSession.sessionLength,
  }
 
})
setAverageSessions(averageSessionsArray)
console.log(averageSessionsArray)
}
 
/* A hook that is called when the component is mounted. It is an asynchronous function that makes
an API call to the server and then sets the state of the component with the data returned by the API

call. */
useEffect(() => {
  getData();
});

  return (<div className="containerAverageSession">
  <div className="containerTitleGraphRed">Durée moyenne des sessions</div>
    <LineChart
      width={263}
      height={258}
      data={averageSessions}
      
    >
      
      <XAxis dataKey="name" stroke="white" />
      
      <Tooltip />
     
      
      <Line type="monotone" dataKey="pv" stroke="white" />
    </LineChart></div>
  );
}
