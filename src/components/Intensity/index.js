import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from "recharts";
//import {getPerformance} from '../../utils/data';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
//const dataPerf = getPerformance(18).data.data;
//const kind = getPerformance(18).data.kind; 




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
const {id} = useParams();
/**
 * It takes the data from the API and maps it to an array of objects.
 */
const getData=async()=>{
  const {data}=await axios.get('http://localhost:3000/user/'+id+'/performance')

const performancesArray = data.data.data.map(performance=> { 
  return{
    subject: data.data.kind[performance.kind],
    A: performance.value,
    fullMark: 150
  }
})
setPerformance(performancesArray)
}

/* A hook that is called when the component is mounted. */
useEffect(() => {
  getData();
});

  return (
    <RadarChart
    outerRadius={89}
      cx={130}
      cy={130}
           width={300}
      height={250}
      data={performances}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      
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
