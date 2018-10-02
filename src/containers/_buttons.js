import { connect } from 'react-redux'
import Buttons from '../components/Buttons.js'
const statusButtons = (status) => {
  return status
}

const mapStateToProps = state => ({
  additem: statusButtons(state.additem.status)
})


export default connect(mapStateToProps)(Buttons)