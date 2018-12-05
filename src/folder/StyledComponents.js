import styled from "styled-components";

export const OuterContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "white"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  overflow: scroll;
  overflow-x: hidden;
`;
export const MainContainer = styled.div`
  width: ${props => props.width || "70vw"};
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  flex-wrap: wrap;
`;
export const Button = styled.button`
  height: ${props => props.height || "50px"};
  width: ${props => props.width || "127px"};
  border-color: ${props => props.borderColor || "rgba(255,255,255,0.4)"};
  border-width: ${props => props.borderSize || "1px"};
  border-style: ${props => props.borderStyle || "solid"};
  border-radius: ${props => props.borderRadius || "5.6rem"};
  border-top: ${props => props.borderTop || null};
  border-bottom: ${props => props.borderBottom || null};
  border-left: ${props => props.borderLeft || null};
  border-right: ${props => props.borderRight || null};
  background-image: ${props => props.backgroundImage || null};
  color: ${props => props.color || "white"};
  margin: ${props => props.margin || null};
  padding: ${props => props.padding || null};
  font-size: ${props => props.fontSize || "15px"};
  background-color: ${props => props.backgroundColor || "rgba(0, 0, 0, 0.01)"};
  letter-spacing: ${props => props.letterSpacing || "1px"};
  font-weight: ${props => props.fontWeight || "700"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  box-shadow: ${props => props.boxShadow || "0px -3px 20px -6px inset #a7f5f1"};
  transition: ${props => props.transition || "0.5s"};
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: 0px -3px 20px -3px inset #a7f5f1;
    transition: ${props => props.transition || "0.5s"};
  }
`;

export const Tab = styled(Button)`
  height: ${props => props.height || "60px"};
  width: ${props => props.width || "20rem"};
  border-radius: ${props => props.borderRadius || "0.25rem"};
  border-color: ${props => props.borderColor || "rgba(255,255,255,0.4)"};
  background-image: ${props => props.backgroundImage || null};
  outline: none;
`;

export const Card = styled.div`
  height: ${props => props.height || "41vh"};
  width: ${props => props.width || "20vw"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "rgb(34, 34, 34)"};
  color: ${props => props.color || "rgb(170, 170, 170)"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  border-radius: ${props => props.borderRadius || "3%"};
  border: ${props => props.border || "1px solid rgb(0, 0, 0)"};
  box-shadow: ${props =>
    props.boxShadow || "0px 4px 6px -3px inset rgb(0,216,255)"};
  margin: ${props => props.margin || "25px"};
`;
export const NavContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props => (props.showNav ? "100vw" : "0vw")};
  height: 5vh;
  background-color: rgb(20, 117, 135);
  background-image: linear-gradient(
    20deg,
    rgb(0, 216, 255)-24%,
    rgb(38, 38, 38) 106%
  );
  transition: 0.5s;
`;
export const Title = styled.h1`
  font-size: 40px;
  color: white;
  letter-spacing: 1px;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 65vw;
`;
export const RightContainer = styled.div`
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
`;
export const UpperRight = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 216, 255);
`;
export const BottomRight = styled(UpperRight)`
  background-color: rgb(37, 37, 37);
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${props => (props.showMenu ? "100vh" : "0vh")};
  width: ${props => (props.showMenu ? "100vw" : "0vw")};
  background-color: ${props =>
    props.showMenu ? "rgba(0,0,0,0.2)" : "rgba(53, 203, 191, 0.2)"};
  border-radius: 0 0 100% 0;
  transition: ${props => (props.showMenu ? "0.5s" : "0.15s")};
  transition-delay: ${props => (props.showMenu ? "0.4s" : "0.2s")};
`;

export const MenuInner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0 0 100% 0;
  height: ${props => (props.showMenu ? "90vh" : "0vh")};
  width: ${props => (props.showMenu ? "90vw" : "0vw")};
  background-image: linear-gradient(
    20deg,
    rgb(0, 216, 255)-24%,
    rgb(38, 38, 38) 106%
  );
  /* background-image: url("https://www.gizmo-experience.com/wp-content/uploads/2018/10/gizmo-homepage-mobile-fallback-1.jpg"); */
  box-shadow: ${props =>
    props.showMenu ? "2px -8px 40px 2px black" : "0 0 0 0"};
  transition: ${props => (props.showMenu ? "0.4s" : "0.2s")};
`;

export const MenuButtons = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.showMenu ? "translateX(120px)" : "translateY(1000px)"};
  top: -25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: ${props => (props.showMenu ? "30px" : "1px")};
  transition: ${props => (props.showMenu ? "1s" : "0s")};
  transition-delay: ${props => (props.showMenu ? "1s" : "0s")};
`;
export const MenuToggle = styled.button`
  position: absolute;
  left: 0;
  font-size: 25px;
  margin: 3px 2% 0 1%;
  background-color: rgba(0, 0, 0, 0.02);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
