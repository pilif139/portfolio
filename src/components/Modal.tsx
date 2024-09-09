import React from "react";
import {AnimatePresence} from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({isOpen, onClose, children, className}: ModalProps) {

  return (
      <AnimatePresence>
        {isOpen &&
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
                <div className={`${className} absolute`}>
                  {children}
                </div>
            </div>
        }
      </AnimatePresence>
  );
}