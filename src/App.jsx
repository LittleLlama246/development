import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Image, StyleSheet } from "react";
import dogData from "./assets/weiner-dogs.json";
import DogList from "./components/dogList.jsx";
import Header from "./components/header.jsx"
<link href="https://fonts.cdnfonts.com/css/party-confetti" rel="stylesheet"></link>


dogData.forEach((item) => {
    item.image = item.image;
});

const filterDefaults = {
  commonality: "",
  coattype: "",
  hair: "",
  favorites: false
}

function App() {
  //parameters 4 filter function
  const [sort, setSortParams] = useState("name");
  const [filter, setFilterParams] = useState(filterDefaults);
  const [favorites, setFavorites] = useState([]);
  const [cost, setTotal] = useState(0);

  // //sort
  const [p, setP] = useState(false);
  const [n, setN] = useState(false);

  // ////filter 
  // //commonality
  const [c, setC] = useState(false);
  const [r, setR] = useState(false);
  // //coat type
  const [s, setS] = useState(false);
  const [pa, setPA] = useState(false);
  const [d, setD] = useState(false);
  // //hair
  const [sm, setSM] = useState(false);
  const [l, setL] = useState(false);
  const [w, setW] = useState(false);

  //fave
  const [f, setFave] = useState(false);

  useEffect(() => {
    total();
  }, [favorites]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < favorites.length; i++) {
      totalVal += favorites[i].price;
    }
    setTotal(Math.round(totalVal * 100) / 100);
  };

  const handleFiltersOptionChange = (name, id) => {
    console.log("handle filter", name, id)
    switch (name) {
      case "commonality":
        setFilterParams({...filter, commonality: id})
        break
      case "coat":
        setFilterParams({...filter, coattype: id})
        break
      case "hair":
        setFilterParams({...filter, hair: id})
        break
      default:
    }
  }

  const handleSortChange = (value) => {
    sort !== value && setSortParams(value)
  }

  const handleFavoritesChange = (dog) => {
    if (favorites.some(p => p.name === dog.name)) {
      setFavorites(favorites.filter(p => p.name !== dog.name))
    } else {
      setFavorites(favorites.concat(dog))
    }
  }

  const handleReset = () => {
    setSortParams("name");
    setFilterParams(filterDefaults);
    setC(false);
    setR(false);
    setS(false);
    setPA(false); 
    setD(false);
    setSM(false);
    setL(false);
    setW(false);
    setP(false);
    setN(false);
    setFave(false);
  }

  const handleChange = (e) => {
    setFilterParams({...filter, favorites: !filter.favorites.value}); 
    setFave(e.target.checked);
    if(e.target.checked == false){
      handleReset();
    }
  }

  const unclick = () => {
    if(f == false) {
       handleReset()
  }
}

  return (
    <div className="App">
      <Header total={cost} fave={f}/>
      <div class="container">
        <div class="sort">
        <h2>Sort By</h2>
        <input type="radio" id="price" name="sortby" value="P" checked={p} onChange={(e) => {handleSortChange("price"); setP(e.target.checked); setN(!e.target.checked);}}/>
        <label for="price">Price</label><br></br>

        <input type="radio" id="price" name="sortby" value="N" checked={n} onChange={(e) => {handleSortChange("name"); setN(e.target.checked); setP(!e.target.checked);}}/>
        <label for="name">Name</label><br></br>

        <h2>Filter By</h2>
        <fieldset>
          <legend> Commonality </legend>
          <input type="radio" id="Common" name="commonality" value="C" checked={c} onChange={(e) => {handleFiltersOptionChange("commonality", "Common"); setC(e.target.checked); setR(!e.target.checked);}}/>
          <label for="common">Common</label><br></br>

          <input type="radio" id="Rare" name="commonality" value="R" checked={r} onChange={(e) => {handleFiltersOptionChange("commonality", "Rare"); setR(e.target.checked); setC(!e.target.checked);}}/>
          <label for="rare">Rare</label><br></br>
        </fieldset>

        <fieldset>
          <legend> Coat Type </legend>
          <input type="radio" id="Solid" name="coat" value="S" checked={s} onChange={(e) => {handleFiltersOptionChange('coat', "Solid"); setS(e.target.checked); setPA(!e.target.checked); setD(!e.target.checked);}}/>
          <label for="solid">Solid</label><br></br>

          <input type="radio" id="Pattern" name="coat" value="Pa" checked={pa} onChange={(e) => {handleFiltersOptionChange('coat', "Pattern"); setPA(e.target.checked); setS(!e.target.checked); setD(!e.target.checked);}}/>
          <label for="pattern">Pattern</label><br></br>

          <input type="radio" id="Duel" name="coat" value="D" checked={d} onChange={(e) => {handleFiltersOptionChange('coat', "Dual"); setD(e.target.checked); setPA(!e.target.checked); setS(!e.target.checked);}}/>
          <label for="duel">Duel</label><br></br>
        </fieldset>

        <fieldset>
          <legend> Hair </legend>
          <input type="radio" id="Smooth" name="hair" value="Sm" checked={sm} onChange={(e) => {handleFiltersOptionChange('hair', "Smooth"); setSM(e.target.checked); setL(!e.target.checked); setW(!e.target.checked);}}/>
          <label for="smooth">Smooth</label><br></br>

          <input type="radio" id="Long" name="hair" value="L" checked={l} onChange={(e) => {handleFiltersOptionChange('hair', "Long"); setL(e.target.checked); setSM(!e.target.checked); setW(!e.target.checked);}}/>
          <label for="long">Longhaired</label><br></br>

          <input type="radio" id="Wire" name="hair" value="W" checked={w} onChange={(e) => {handleFiltersOptionChange('hair', "Wire"); setW(e.target.checked); setL(!e.target.checked); setSM(!e.target.checked);}}/>
          <label for="wire">Wirehair</label><br></br>
        </fieldset>

        <input type="checkbox" checked={f} onChange={(e) => {handleChange(e)}}/>
        <label for="smooth">Favorites</label><br></br>
        <button id='reset' class="buttonReset" onClick={() => handleReset()}>Reset</button>
        </div>

        <div class="items">
          <DogList 
            filters={filter}
            sortParameter={sort}
            favorites={favorites}  
            handleFavoritesChange={handleFavoritesChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
