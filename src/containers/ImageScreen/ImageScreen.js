import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assests/Fastor_logo_1.png";
import { useDrag } from "react-use-gesture";

export const ImageScreen = (props) => {
  const location = useLocation();

  // const { ref } = props;

  // const [logoPos, setLogoPos] = useState({ x: "50%", y: "50%" });

  // const bindLogoPos = useDrag((params) => {
  //   setLogoPos({
  //     x: params.offset[0],
  //     y: params.offset[1],
  //   });
  // });

  const { url } = location.state;

  return (
    <div className="flex h-full grow">
      <img src={url} className="h-screen w-full relative" alt="logo" />
      
      <div style={{ position: "absolute", top: "45%", left: "45%" }}>
        <img src={Logo} className="w-28 z-1" alt="logo" />
      </div>
    </div>
  );
};
