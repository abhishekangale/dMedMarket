import React from 'react'
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  TextField
} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles.css'



// let CheckBalance = ({handleSubmit, history}) => {

class CheckBalance extends React.Component {

  constructor(props) {
    super(props)

    this.state = {balance: null}
  }

  onCheckBalance = (values) => {
    let url = "https://jsonplaceholder.typicode.com/posts" // TODO: Put localhost link to Ethereum blockchain

    return (
      axios.post(url, values)
      .then((res) => {
        console.log('[DEBUG] res', res)
      })
      .catch((err) => {
        console.log('[DEBUG] err', err)
      })
    )

  }

  render() {

    return (
      <div className='cb-container'>
        <div className='cb-content'>
          <div> Your balance is: {this.state.balance} </div>
          <h1> 1234 </h1>
        </div>
      </div>
    )

  }

}


// Decorate with redux-form
// var ReduxFormHOC = reduxForm({
//   form: 'CheckBalancePage'
// })(CheckBalance)


// export default connect()(withRouter(ReduxFormHOC))
export default CheckBalance
