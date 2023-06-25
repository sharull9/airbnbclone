"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

export default function Logo({}: Props) {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => {
          router.push("/");
        }}
        src="/logo.png"
        className="hiddem md:block cursor-pointer"
        alt="Logo"
        width={100}
        height={100}
      />
    </div>
  );
}
