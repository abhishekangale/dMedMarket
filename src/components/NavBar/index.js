import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import './styles.css'

let NavBar = () => (
  <div className="navbar">
    <div className="navbar-content">
      <NavLink className='navbar-link' to='/source-researcher'> Source Researcher </NavLink>
      <NavLink className='navbar-link' to='/buy'> Buy </NavLink>
      <NavLink className='navbar-link' to='/test'> test </NavLink>
      <NavLink className='navbar-link' to='/balance'> Check Balance </NavLink>
    </div>
  </div>
)


export default NavBar
