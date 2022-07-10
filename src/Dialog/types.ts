import React, { HTMLAttributes } from "react";

export type DialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode[] | React.ReactNode;
  handleSubmit?: () => void;
  handleClose?: () => void;
  closeOnPressEscape?: boolean;
  closeOnClickAway?: boolean;
  width?: string;
  height?: string;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}
export type ButtonProps = {
  primary?: boolean;
  padding?: string;
  margin?: string;
};
