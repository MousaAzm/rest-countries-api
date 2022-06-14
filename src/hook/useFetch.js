import { useEffect, useState } from "react";
import Axios from "axios";

const useFetch = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
  const getCountry = async () => {
    await Axios.get("https://restcountries.com/v3.1/all").then(
      (response) => {
        setCountry(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

    getCountry(); 
    
  }, []);
  return [country, setCountry];
}

export default useFetch