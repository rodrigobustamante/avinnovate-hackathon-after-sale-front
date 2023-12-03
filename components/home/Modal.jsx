import {
  Modal as NextUiModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
  Button,
} from "@nextui-org/react";

export const Modal = ({
  open,
  setModalState,
  modalTitle,
  size = "md",
  modalPlacement = "center",
  description,
}) => {
  return (
    <>
      <NextUiModal
        isOpen={open}
        placement={modalPlacement}
        size={size}
        onOpenChange={() => setModalState(!open)}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              {modalTitle}
            </ModalHeader>
            <ModalBody>
              <p>{description}</p>
              <Button color="primary" onClick={() => setModalState(false)}>
                OK THANK YOU!
              </Button>
            </ModalBody>
          </>
        </ModalContent>
      </NextUiModal>
    </>
  );
};
