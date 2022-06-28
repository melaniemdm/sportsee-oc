import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
import React, { useEffect, useState } from "react";
import {getAverageSessions} from '../../utils/api';
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
/* A hook that is called when the component is mounted. It is an asynchronous function that makes
an API call to the server and then sets the state of the component with the data returned by the API
call. */
useEffect(() => {
  getAverageSessions(id, setAverageSessions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (<div className="containerAverageSession">
  <div className="containerTitleGraphRed">Durée moyenne des sessions</div>
    <LineChart
      width={263}
      height={258}
      data={averageSessions}
      // margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
    >
      
      <XAxis dataKey="name" stroke="white" />
     
      <Tooltip />
     
      
      <Line type="monotone" dataKey="pv" name="min"   stroke="black" />
    </LineChart></div>
  );
}
