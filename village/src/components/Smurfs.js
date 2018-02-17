import React, { Component } from 'react';
// import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    console.log(this.props.smurfs.length)
    return (
      <div className="Smurfs">
      {this.props.smurfs.length !== 0 && <h1>Smurf Village</h1>}
        {this.props.loading && <div>Loading...</div>}
        {!this.props.loading && (
          <ul>
            { this.props.smurfs.map((smurf, i) => {
              return (
                <Smurf 
                  name={smurf.name} 
                  age={smurf.age} 
                  height={smurf.height} 
                  key={smurf.id}
                  id={smurf.id}
                  deleteSmurf={this.deleteSmurf}
                  loadSmurfs={this.props.loadSmurfs}
                />)
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Smurfs;