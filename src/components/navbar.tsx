import { GalleryVerticalEnd } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import NavigationMenu from "./navigation-menu";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-6 sticky top-0 z-50">
      <div className=" flex gap-4 py-3">
        {" "}
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <div>
          <NavigationMenu />
        </div>
      </div>
      <div className="flex gap-4 py-3">
        <ModeToggle />
        <Button variant={"outline"}>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
