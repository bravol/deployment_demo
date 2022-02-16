import React from "react";
import {
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBtnWrap,
  Icon,
  CloseIcon,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizza</SideBarLink>
        <SideBarLink to="/">Desserts</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute>Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;
