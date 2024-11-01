import React from "react";

interface UserMenuProps {
  currentUser: any;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  return <div>{currentUser}</div>;
};

export default UserMenu;
