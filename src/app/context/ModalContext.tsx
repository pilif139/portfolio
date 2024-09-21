"use client";

import React, {ReactNode, useContext, useState} from "react";
import Modal from "@/components/Modal";

type ModalContextType = {
    setComponent: React.Dispatch<React.SetStateAction<ReactNode | null>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setClassName: React.Dispatch<React.SetStateAction<string>>;
} | undefined;

const ModalContext = React.createContext<ModalContextType>(undefined);

type ModalContextProviderProps = {
    children: React.ReactNode;
}

export default function ModalContextProvider({children} : ModalContextProviderProps) {
  const [component, setComponent] = useState<ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState("");
  const value = { setComponent, setIsOpen, setClassName };

  const handleClose = () => {
    setIsOpen(false);
    setClassName("");
    setComponent(null);
  }

  return (
    <ModalContext.Provider value={value}>
      <Modal onClose={handleClose} isOpen={isOpen} className={className}>{component}</Modal>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}