import axios from "axios";
import fire from "../assets/fire.png";
import prot from "../assets/prot.png";
import apple from "../assets/apple.png";
import lipides from "../assets/lipides.png";

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

          export const getDataScore = async (id, setScore) => {
            const { data } = await axios.get(`http://localhost:3000/user/` + id);
          const scoreUser = data.data.todayScore ? data.data.todayScore : data.data.score;
          const dataScore = [
            { name: "Group A", value: scoreUser,"fill": "red" },
            { name: "Group B", value: 1 - scoreUser,"fill": "red" },
           
          ];
          setScore(dataScore)
          
            }

           export const getFirstName = async (id, setFirstName) => {
              const { data } = await axios.get(`http://localhost:3000/user/` + id);
              setFirstName(data.data.userInfos.firstName);
                };

              export  const getBMI = async (id, setBMI) => {
                  const { data } = await axios.get(`http://localhost:3000/user/` + id);
                 
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
                  setBMI(bmiArray);
                };