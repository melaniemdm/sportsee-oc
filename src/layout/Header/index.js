import './style.scss';
import logo from '../../assets/logo.png';
import Navigate from '../../components/Navigate';


/**
 * It returns a header element with a logo and a Navigate component.
 * @returns The Header component is being returned.
 */
function Header(){
    return(
        <header className="containerHeader">
            <div className="logoImg">
<img src={logo} alt="logo SportSee" className="logoSportSee"/></div>
<Navigate/>
        </header>
    )
}
export default Header