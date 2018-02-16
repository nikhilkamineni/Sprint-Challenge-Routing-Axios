import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  addSmurf = (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
    console.log(this.state);

    let { name, age, height } = this.state;
    let newSmurf = {
      "name": name,
      "age": Number(age),
      "height": height,
    }

    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then((response) => {
      console.log(this.state)
      console.log('Response', response);
      this.props.loadSmurfs();
      this.resetForm();
    })
    .catch((err) => {
      console.error('Error', err)
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h3>ADD SMURF</h3>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;