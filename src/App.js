import { Component } from "react";
import PageHeader from "./components/PageHeader";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <PageHeader />
        <Resume />
      </div>
    );
  }
}

export default App;
