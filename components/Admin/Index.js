import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import VendorList from "./Add_Vendor/CreateVendor";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Button from "@mui/material/Button";
import Logo from "../../public/logo.png";
import Image from "next/image";
import useWindowSize from ".././../hooks/useWindowSize";

export default function Index() {
  const [tab, setTab] = useState("Add Vendor");
  const [isOpen, setIsOpen] = React.useState(false);

  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize?.width < 1024) {
      setIsOpen(false);
    }
  }, [windowSize]);

  const toggleDrawer = () => {
    if (windowSize?.width < 1024) {
      setIsOpen((prevState) => !prevState);
    }
  };
  return (
    <>
      <div className="flex relative">
        <div className="bg-gray-50  lg:block hidden min-h-[92vh] ">
          <div className="sticky top-[72px]">
            <Sidebar setTab={setTab} tab={tab} toggleDrawer={toggleDrawer} />
          </div>
        </div>
        <div className=" w-full">
          <div className="flex lg:justify-center  justify-between  items-center px-5 py-2 bg-bg1 font-display lg:text-2xl md:text-xl text-lg text-center">
            <IconButton className="w-fit h-fit lg:hidden" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <h1 className="">{tab}</h1>
            <span></span>
          </div>
          <div className="p-5">{tab === "Add Vendor" && <VendorList />}</div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        lockBackgroundScroll={true}
        className="overflow-y-auto "
      >
        <div className="flex justify-center py-3">
          <Button variant="text ">
            <Image
              placeholder="blur"
              src={Logo}
              alt="Logo"
              className="object-contain h-full  lg:w-40 w-32"
            />
          </Button>
        </div>

        <Sidebar setTab={setTab} tab={tab} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
