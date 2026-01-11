"use client";
import React, { Children, ReactNode } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { MagicButton } from "./MagicButton";

export const AnimatedModal = ({children}:{children?:ReactNode}) => {
  return (
    <Modal>
        <ModalTrigger>
            <MagicButton title='Say Hi'/>
        </ModalTrigger>
        <ModalBody>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalBody>
    </Modal>
  )
}
