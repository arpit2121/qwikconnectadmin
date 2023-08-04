import { Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ProfileIcon from "../../icons/ProfileIcon";
import CreditCardIcon from "../../icons/CreditCardIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import UserPlusIcon from "../../icons/UserplusIcon";
import PasswordIcon from "../../icons/PasswordIcon";
import SupportIcon from "../../icons/SupportIcon";
import APIIcon from "../../icons/APIIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import CustomAllTypography from "../../typography/CustomTypograpgy";

const useStyles = makeStyles({
  menuList: {
    "&..MuiMenuItem-root": {
      width: "15rem",
    },
  },
});

const SettingMenu = ({ open, setOpen }) => {
  const settingOptions = [
    {
      icon: <ProfileIcon />,
      title: "View profile",
    },
    {
      icon: <CreditCardIcon />,
      title: "Plans & Billings",
    },
    {
      icon: <SettingsIcon height={16} width={16} color="#344054" />,
      title: "Settings",
    },
    {
      icon: <UserPlusIcon height={16} width={16} color="#344054" />,
      title: "Invite colleagues",
    },
    {
      icon: <PasswordIcon />,
      title: "Change password",
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
    },
  ];
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const openSetting = Boolean(open);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Menu
      id="lock-menu"
      anchorEl={open}
      sx={{ marginLeft: 7, padding: 0 }}
      open={openSetting}
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
          onClick={(event) => handleMenuItemClick(event, index)}
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
