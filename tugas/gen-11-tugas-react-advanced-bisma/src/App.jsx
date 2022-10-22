import React, {Component} from "react";
import SekolahFunc from "./SekolahFunc";
// import Sekolah from "./Sekolah";

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
        {this.state.showLife ? 'Hide' : 'Show'} School
      </button>
      {this.state.showLife ?
        <SekolahFunc index={this.state.index} /> :
        // <Sekolah index={this.state.index} /> :
        null
    }
    </div >
  }
}