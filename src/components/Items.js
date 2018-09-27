import React from 'react'
import Item from './Item.js'

const Items = ({ items }) => (
   <ul>
    {items.map(item =>
      <Item key={item.id} {...item} />
    )}
  </ul>
)



export default Items