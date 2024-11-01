import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

type AvatarProps = {
  src?: string | null | undefined;
};

const Avatar = ({ src }: AvatarProps) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="avatar"
        className="rounded-full"
        height={30}
        width={30}
      />
    );
  }

  return <FaUserCircle size={24} />;
};

export default Avatar;
