import { Grip, Hamburger, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

import { LocaleToggleBtn } from "./LocaleToggleBtn";
import Nav from "./Nav";
import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const MobileHeader = () => {
  return (
    <div className="block md:hidden">
      <div className="flex w-full items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-foreground">Header</h1>
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost">
              <Grip className="size-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DrawerTrigger>
          {/* Drawer content goes here */}
          <DrawerContent>
            <DrawerHeader>
              <div className="flex w-full items-center justify-between">
                <div>
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>Menu Description</DrawerDescription>
                </div>
                <DrawerClose asChild>
                  <Button variant="ghost">
                    <X className="size-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <div className="px-4">
              <Nav />
            </div>
            <DrawerFooter>
              <div className="flex w-full items-center justify-end">
                <LocaleToggleBtn />
                <ThemeToggleBtn />
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileHeader;
