import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Cart from "@material-ui/icons/AddShoppingCartOutlined";
import User from "@material-ui/icons/VerifiedUserOutlined";
import { css } from "@emotion/react";
import Home from "@material-ui/icons/HomeOutlined";

const icon = css`
  font-size: 60px !important;
`;
const actionButton = css`
  flex: 0.25 !important;
  .MuiBottomNavigationAction-label {
    font-size: 22px !important;
  }
`;
export default function Footer() {
  return (
    <BottomNavigation
      onChange={(event, newValue) => {}}
      showLabels
      css={css`
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 150px !important;
      `}
    >
      <BottomNavigationAction
        css={actionButton}
        label="Home"
        icon={<Home css={icon} />}
      />
      <BottomNavigationAction
        css={actionButton}
        label="Cart"
        icon={<Cart css={icon} />}
      />
      <BottomNavigationAction
        css={actionButton}
        label="PROFILE"
        icon={<User css={icon} />}
      />
    </BottomNavigation>
  );
}