"use client";
import { SafeUser } from "@/app/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

type Props = {
  currentUser?: SafeUser | null;
};

export default function Navbar({ currentUser }: Props) {
  return (
    <div className="fixed z-10 w-full bg-primary shadow-sm">
      <div className="border-b-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
}
