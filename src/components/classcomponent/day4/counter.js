import "./counter.css";
import { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    // message: "My counter App",
    buttonText: "subscribe",
    isSubscribe: false,
  };

  changeAction = (action) => {
    switch (action) {
      case "INCREMENT":
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case "DECREMENT":
        if (this.state.count > 0)
          this.setState({
            count: this.state.count - 1,
          });
        break;
      case "RESET":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }
  };

  subscribeAction = () => {
    this.setState({
      buttonText: "Subscribed",
      isSubscribe: !this.state.isSubscribe,
    });
  };
  // incrementAction=()=>{
  //     this.setState({count:this.state.count+1},()=>{

  //     })
  // }
  // decrementAction=()=>{
  //     this.setState({count:this.state.count-1},()=>{

  //     })

  // }
  // resetAction=()=>{
  //     this.setState({count:0},()=>{

  //     })

  // }

  render() {
    return (
      <div className="counters">
        <button
          onClick={this.subscribeAction}
          style={{ backgroundColor: this.state.isSubscribe ? "green" : "red" }}
        >
          {this.state.isSubscribe ? "Subscribed" : "subscribe"}
        </button>
        {this.state.isSubscribe && (
          <>
            <h1>{this.state.count}</h1>
            <div className="cs">
              <button onClick={() => this.changeAction("DECREMENT")}>
                Decrement
              </button>
              <button onClick={() => this.changeAction("RESET")}>Reset</button>
              <button onClick={() => this.changeAction("INCREMENT")}>
                Increment
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Counter;
