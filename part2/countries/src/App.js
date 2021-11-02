import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const data = res.data;
        setCountries(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  const toShow = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searched.toLowerCase())
  );

  // const toShow = countryNames.filter((c) =>
  //   c.toLowerCase().includes(searched.toLowerCase())
  // );

  return (
    <div>
      <h1>Ebrima's Countries App</h1>
      <div>
        <p>
          find countries{" "}
          <input type="text" value={searched} onChange={handleSearch} />
        </p>
        {toShow.length > 1 && toShow.length < 11
          ? toShow.map((c) => {
              return (
                <p>
                  {c.name.common} <button>show</button>
                </p>
              );
            })
          : toShow.length === 1
          ? toShow.map((c) => {
              return (
                <div>
                  <h2>{c.name.common}</h2>
                  <p>capital {c.capital}</p>
                  <p>population {c.population}</p>
                  <h3>languages</h3>
                  <ul>
                    {Object.keys(c.languages).map((key, index) => (
                      <li>{c.languages[key]}</li>
                    ))}
                  </ul>
                  <div>
                    <img src={c.flags.png} alt="country flag" srcset="" />
                  </div>
                </div>
              );
            })
          : searched.length === 0
          ? "please type in a valid country name"
          : "Too many matches, specify another filter"}

        {}
      </div>
    </div>
  );
};

export default App;
