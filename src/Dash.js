import React, { Component } from "react";
import {
  OuterContainer,
  Button,
  Tab,
  Card,
  MainContainer
} from "./folder/StyledComponents";
import Nav from "./Nav";
import "./App.css";

class Dash extends Component {
  render() {
    return (
      <OuterContainer
        backgroundColor="black"
        justifyContent="none"
        backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)"
      >
        <Nav />
        <div>
          <Tab margin="6% 0 0 0"> Recent </Tab>
          <Tab margin="6% 0 0 0"> Lesson </Tab>
          <Tab margin="6% 0 0 0"> Drills </Tab>
        </div>
        <MainContainer>
          <Card backgroundImage="url(https://www.gizmo-experience.com/wp-content/uploads/2018/10/gizmo-homepage-mobile-fallback-1.jpg)">
            <div
              style={{
                width: "100%",
                position: "relative",
                top: "20%",
                height: "50%",
                backgroundColor: "rgb(37,37,37)"
              }}
            >
              {" "}
              Lesson 1{" "}
            </div>
          </Card>
          <Card> Lesson 2 </Card>
          <Card> Lesson 3 </Card>
          <Card> Lesson 4 </Card>
          <Card> Lesson 5 </Card>
          <Card> Lesson 6 </Card>
        </MainContainer>
      </OuterContainer>
    );
  }
}

export default Dash;
