import { connect } from 'react-redux'
import Items from '../components/Items.js'
const _items = (items) => {
  return items
}

const mapStateToProps = state => ({
  additem: _items(state.additem)
})


export default connect(mapStateToProps)(Items)