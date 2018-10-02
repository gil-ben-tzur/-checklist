import { connect } from 'react-redux'
import Item from '../components/Item.js'
import {setStatus} from'../actions'

const mapStateToProps = state => ({
  itemStatus: (state.itemStatus)
})

const mapDispatchToProps = dispatch =>{
	setStatus: (id, status)=>{
		dispatch(setStatus(id,status))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)