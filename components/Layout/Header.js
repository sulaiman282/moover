import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assests/logowhite.png";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";

import store from "@/rtk/store/store";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cookies] = useCookies(["token"]);

  const Token = useSelector((state) => state.User.token);
  const token1 = sessionStorage.getItem("token");
  const token2 = cookies?.token;

  return (
    <section className="flex justify-between px-5 bg-primary lg:py-2 ">
      <Link href="/">
        <Button variant="text">
          <Image
            placeholder="blur"
            src={Logo}
            alt="Logo"
            className="object-contain h-full  lg:w-40 w-32"
          />
        </Button>
      </Link>
      <IconButton
        variant="text"
        className="text-primary w-fit h-fit"
        onClick={handleClick}
      >
        <Avatar
          className="border-2 border-primary2 "
          src="/static/images/avatar/1.jpg"
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div>
          {token1 || Token || token2 ? (
            <>
              <Link href="/">
                <MenuItem
                  onClick={handleClose}
                  className="text-md font-sans  hover:bg-primary hover:text-white duration-300 "
                >
                  <div className="flex items-center gap-4 ">
                    <DashboardCustomizeIcon className="text-md  " /> Dashboard
                  </div>
                </MenuItem>
              </Link>

              <div onClick={(e) => logoutFunction()}>
                <MenuItem
                  onClick={handleClose}
                  className="text-md font-sans  hover:bg-primary hover:text-white duration-300"
                >
                  <div className="flex items-center gap-4 ">
                    <LogoutIcon className="text-md  " /> Logout
                  </div>
                </MenuItem>
              </div>
            </>
          ) : (
            <Link href="/login">
              <MenuItem
                onClick={handleClose}
                className="text-md font-sans  hover:bg-primary hover:text-white duration-300 "
              >
                <div className="flex items-center gap-4 ">
                  <LoginIcon className="text-md  " /> Login
                </div>
              </MenuItem>
            </Link>
          )}
        </div>
      </Menu>
    </section>
  );
}
