"use client";

import { useState } from "react";

import { Grip, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Container from "./Container";
import HeaderActions from "./HeaderActions";
import NameCard from "./NameCard";
import Nav from "./Nav";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <Container>
        <div className="flex w-full items-center justify-between py-4">
          <NameCard />
          <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost">
                <Grip className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>Navigation</DrawerDescription>
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
                <Nav direction="vertical" onNavigate={() => setIsOpen(false)} />
              </div>

              <DrawerFooter>
                <div className="flex w-full items-center justify-center">
                  <HeaderActions />
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </div>
  );
};

export default MobileHeader;
