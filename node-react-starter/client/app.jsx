import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Main extends Component {
  render() {

    return (
      <div className="container">
        <h2>React Starter pack</h2>
        <hr />
        <div className="well">
          {new Date().toString()}
        </div>
      </div>
    )
  }
}

export default Main
