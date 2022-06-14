import React from 'react'
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./DetailsView.css"

const DetailsView = () => {
  const [country] = useFetch();
  const { name } = useParams();
  
  const language = (input) => {
    return Object.keys(input).map(i => input[(i)] + ' ');
  } 
 
  return (
    <div className='details_row'>   
      <div className='link_back'><Link className='link_back_to' to="/"><MdOutlineKeyboardBackspace className='arrow_back'/>Back</Link></div>
      {country.filter((i) => String(i.name.common) === String(name)).map(item => (   
        <div className='app__card__detials'>
        <div className='col_img'>
            <img src={item.flags.png} alt={item.name.common}/>
        </div>
        <div className='col_info'>
           <h2>{item.name.common}</h2>
           <div className='body_info'>
            <ul>
              <li>Official Name: <span>{item.name.official ? item.name.official : "Not Name"}</span></li>
              <li>Population: <span>{item.population ? item.population : "Not Population"}</span></li>
              <li>Region: <span>{item.region ? item.region : "Not Region"}</span></li>
              <li>Sub Region: <span>{item.subregion ? item.subregion : "Not Sub-Region"}</span></li>
              <li>Capital: <span>{item.capital ? item.capital : "Not Capital"}</span></li>
            </ul>
            <ul>
              <li>Top Level Domain: <span>{item.tld ? item.tld : "Not Top-Domain"}</span></li>
               <li>Currencies: <span>{item.currencies ? item.currencies[Object.keys(item.currencies)[0]].name : "Not Currencies" }</span></li> 
              <li>Languages: <span>{item.languages ? language(item.languages) : "Not Language"}</span> </li>
            </ul>
           </div>
           <div className='footer_info'>
             <li>Border Countries: </li>
            <div className='list_btn'>
            {item.borders ? item.borders.slice(0, 3).map(item => {
                  return country.filter((i) => i.cca3 === item )
                  .map((m , k) => <Link to={`/details/${m.name.common}`} className="link-detail"> <span key={k}>{m.name.common}</span> </Link> );
                }) : "Not Border Countries"} 
            </div> 
           </div>
        </div>
    </div>
        
      ))}
    </div>
  )
}

export default DetailsView