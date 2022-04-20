import React from "react";
import "./App.css";
import { BsChatRightDots, BsArrowsAngleContract } from "react-icons/bs";
import { CgArrowsExpandLeft } from "react-icons/cg";
class App extends React.Component {
  state = {
    open: true,
    expand: false,
  };

  render() {
    const { open, expand } = this.state;
    return (
      <React.Fragment>
        <div>
          {!open ? (
            <button
              class="open-button"
              onClick={() =>
                this.setState({ open: true }, () => {
                  console.log("clicked", this.state.open);
                })
              }
            >
              <BsChatRightDots size={22} color={"blue"} />
            </button>
          ) : (
            <div className= {expand ? "center-box" :"chat-popup"}  id="myForm">
              <div
                style={{
                  width: "100%",
                  background: "blue",
                  color: "white",
                  padding: "10px",
                }}
              >
                Header
                <span style={{ float: "right" }}>
                  {expand ? (
                    <BsArrowsAngleContract
                      onClick={() => this.setState({ expand: false })}
                    />
                  ) : (
                    <CgArrowsExpandLeft
                      onClick={() => this.setState({ expand: true })}
                    />
                  )}
                  &nbsp;&nbsp;
                  <span
                    onClick={() => {
                      this.setState({ open: false });
                    }}
                  >
                    {" "}
                    X
                  </span>
                </span>
              </div>
              <form class="form-container">


              </form>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
