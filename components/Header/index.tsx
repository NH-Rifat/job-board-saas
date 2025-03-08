import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/general/ThemeToggle";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Job Marshal Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Marshal</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Header;
