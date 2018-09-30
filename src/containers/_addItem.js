import React, {component}from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/'
import DarkBG from '../components/DarkBG'
import _Items from'./_items'
import '../styles/item-edit.scss'

const _AddItem = ({ dispatch }) => {
  let title

  return (
    <DarkBG>
    <div>
      <form 
      	className="add-item" 
      	onSubmit={e => {
	        e.preventDefault()
	        if (!title.value.trim() || title.value==='add new item') {
	          return
	        }
        	dispatch(addItem(title.value),console.log(title.value))
        	title.value = 'add new item'
      		}}>
        <div className="add-item--header">
        	<span className="add-item--header--title">
        		<input ref={node => title = node} type="text" />
        	</span>
        </div>
        <button  className="btn" type="submit">Create</button>
      </form>
      <_Items />
      </div>
    </DarkBG>
  )
}

export default connect()(_AddItem)
