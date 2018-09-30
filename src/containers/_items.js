import { connect } from 'react-redux'
import Items from '../components/Items.js'

const gorg = (items) => {
  return items
}

const mapStateToProps = state => ({
  additem: gorg(state.additem)
})

export default connect(mapStateToProps)(Items)