import { Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import APIIcon from "../../icons/APIIcon";
import CreditCardIcon from "../../icons/CreditCardIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import PasswordKeyIcon from "../../icons/PasswordKey";
import ProfileIcon from "../../icons/ProfileIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import SupportIcon from "../../icons/SupportIcon";
import CustomAllTypography from "../../typography/CustomTypograpgy";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  menuList: {
    "&..MuiMenuItem-root": {
      width: "15rem",
    },
  },
});

const SettingMenu = ({ open, setOpen, id }) => {
  console.log("hdjahdhjaj", id)
  const settingOptions = [
    {
      icon: <ProfileIcon />,
      title: "View profile",
      url: "myprofile"
    },
    {
      icon: <CreditCardIcon />,
      title: "Plans & Billings",
      url: "myPlans"
    },
    {
      icon: <SettingsIcon height={16} width={16} color="#344054" />,
      title: "Settings",
    },
    {
      icon: <SupportIcon height={16} width={16} color="#344054" />,
      title: "Invite colleagues",
    },
    {
      icon: <PasswordKeyIcon />,
      title: "Change password",
      url: "changepass"
    },
    {
      icon: <SupportIcon />,
      title: "Support",
    },
    {
      icon: <APIIcon />,
      title: "API",
    },
    {
      icon: <LogoutIcon />,
      title: "Log out",
      url: '/login'
    },
  ];
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navigate = useNavigate();
  const openSetting = Boolean(open);

  const handleMenuItemClick = (event, index,url) => {
    setSelectedIndex(index);
    if (url === '/login') {
      // Clear localStorage
      localStorage.clear();
    }
    navigate(url)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Menu
      id="lock-menu"
      anchorEl={open}
      sx={{ marginLeft: 7, padding: 0}}
      open={openSetting}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
    >
      {settingOptions?.map((option, index) => (
        <MenuItem
          sx={{
            "&.MuiMenu-root": { borderRadius: 7 },
            width: "15rem",
            height: "2.5rem",
          }}
          className={classes.menuList}
          key={option}
          selected={index === selectedIndex}
          onClick={(event) => handleMenuItemClick(event, index,option.url)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "1rem 0rem",
            }}
          >
            <div style={{ marginRight: "0.75rem" }}>{option.icon}</div>
            <CustomAllTypography
              name={option.title}
              variant="body1"
              color="#344054"
            />
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SettingMenu;
