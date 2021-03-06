import "./App.css";
import React from "react";
import {Button} from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Sherlock Holmes",
      bio: "You know my methods, Watson. When you have eliminated the impossible, whatever remains, however improbable, must be the truth?",
      profession: "Detective",
      imgSrc: (
        <img
          style={{ width: "240px", borderRadius: "20px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Sherlock_Holmes_Portrait_Paget.jpg"
          alt="Sherlock's photo"
        />
      ),
      date: new Date(),
      show: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  toggleShow = () => {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  render() {
    if (this.state.show) {
      return (
        <div>
          <div className="main">
            <div className="string">
              <h1>{this.state.FullName}</h1>,<h2>{this.state.bio}</h2>,
              <h1>{this.state.profession}</h1>,
            </div>
            <div> {this.state.imgSrc}</div>
          </div>
          <Button onClick={this.toggleShow}>Click Again</Button>
          <div className="time">
            The Local Time Is {this.state.date.toLocaleTimeString()}.
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={this.toggleShow}>Click Me</Button>
          <div className="time">
            The Local Time Is {this.state.date.toLocaleTimeString()}.
          </div>
        </div>
      );
    }
  }
}
export default App;
