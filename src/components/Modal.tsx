import React from "react";
import {AnimatePresence} from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({isOpen, onClose, children}: ModalProps) {

  return (
      <AnimatePresence>
        {isOpen &&
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
                <div className="absolute right-0 top-0">
                  {children}
                </div>
            </div>
        }
      </AnimatePresence>
  );
}