import "./style.scss";
import CardNavBarLeft from '../../components/CardNavBarLeft';
import yoga from "../../assets/yoga.png";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import alter from "../../assets/alter.png";
import React, { useEffect, useState } from "react";

/**
 * It returns a div with a className of "containerIcone" which contains a div with a className of
 * "layoutIcone" which contains an img with a src of "yogatete" and an alt of "Icone Yogatete" and a
 * className of "yogaTete" and another img with a src of "yoga" and an alt of "Icone Yoga" and a
 * className of "yoga" and another div with a className of "layoutIcone" which contains an img with a
 * src of "bike" and an alt of "Icone Bike" and a className of "bike" and another div with a className
 * of "layoutIcone" which contains an img with a src of "swimtete" and an alt of "Icone SwimTete" and a
 * className of "swimTete" and another img with a src of "swim" and
 * @returns A React component.
 */
function NavBarLeft() {
  const [navBarLeft, setIconeNavBarLeft] = useState([]);

  const getData = async () => {
let iconeNavBarLeft=[];
iconeNavBarLeft.push({
  picture:yoga,
});
iconeNavBarLeft.push({
  picture:bike,
});
iconeNavBarLeft.push({
  picture:swim,
});
iconeNavBarLeft.push({
  picture:alter,
});
setIconeNavBarLeft(iconeNavBarLeft);}
useEffect(() => {
  getData();
});
  return (<div className="containerNavBarLeft ">
  
<div className="containerCard">
{navBarLeft.map((item, index)=>(
 <CardNavBarLeft  key={index} data={item}/>

))}</div>
   
      <div className="textNavBarLeft">
      Copiryght, SportSee 2020
      </div>
   </div>
  );
}
export default NavBarLeft;
