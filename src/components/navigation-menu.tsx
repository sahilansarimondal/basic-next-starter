import React from "react";
import { Button } from "./ui/button";

const NavigationMenu = () => {
  return (
    <div>
      <Button variant={"ghost"}>Products</Button>
      <Button variant={"ghost"}>Docs</Button>
      <Button variant={"ghost"}>Pricing</Button>
    </div>
  );
};

export default NavigationMenu;
