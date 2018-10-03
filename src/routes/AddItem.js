import React from 'react'
import _AddItem from '../containers/_addItem'
import Home from '../components/Home'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


export default () =>  <div><Home/><_AddItem /></div>