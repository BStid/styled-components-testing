import React, { Component } from "react";
import {
  OuterContainer,
  LeftContainer,
  RightContainer,
  UpperRight,
  BottomRight,
  Title,
  Button
} from "./folder/StyledComponents";
import Dash from "./Dash";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDash: false
    };
  }
  showDash = () => {
    this.setState({ showDash: true });
  };
  render() {
    const { showDash } = this.state;
    return (
      // <OuterContainer>
      //   <LeftContainer />
      //   <RightContainer>
      //     <UpperRight />
      //     <BottomRight>
      //       <Title>TEST TEST TEST</Title>
      //       <Button borderRadius="2px" onClick={() => this.showDash()}>
      //         Click me!
      //       </Button>
      //     </BottomRight>
      //   </RightContainer>
      //   {showDash ? <Dash /> : null}
      // </OuterContainer>
      <Dash />
    );
  }
}

export default App;
