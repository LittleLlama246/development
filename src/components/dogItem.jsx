// TODO: create a component that displays a single bakery item
import "./styles/doggie.css";
import { useState } from "react";
import gram from './photos/insta.png'
 
function DogItem(dog, handleFavoritesChange, isFavorite) {
  return(
    <div class="dog">
      <img src={dog.image} width="300" height="250" />
      <p class="name">{dog.name},&nbsp;<div class="price"> ${dog.price}</div> </p>
      <p class="description">{dog.color} Dachshund: {dog.description}</p>
      <div class="bottomrow">
        <a class="link" href={dog.gram}><img src={gram} width="40" height="40"/></a>
        <input class="fave" type="checkbox" onClick={() => handleFavoritesChange(dog)}/>
        <label class="fave-label">{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</label>
      </div>
    </div>
  )
}

export default DogItem;