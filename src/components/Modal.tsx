import React from "react";
import {AnimatePresence} from "framer-motion";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({isOpen, onClose, children, className}: ModalProps) {

  return ReactDOM.createPortal(
      <AnimatePresence>
        {isOpen &&
            <div className="absolute inset-0 flex items-center justify-center z-50 overflow-hidden">
                <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
                <div className={`${className} fixed`}>
                  {children}
                </div>
            </div>
        }
      </AnimatePresence>
  , document.body);
}