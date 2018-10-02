import React, {component}from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/'
import  itemStatusReducer  from '../reducers/item-status.js'
import DarkBG from '../components/DarkBG'
import _Items from'./_items'
import '../styles/add-item.scss'
import BackButton from './_backButton'
//how to erite it smarter?
const _AddItem = ({ dispatch }) => {
  let title,description;
  let status = itemStatusReducer;
  console.log(status,itemStatusReducer)
  return (
    <DarkBG>

      <form 
      	className="add-item" 
      	onSubmit={(e) => {
	        e.preventDefault()
	        if (!title.value.trim() || !description.value.trim()) {
	          return
	        }
        	dispatch(addItem(title.value,description.value,status[0]))
        	title.value = ''
          description.value = ''
          
      		}}>

            <div className="add-item--header">
            		<input ref={node => title = node} type="text" placeholder="Add Title" />
            </div>

            <div className="add-item--body">
              <div className="add-item--body--description">
                <textarea ref={node => description = node} type="text" placeholder="Add Description" />
              </div>
            </div>
            <BackButton btnClass='btn'>Create</BackButton>
      </form>
    </DarkBG>
  )
}

export default connect()(_AddItem)
