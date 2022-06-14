import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { ClapSpinner } from "react-spinners-kit";
import { HiSearch } from "react-icons/hi";
import useFetch from "../../hook/useFetch";
import BackToTop from 'react-custom-back-to-top-button';
import "./HomeView.css";


const options = [
  {
    label: "Africa",
    value: "Africa",
  },
  {
    label: "America",
    value: "Americas",
  },
  {
    label: "Asia",
    value: "Asia",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Oceania",
    value: "Oceania",
  },
];

const HomeView = () => {
  const [country] = useFetch();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const Select = () => {
    setSelect(!select);
  }

  const handleFilter = (region) => {
    setFilter(region);
  }
  
 
  return (
    <div className="app__row">
      <section className="app__filter_search">
        <div className="app__search_box">
          <HiSearch className="icon-search" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div class="app__filter_box">
            <span name="country" id="country" className={`form-select ${select === true ? "open" : ""}`} onClick={Select}>Filter by region
            <div className="option_list">
              {options.map((option) => (
                <option onClick={() => handleFilter(option.value)}>{option.label}</option>
              ))}
              </div>
            </span>
        </div>
      </section>
      <section className="app_items_container">
        <div className="app__items">
          {loading ? (
            <span className="app__spinner">
              <ClapSpinner size={30} frontColor="#61dafb" backColor="#61dafb" />
            </span>
          ) : (
            <div className="app__display_card">
              {country
                .filter((item) => {
                  if(filter === ""){
                    return item;
                  }else if(filter === item.region){
                    return item
                  } 
                  return false;
                }).filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.name.common
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                  return false;
                })
                .map((item, index) => {
                  return ( 
                    <Card props={item} key={index}/>         
                  );
                })}
            </div>
          )}
        </div>
      </section>
      <BackToTop backgroundColor="#61dafb" color="#fff"/>
    </div>
  );
};

export default HomeView;
