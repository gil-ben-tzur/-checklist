import { connect } from 'react-redux'
import Items from '../components/Items.js'
const _itemStatus = (status) => {
  return status
}

const mapStateToProps = state => ({
  additem: _itemStatus(state.additem)
})


export default connect(mapStateToProps)(Items)