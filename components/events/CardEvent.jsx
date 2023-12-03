import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CustomSwitch } from "../shared/CustomSwitch";
import AddButton from "../shared/AddButton";

export const CardEvent = () => {
  return (
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

        <AddButton text="Add ticket" />
      </div>
    </Card>
  );
};
