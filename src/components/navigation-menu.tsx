import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavigationMenu = () => {
  return (
    <div>
      <Link href={"/#features"}>
        <Button variant={"ghost"}>Features</Button>
      </Link>
      <Button variant={"ghost"}>Docs</Button>
      <Link href={"/#pricing"}>
        <Button variant={"ghost"}>Pricing</Button>
      </Link>
    </div>
  );
};

export default NavigationMenu;
