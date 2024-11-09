import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <Menubar className="flex space-x-4">
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger className="text-primary hover:bg-gray-700 px-3 py-2 rounded-md">Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link to="/form">
            <MenubarTrigger className="text-primary hover:bg-gray-700 px-3 py-2 rounded-md">Add</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;