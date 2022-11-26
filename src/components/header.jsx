import React from 'react'
import './styles/header.css';
import dogHeaderPhoto from "./photos/header.png"

function Header() {
  return (
    <div className="Title">
      <img class="header-img" src={dogHeaderPhoto} width="270" height="230"/>
      <h1>The Weiner Web</h1>
    </div>
  )
}

export default Header;