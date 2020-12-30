import React from "react";
import { OverviewList } from "./components/Overview";
// Will handle input field logic

// Scope of app:
// input, submit button
// add content to tasks array that is managed in state
// for each tasks array html list elem should be rendered.
// Overview will be a component that renders out the list.

class App extends React.Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      value: "",
      tasks: [],
    };

    //binded methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.value]
    }))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Task:</label>
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
        <OverviewList tasks={this.state.tasks}></OverviewList>
      </div>
    );
  }
}

export default App;
