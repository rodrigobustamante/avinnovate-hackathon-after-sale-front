import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
} from "@nextui-org/react";

// Example
// <SimpleCard
//   keyIndex="1"
//   title="Taylor Swift"
//   subTitle="Stream the TS event"
//   srcImg="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   cardType="large" o "small" (small por defecto)
// />

export const SimpleCard = ({
  keyIndex,
  title,
  subTitle,
  srcImg,
  cardType = "small",
  css
}) => {
  return (
    <Card
      shadow="sm"
      key={keyIndex}
      isPressable
      className={cardType !== "small " && "col-span-12 w-[200px] sm:col-span-4 my-2"}
    >
      {cardType !== "small" && (
        <CardHeader className="absolute top-1 z-10 flex-col !items-start">
          <p className="text-tiny font-bold uppercase text-white/60">{title}</p>
          <h4 className="text-large font-medium text-white">{subTitle}</h4>
        </CardHeader>
      )}
      {cardType === "small" ? (
        <>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="none"
              width="100%"
              alt={title}
              className="w-[210px] h-[140px] object-cover"
              src={srcImg}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{title}</b>
          </CardFooter>
        </>
      ) : (
        <>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src={srcImg}
          />
        </>
      )}
    </Card>
  )
}

