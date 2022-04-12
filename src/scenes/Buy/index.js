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




// let SourceResearcher = ({handleSubmit, history}) => {

class SourceResearcher extends React.Component {

  constructor(props) {
    super(props)

    this.state = {searchResults: []}
  }

  onSearch = (values) => {
    // console.log('[DEBUG] values', values)
    // var { history } = this.props
    let url = "https://jsonplaceholder.typicode.com/posts" // TODO: Put localhost link to Ethereum blockchain
    let searchResults = [
      {
        id: 'testId',
        price: 40,
        description: 'This is a test'
      },
      {
        id: 'testId2',
        price: 50,
        description: 'This is a test 2'
      }
    ]

    return (
      axios.post(url, values)
      .then((res) => {
        console.log('[DEBUG] res', res)
        // history.push('/')
        // this.setState({searchResults: res.data})
        this.setState({searchResults: searchResults})

      })
      .catch((err) => {
        console.log('[DEBUG] err', err)
      })
    )

  }
  onBuy = (values) => {
    // console.log('[DEBUG] values', values)
    // var { history } = this.props
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

    var { handleSubmit, history } = this.props
    var searchResultRows = this.state.searchResults.map((searchResult, i) => (
      <tr key={i}>
        <td>{searchResult.id}</td>
        <td>{searchResult.price}</td>
        <td>{searchResult.description}</td>
      </tr>
    ))

    return (
      <MuiThemeProvider>
        <div className='buy-container'>
          <form className='buy-form' onSubmit={handleSubmit(this.onSearch)}>
            <Field name='search' hintText='Enter Id' floatingLabelText='Search Data' component={TextField} fullWidth />
            <RaisedButton label="Search" type="submit" primary={true} fullWidth className='buy-submit-btn'/>
          </form>

          <form className='buy-form' onSubmit={handleSubmit(this.onBuy)}>
            <Field name='buy' hintText='Enter Id' floatingLabelText='Buy Data' component={TextField} fullWidth />
            <RaisedButton label="Buy" type="submit" primary={true} fullWidth className='buy-submit-btn'/>
          </form>

          {
            searchResultRows.length > 0
            && (
            <table className='buy-table'>
              <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
              <tbody>
                {searchResultRows}
              </tbody>
            </table>
            )
          }
        </div>
      </MuiThemeProvider>
    )

  }

}


// Decorate with redux-form
var ReduxFormHOC = reduxForm({
  form: 'sourceResearcherPage'
})(SourceResearcher)


export default connect()(withRouter(ReduxFormHOC))
// export default SourceResearcher
