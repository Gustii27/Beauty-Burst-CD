import React from 'react'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import ItemDetailContainer from './ItemDetailContainer'

const Root = () => {
  return (
    <>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer />
    </>
  )
}

export default Root