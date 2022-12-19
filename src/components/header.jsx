import React from 'react'
import './styles/header.css';
import { useState } from "react";
import dogHeaderPhoto from "./photos/header.png"

function Header(props) {
  console.log("fave", props.fave);

  const [ps, setPS ] = useState(false);
  const [show, setShow] = useState(false);



  const handleNavigation = (e) => {
    const window = e.currentTarget;
    console.log("y", window.scrollY);
    if (window.scrollY <= 420) {
    } else if (window.scrollY >= 300) {
      setPS(true);
      this.setState({class: 'fixedElement'})
    }
  };

  console.log("fave", show);
  console.log(ps);

  const componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount();

  return (
    <div className="Title">
      <div class="header-left">
        <img class="header-img" src={dogHeaderPhoto} width="140" height="100" onScroll={handleNavigation}/>
        <h1>The Weiner Web</h1>
      </div>
      <div class="total"><span id={props.fave ? "show" : "hide"}>Have all your favorite <br></br> Weiner Dogs for: ${props.total}</span></div>
    </div>
  )
}

export default Header;
