import './style.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
const getBarShape = (x, y, width, height, radius) => {
  const [tl, tr, bl, br] = radius;
  const d = `M${x},${y + tl}
        a${tl},${tl} 0 0 1 ${tl},${-tl}
        h${width - tl - tr}
        a${tr},${tr} 0 0 1 ${tr},${tr}
        v${height - tr - br}
        a${br},${br} 0 0 1 ${-br},${br}
        h${bl + (br - width)}
        a${bl},${bl} 0 0 1 ${-bl},${-bl}
        z`;
  return ({ fill, fillOpacity, stroke }) => (
    <path d={d} fill={fill} fillOpacity={fillOpacity} stroke={stroke} />
  );
};

/**
 * It takes the data from the API and maps it into an array of objects.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>useEffect</code> to fetch the data and set it to the state.
 * <code>import React, { useState, useEffect } from "react";
 * import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
 * import axios from "axios";
 * 
 * export default function DailyActivity() {
 *   const [activities, setActivities] = useState([]);
 *   const { id } = useParams();
 * 
 *   useEffect(() =&gt; {
 *     const getData = async () =&gt; {
 *       const { data } = await axios.get(`http://localhost:3000/user/` + id + `/activity`);
 * @returns The data from the API is being returned.
 */
export default function DailyActivity() {
  const [activities, setActivities] = useState([]);
  const {id} = useParams();
/**
 * It takes the data from the API and maps it into an array of objects.
 */
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/`+ id +`/activity`);

const activitiesArray = data.data.sessions.map(activity=> { 
    return{
       name: activity.day,
       kilogram: activity.kilogram,
       calories: activity.calories
    }
   
  })
  setActivities(activitiesArray)
  }
 
 /* A hook that is used for performing side effects in function components. It serves the same purpose
 as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified
 into a single API. */
  useEffect(() => {
    getData();
  });

  return (<div className="containerDailyActivity"> 
  <div className="containerTitleDailyActivity">
    <div className="titleDailyActivity">Activité quotidienne</div></div>
    <BarChart
      width={800}
      height={300}
      data={activities}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" stroke="white" />
      <YAxis yAxisId="right" orientation="right" stroke="gray" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} align="right" iconType="cercle"/>
      <Bar yAxisId="left" dataKey="calories" fill="black" barSize={7} shape={({ x, y, width, height, value, background }) => {
        const Bar = getBarShape(x, y, width, height, [4, 4, 0, 0]);
        return (
          <g>
            <rect
              x={background.x}
              y={background.y}
              width={background.width}
              height={background.height}
              fill={'transparent'}
            />

            <Bar fillOpacity={1} fill={'black'} />
          </g>
        );
      }}/>
      <Bar yAxisId="right" dataKey="kilogram" fill="red" barSize={7} shape={({ x, y, width, height, value, background }) => {
        const Bar = getBarShape(x, y, width, height, [4, 4, 0, 0]);
        return (
          <g>
            <rect
              x={background.x}
              y={background.y}
              width={background.width}
              height={background.height}
              fill={'transparent'}
            />

            <Bar fillOpacity={1} fill={'red'} />
          </g>
        );
      }}/>
     
     
    </BarChart></div>
  );
}
