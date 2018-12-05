import React, { Component } from "react";
import {
  OuterContainer,
  NavContainer,
  MenuButtons,
  MenuInner,
  MenuContainer,
  MenuToggle
} from "./folder/StyledComponents";
import "./App.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      showMenu: false
    };
  }
  openMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ showNav: true });
      }.bind(this),
      500
    );
  }
  render() {
    const { showNav, moveNav, showMenu } = this.state;
    return (
      <NavContainer showNav={showNav} moveNav={moveNav}>
        <MenuContainer showMenu={showMenu}>
          <MenuInner showMenu={showMenu}>
            <MenuButtons showMenu={showMenu}>
              <h1>Profile</h1>
              <h2>Forum</h2>
              <h3>React Docs</h3>
              <h4>Sandbox</h4>
              <h5>About</h5>
              <h6>Logout</h6>
            </MenuButtons>
          </MenuInner>
        </MenuContainer>
        <MenuToggle onClick={() => this.openMenu()}>&#x2630;</MenuToggle>
      </NavContainer>
    );
  }
}

export default Nav;
