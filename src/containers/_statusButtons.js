import React, {component}from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/'
import classNames from 'classnames'
//how to erite it smarter?


const _StatusButton = ({ dispatch,itemStstus}) => {
  return (
      <form 
      	className={classNames('item-status'+' '+`${itemStstus}`)}>
          <button  className="btn on-p">on progress</button>
  
      </form>
  )
}

const mapStateToProps = state => ({
  additem: _StatusButton(state.additem)
})

export default connect()(_StatusButton)