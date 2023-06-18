"use client";
import Image from "next/image";
type Props = {
  alt: string | null | undefined;
  src: string | null | undefined;
};
export default function Avatar({ alt, src }: Props) {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt={alt || "Avatar"}
      src={src || "/placeholder.jpg"}
    />
  );
}
