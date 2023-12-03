
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CustomSwitch } from "../shared/CustomSwitch";
import { Button } from "@nextui-org/react";

export const CardEvent = () => {
    return (
        <div>
            <Card className="py-4 flex w-60 my-2" >
                <CardHeader className="pb-0 pt-2 px-4 flex-row justify-between">
                    <h2 className="font-bold text-lg">The Eras Tour</h2>
                    <CustomSwitch />
                </CardHeader>
                <CardBody className="overflow-visible py-2 mx-2">
                    <p className="py-4 text-sm">
                        Room-filling sound, Intelligent assistant. Smart home control. Works seamlessly with iPhone. Check it out
                    </p>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl px-8"
                        src="/images/taylor-placeholder.png"
                        width={270}
                    />
                </CardBody>
                <div className="flex justify-between px-4 text-center my-2">
                    <p className="text-xs">
                        June 5th 2023
                    </p>

                    <Button size="sm" color="secondary" endContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    }>
                        Add Ticket
                    </Button>

                </div>
            </Card>

        </div>
    )
}
