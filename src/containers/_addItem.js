import React, {component}from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/'
import DarkBG from '../components/DarkBG'
import _Items from'./_items'
import '../styles/item-edit.scss'
import BackButton from './_backButton'

const _AddItem = ({ dispatch }) => {
  let title,description;
  return (
    <DarkBG>
    <div>
      <form 
      	className="add-item" 
      	onSubmit={e => {
	        e.preventDefault()
	        if (!title.value.trim() ) {
	          return
	        }
        	dispatch(addItem(title.value),console.log(title.value))
        	title.value = ''
      		}}>
        <div className="add-item--header">
        	<span className="add-item--header--title">
        		<input ref={node => title = node} type="text" placeholder="Item Title" />
        	</span>
        </div>
        <div className="add-item--body">
          <textarea ></textarea>
        </div>
        <BackButton btnClass='btn'>Create</BackButton>
      </form>
      <_Items />
      </div>
    </DarkBG>
  )
}

export default connect()(_AddItem)
