import Link from "next/link";
import React, { Suspense } from "react";
import { Redressed } from "next/font/google";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentuser } from "@/actions/getCurrentUser";
import Container from "../Container";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = async () => {
  const currentUser = await getCurrentuser();

  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-slate-200
  z-30
  shadow-sm
  "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/" className={`font-bold text-2xl`}>
              Tarno
            </Link>
            <div className="hidden md:block">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
