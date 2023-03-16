import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import AdminIndex from "../components/Admin/Index"
import VendorIndex from "../components/Vendor/Index"
export default function Home() {
  const [type, setType] = useState("admin");


  return (
    <>
      <Head>
        <title>Moover</title>
      </Head>
      <div className="">
   
{
  type === "admin" &&
  (
<AdminIndex/>
  )
}
{
  type === "vendor" &&
  (
<VendorIndex/>
  )
}

        
      </div>
    </>
  );
}
