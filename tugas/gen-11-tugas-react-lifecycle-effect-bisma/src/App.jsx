import React, { Component } from "react";
import SekolahFunc from "./SekolahFunc";
import Sekolah from "./Sekolah";

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      showLife: false
    }
  }

  render() {
    return <div>
      <h1>Database Sekolah</h1>
      <button onClick={() => {
        if (this.state.index == 4) this.setState({ index: 0 });
        else this.setState({ index: this.state.index + 1 });
      }}>
        Select School
      </button>
      <p>School number {this.state.index + 1}</p>
      <button onClick={() => {
        this.state.showLife ? this.setState({ showLife: false }) : this.setState({ showLife: true })
      }} >
        Change into {this.state.showLife ? 'Class Lifecycle' : 'Function Lifecycle'}
      </button>
      {this.state.showLife ?
        <div>
          <p>Current: Function Lifecycle</p>
          <SekolahFunc index={this.state.index} />
        </div>
        :
        <div>
          <p>Current: Class Lifecycle</p>
          <Sekolah index={this.state.index} />
        </div>
      }
    </div >
  }
}