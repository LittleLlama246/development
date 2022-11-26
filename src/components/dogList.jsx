import dogData from "../assets/weiner-dogs.json";
import DogItem from "./dogItem.jsx";
import './styles/dogList.css';
import { useState } from "react";

dogData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

const DogList = ({filters, sortParameter, favorites, handleFavoritesChange}) => {

  const filterDogs = dogData.filter((dog =>  {
    //commonality 
    if (filters.commonality === "Common") {
      if (dog.commonality !== "Common") return false
    }

    if (filters.commonality === "Rare") {
      if (dog.commonality !== "Rare") return false
    }

    //coat-type 
    if (filters.coattype === "Pattern") {
      if (dog.coattype !== "Pattern") return false
    }

    if (filters.coattype === "Solid") {
      if (dog.coattype !== "Solid") return false
    }

    if (filters.coattype === "Dual") {
      if (dog.coattype !== "Dual") return false
    }

    //hair
    if (filters.hair === "Long") {
      if (dog.hair !== "Long") return false
    }

    if (filters.hair === "Wire") {
      if (dog.hair !== "Wire") return false
    }

    if (filters.hair === "Smooth") {
      if (dog.hair !== "Smooth") return false
    }

    if (filters.favorites) {
      if (!favorites.some(d => d.name === dog.name)) return false
    }

    return true
  }))
  
  switch (sortParameter) {
    case "price":
      filterDogs.sort((a, b) => a.price > b.price ? 1 : -1,);
      break
    case "name":
      filterDogs.sort((a, b) => a.name > b.name ? 1 : -1,);
      break
    default:
  }

  console.log("dogs", filterDogs);

  return (
      filterDogs.map((dog) => (
          <div class="bakery-item" id={dog.name}>
            {DogItem(dog, handleFavoritesChange, favorites.some(someDog => someDog.name === dog.name))}
          </div>
        ))
  );
}

export default DogList;