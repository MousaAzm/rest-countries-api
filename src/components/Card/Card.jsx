import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ props }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    const url = `/details/${props.name.common}`
    navigate(url);
  };
  
  return (
    <div className='app__column'>
      <div className='app__card__item' onClick={handleRoute}>
        <img src={props.flags.png} alt={props.name.common}/>
        <div className='app__card__body'>
          <h3>{props.name.common}</h3>
          <div>
          <ul>
             <li>Population: <span>{props.population}</span></li>
             <li>Region: <span>{props.region}</span></li>
             <li>Capital: <span>{props.capital}</span></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
