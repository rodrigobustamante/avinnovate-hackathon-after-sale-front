import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CustomSwitch } from "../shared/CustomSwitch";
import AddButton from "../shared/AddButton";

export const CardEvent = ({ name, description, image, date }) => {
  return (
    <Card className="my-2 flex w-60 py-4 h-[340px]">
      <CardHeader className="flex-row justify-between px-4 pb-0 pt-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <CustomSwitch />
      </CardHeader>
      <CardBody className="mx-2 overflow-visible py-2">
        <p className="py-4 text-sm">
          {description}
        </p>
        <Image
          alt="Card background"
          className="rounded-xl object-cover px-8"
          src={image}
          height={150}
        />
      </CardBody>
      <div className="my-2 flex justify-between px-4 text-center">
        <p className="text-xs">{date}</p>

        <AddButton text="Add ticket" />
      </div>
    </Card>
  );
};
