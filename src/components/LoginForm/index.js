import {Component} from 'react'

import './index.css'

const websiteLogoInForm =
  'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onGetUsername = event => this.setState({username: event.target.value})

  onGetPassword = event => this.setState({password: event.target.value})

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    console.log(response)
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    return (
      <div className="login-container">
        <form
          className="login-form-container"
          onSubmit={this.onSubmitLoginForm}
        >
          <div className="form-logo-container">
            <img src={websiteLogoInForm} alt="website logo" />
          </div>
          <label className="form-label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={this.onGetUsername}
            placeholder="username"
            id="username"
          />
          <br />
          <br />
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={this.onGetPassword}
            placeholder="password"
            id="password"
          />
          <br />
          <br />
          <button className="form-submit-button" type="submit">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm