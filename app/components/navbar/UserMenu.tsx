"use client";
import { useState, useCallback } from "react";
import { Avatar } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { toast } from "react-hot-toast";

type Props = {
  currentUser?: User | null;
};
export default function UserMenu({ currentUser }: Props) {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-hoverPrimaryBg transition cursor-pointer"
          onClick={() => {}}
        >
          New
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-1 shadow-sm border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow transition "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar alt="User" src="/placeholder.jpg" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[100%] bg-primaryBg overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My Trips" />
                <MenuItem onClick={() => {}} label="My Favourites" />
                <MenuItem onClick={() => {}} label="My Reservartions" />
                <MenuItem onClick={() => {}} label="My Properties" />
                <MenuItem onClick={() => {}} label="Airbnb My Home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toast.success("User Logged out");
                  }}
                  label="Log Out"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Log In" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
