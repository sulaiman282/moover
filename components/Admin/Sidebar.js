import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ListIcon from "@mui/icons-material/List";
import MapIcon from "@mui/icons-material/Map";

import Divider from "@mui/material/Divider";
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Sidebar({setTab,tab,toggleDrawer}) {


  return (
    <div className=" border-t">
      <MenuItem className={ `${tab==="Add Vendor"? "bg-primary text-white":""} text-md font-sans  h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `} onClick={()=>{toggleDrawer();setTab("Add Vendor")}}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <PersonAddIcon className="lg:text-2xl md:text-xl text-lg  " /> Add
          Vendor
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Add Driver"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `} onClick={()=>{toggleDrawer();setTab("Add Driver")}} >
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <CarRentalIcon className="lg:text-2xl md:text-xl text-lg  " /> Add
          Driver
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Vendor List"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `} onClick={()=>{toggleDrawer();setTab("Vendor List")}}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <ListIcon className="lg:text-2xl md:text-xl text-lg  " /> Vendor List
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Manage Addresses"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `} onClick={()=>{toggleDrawer();setTab("Manage Addresses")}}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <MapIcon className="lg:text-2xl md:text-xl text-lg  " /> Manage
          Addresses
        </div>
      </MenuItem>

      <Divider className="  lg:py-10" />






<MenuItem className={ `${tab==="Orders"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <BusinessCenterIcon className="lg:text-2xl md:text-xl text-lg  " /> 
          Orders
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Invoices"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <ReceiptIcon className="lg:text-2xl md:text-xl text-lg  " /> 
          Invoices
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Drivers"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <AirlineSeatReclineExtraIcon className="lg:text-2xl md:text-xl text-lg  " /> 
          Drivers
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Vehicles"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <DriveEtaIcon className="lg:text-2xl md:text-xl text-lg  " /> 
          Vehicles
        </div>
      </MenuItem>
      <MenuItem className={ `${tab==="Cash Collection"? "bg-primary text-white":""} text-md font-sans   h-16 hover:bg-primary2 hover:text-white duration-300 px-5  `}>
        <div className="flex items-center gap-3 font-display lg:text-xl md:text-lg text-base ">
          <CurrencyExchangeIcon className="lg:text-2xl md:text-xl text-lg  " /> 
          Cash Collection
        </div>
      </MenuItem>
     

    </div>
  );
}
