import react from "react";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.addclick = this.addclick.bind(this);
    this.decreaseclick = this.decreaseclick.bind(this);
    this.clearclick = this.clearclick.bind(this);
  }

  addclick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  clearclick() {
    this.setState((prevState) => {
      return { count: (prevState.count = 0) };
    });
  }

  decreaseclick() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button id="button" onClick={this.addclick}>
          {" "}
          add it!
        </button>
        <button onClick={this.clearclick}> clear it!</button>
        <button onClick={this.decreaseclick}> decrease it!</button>
      </div>
    );
  }
}
export default App;
