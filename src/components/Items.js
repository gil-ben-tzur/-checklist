import React from 'react'
import Item from '../containers/_Item.js'

const Items = ({ additem }) => (

   <ul>
    {additem.map(item =>
      <Item key={item.id} {...item} 
      />
    )}

  </ul>
)

export default Items