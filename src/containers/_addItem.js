import React, {component}from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/'
import DarkBG from '../components/DarkBG'
import '../styles/item-edit.scss'
import _Items from'./_items'
const _AddItem = ({ dispatch }) => {
  let title

  return (
    <DarkBG>
    <div>
      <form 
      	className="add-item" 
      	onSubmit={e => {
	        e.preventDefault()
	        if (!title.value.trim()) {
	          return
	        }
        	dispatch(addItem(title.value))
        	title.value = ''
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
