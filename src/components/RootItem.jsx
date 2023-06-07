import React from 'react'
import NavBar from './NavBar'
import ItemDetailContainer from './ItemDetailContainer'
import "./rootItem.css";

const RootItem = () => {
  return (
    <div className='background-body'>
        <NavBar/>
        <ItemDetailContainer />
    </div>
  )
}

export default RootItem