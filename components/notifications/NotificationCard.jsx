"use client";
import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Modal } from "../home/Modal";

const NotificationCard = ({ title, text, isOpen }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Card
        className="w-full"
        isPressable
        onClick={() => setModalState(!modalState)}
      >
        <CardBody className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-base font-bold uppercase">{title}</h1>
            <p className="w-48 truncate sm:w-64 md:w-96">{text}</p>
          </div>
          <div>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
            )}
          </div>
        </CardBody>
      </Card>

      <Modal
        open={modalState}
        setModalState={setModalState}
        modalTitle={title}
        description={text}
      />
    </>
  );
};

export default NotificationCard;
