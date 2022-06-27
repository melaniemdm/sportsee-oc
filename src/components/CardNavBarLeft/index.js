import "./style.scss";

import { Link } from "react-router-dom";

function CardNavBarLeft(props) {
  return (
    <div className="containerIcones">
      <div className="layoutIcone">
        <nav className="navLeft">
        <Link to="" className="">
          <img src={props.data.picture} alt="Icone de navigation left" className="containerIconeNavBarLeft" />
        </Link></nav>
      </div>
     

    </div>
  );
}
export default CardNavBarLeft;
