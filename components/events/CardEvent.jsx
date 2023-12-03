import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CustomSwitch } from "../shared/CustomSwitch";
import { Button } from "@nextui-org/react";

export const CardEvent = () => {
  return (
    <div>
      <Card className="my-2 flex w-60 py-4">
        <CardHeader className="flex-row justify-between px-4 pb-0 pt-2">
          <h2 className="text-lg font-bold">The Eras Tour</h2>
          <CustomSwitch />
        </CardHeader>
        <CardBody className="mx-2 overflow-visible py-2">
          <p className="py-4 text-sm">
            Room-filling sound, Intelligent assistant. Smart home control. Works
            seamlessly with iPhone. Check it out
          </p>
          <Image
            alt="Card background"
            className="rounded-xl object-cover px-8"
            src="/images/taylor-placeholder.png"
            width={270}
          />
        </CardBody>
        <div className="my-2 flex justify-between px-4 text-center">
          <p className="text-xs">June 5th 2023</p>

          <Button
            size="sm"
            color="secondary"
            endContent={
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
          >
            Add Ticket
          </Button>
        </div>
      </Card>
    </div>
  );
};
