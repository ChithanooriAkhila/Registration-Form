import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    registered: false,
    firstNameEmpty: false,
    lastNameEmpty: false,
  }

  onChangeLastName = event => {
    if (event.target.value !== '') {
      this.setState({lastName: event.target.value, lastNameEmpty: false})
    } else {
      this.setState({lastName: event.target.value})
    }
  }

  onChangeFirstName = event => {
    if (event.target.value !== '') {
      this.setState({firstName: event.target.value, firstNameEmpty: false})
    }
    this.setState({firstName: event.target.value})
  }

  lastNameRequired = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameEmpty: true})
    }
  }

  renderLastNameField = () => {
    const {lastName, lastNameEmpty} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="username-input-filed"
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.lastNameRequired}
        />
        <p>{lastNameEmpty ? 'Required' : ''}</p>
      </>
    )
  }

  firstNameRequired = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameEmpty: true})
    }
  }

  renderFirstNameField = () => {
    const {firstName, firstNameEmpty} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="username-input-filed"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.firstNameRequired}
        />
        <p>{firstNameEmpty ? 'Required' : ''}</p>
      </>
    )
  }

  submitForm = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameEmpty: true, lastNameEmpty: true})
    } else if (firstName === '') {
      this.setState({firstNameEmpty: true})
    } else if (lastName === '') {
      this.setState({lastNameEmpty: true})
    } else {
      this.setState({registered: true})
    }
  }

  submitAnotherForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      registered: false,
      firstNameEmpty: false,
      lastNameEmpty: false,
    })
  }

  render() {
    const {registered} = this.state
    return (
      <div className="login-form-container">
        {registered ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="login-button"
              onClick={this.submitAnotherForm}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.submitForm}>
            <h1>Registration</h1>
            <div className="input-container">{this.renderFirstNameField()}</div>
            <div className="input-container">{this.renderLastNameField()}</div>
            <button
              type="submit"
              className="login-button"
              onClick={this.submitForm}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default LoginForm
