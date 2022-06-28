import axios from "axios";

export const getAverageSessions = async (id, setStateData) => {
    const arrayDay =["L", "M", "M", "J", "V", "S","D"];
    const { data } = await axios.get(`http://localhost:3000/user/`+ id +` /average-sessions`);
  const averageSessionsArray = data.data.sessions.map(averageSession=> { 
    return{
      name: arrayDay[averageSession.day -1],
      pv: averageSession.sessionLength,
    }
     })
  setStateData(averageSessionsArray)
  
  }

