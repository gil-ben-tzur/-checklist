import { connect } from 'react-redux'
import Item from '../components/Item.js'
import {setStatus,deleteItem} from'../actions'

const mapStateToProps = state => ({
  itemStatus: (state.itemStatus)
})

const mapDispatchToProps = dispatch =>({
	setStatus: (id, status)=>{
		dispatch(setStatus(id,status))

	},
    deleteItem: (id)=>{
		dispatch(deleteItem(id))
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Item)