import React, { FC } from "react";

interface IProps {
  leftHeaderPlace?: React.ReactNode;
  rightHeaderPlace?: React.ReactNode;
  midHeaderPlace?: React.ReactNode;
  onClick?: () => void;
}

export const Header: FC<IProps> = ({
  leftHeaderPlace,
  rightHeaderPlace,
  midHeaderPlace,
}) => {
  return (
    <header className="flex flex-col items-center justify-center p-4 gap-2 sm:flex-row">
      <div className="flex-1 order-3 sm:order-0">{leftHeaderPlace}</div>
      <div className="flex-1 order-1 sm:order-0">{midHeaderPlace}</div>
      <div className="flex-1">{rightHeaderPlace}</div>
    </header>
  );
};
