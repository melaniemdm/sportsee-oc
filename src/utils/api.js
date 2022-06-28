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


 export  const getDailyActivity = async (id, setDailyActivity) => {
        const { data } = await axios.get(`http://localhost:3000/user/`+ id +`/activity`);
      
        const activitiesArray = data.data.sessions.map(activity=> { 
            return{
               name: activity.day,
               kilogram: activity.kilogram,
               calories: activity.calories
            }
           
          })
          setDailyActivity(activitiesArray)
          }

        export   const getPerformance=async(id, setPerformance)=>{
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