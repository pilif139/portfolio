"use client";

import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
  popUp
} from "@/utils/animations";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({isOpen, onClose, children, className}: ModalProps) {

  return (
      <AnimatePresence>
        {isOpen && children &&
            <div
                className="absolute inset-0 flex items-center justify-center z-50 overflow-hidden">
                <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>
                <div
                    className={`${className} fixed`}>
                  {children}
                </div>
            </div>
        }
      </AnimatePresence>
  );
}