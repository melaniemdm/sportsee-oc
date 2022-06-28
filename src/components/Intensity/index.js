import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from "recharts";
import {getPerformance} from '../../utils/api';
import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';



/**
 * It takes the data from the API and maps it to an array of objects.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>useMemo</code> to memoize the data.
 * <code>const performancesArray = useMemo(() =&gt; {
 *   return data.data.data.map(performance =&gt; {
 *     return {
 *       subject: data.data.kind[performance.kind],
 *       A: performance.value,
 *       fullMark: 150
 *     };
 *   });
 * }, [data]);
 * </code>
 * @returns An array of objects.
 */
export default function Intensity() {
const [performances,setPerformance] = useState([]);
// eslint-disable-next-line react-hooks/exhaustive-deps
const {id} = useParams();
/**
 * It takes the data from the API and maps it to an array of objects.
 */


/* A hook that is called when the component is mounted. */
useEffect(() => {
  getPerformance(id, setPerformance);
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  return (
    <RadarChart
    outerRadius={75}
      cx={125}
      cy={130}
           width={300}
      height={250}
      data={performances}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" tick={{fontSize: 12}}/>
      
      <Radar
        name="Mike"
        dataKey="A"
        stroke="red"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
