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
  date,
  children,
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
            {children ? (
              <ModalBody>{children}</ModalBody>
            ) : (
              <>
                <ModalBody>
                  <p>{description}</p>
                  <small>{date}</small>
                  <Button color="secondary" onClick={() => setModalState(false)}>
                    OK THANK YOU!
                  </Button>
                </ModalBody>
              </>
            )}
          </>
        </ModalContent>
      </NextUiModal>
    </>
  );
};
