import React, {Component} from 'react';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <h1>HOME </h1>
        <div>{ JSON.stringify(this.props) }</div>
      </div>
    );
  }
}

export default App;