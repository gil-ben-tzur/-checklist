import React, {component}from 'react'
import DarkBG from '../components/DarkBG'
import '../styles/item-edit.scss'
import { addItem } from '../actions/actionCreators'
import { connect } from 'react-redux'





const _AddItem = ({ dispatch }) => {
  let input

  return (
    <DarkBG>
      <form 
      	className="add-item" 
      	onSubmit={e => {
	        e.preventDefault()
	        if (!input.value.trim()) {
	          return
	        }
        	dispatch(addItem(input.value))
        	input.value = ''
      		}}>
        <div className="add-item--header">
        	<span className="add-item--header--title">
        		<input ref={node => input = node} />
        	</span>
        </div>
        <button  className="btn" type="submit">Create</button>
      </form>
    </DarkBG>
  )
}

export default connect()(_AddItem)
